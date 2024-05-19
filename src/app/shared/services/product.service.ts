import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { Product } from "src/app/product/store/post.model";

@Injectable({
    providedIn: 'root'}
)
export class ProductService {

    urlApi: string = 'http://localhost:8080/api/v1/products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.urlApi).pipe(
            catchError((error) => of([]))
        );
    }

    addProduct(product: Product): Observable<any> {
        return this.http.post<Product>(this.urlApi, product).pipe(
            catchError((error) => of({}))
        );
    }

}