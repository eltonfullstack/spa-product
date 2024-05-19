import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/shared/services/product.service";
import { addproduct, addproductFail, addproductSuccess, loadproducts, loadproductsFail, loadproductsSuccess } from "./post.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Product } from "./post.model";

@Injectable()
export class ProductEffects {

    constructor(
        private action$: Actions,
        private productService: ProductService,
    ) {}

    _product = createEffect(() => 
      this.action$.pipe(
        ofType(loadproducts),
        exhaustMap(() => {
            return this.productService.getProducts().pipe(
                map((data) => {
                    console.log('[LOAD PRODUCTS EFFECT]', data);
                    return loadproductsSuccess({ productlist: data })
                }),
                catchError((error) => of(loadproductsFail({ error: error })))
            )
        })
      )
    );

    _addProduct = createEffect(() =>
        this.action$.pipe(
            ofType(addproduct),
            exhaustMap((action: any) => {
                return this.productService.addProduct(action.productinput).pipe(
                    map((data) => {
                        console.log('[ADD PRODUCT EFFECT]', data);
                        return addproductSuccess({ productinput: data as Product })
                    }),
                    catchError((error) => of(addproductFail({ error: error })))
                )
            })
        )
    )
}