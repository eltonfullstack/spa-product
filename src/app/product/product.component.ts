import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductService } from "../shared/services/product.service";
import { Store } from "@ngrx/store";
import { Product } from "./store/post.model";
import { getProducts } from "./store/post.selectors";
import { loadproducts } from "./store/post.actions";
import { Subject } from "rxjs";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

    name: string = 'Product';
    productInfo: any;

    unsubscribe$ = new Subject<void>();

    constructor(private store: Store<Product>) {}

    ngOnInit() {
        this.getAllProducts();
    }

    getAllProducts() {
        this.store.dispatch(loadproducts());
        this.store.select(getProducts).subscribe((data) => {
            this.productInfo = data
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}