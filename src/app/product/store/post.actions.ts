import { createAction, props } from "@ngrx/store";
import { Product } from "./post.model";

export const LOAD_PRODUCS = '[Product] Load Products';
export const LOAD_PRODUCS_SUCCESS = '[Product] Load Products Success';
export const LOAD_PRODUCS_FAIL = '[Product] Load Products Fail';

export const ADD_PRODUCT = '[Product] Add Product';
export const ADD_PRODUCT_SUCCESS = '[Product] Add Product Success';
export const ADD_PRODUCT_FAIL = '[Product] Add Product Fail';

export const loadproducts = createAction(LOAD_PRODUCS);
export const loadproductsSuccess = createAction(LOAD_PRODUCS_SUCCESS, props<{ productlist: Product[] }>());
export const loadproductsFail = createAction(LOAD_PRODUCS_FAIL, props<{ error: string }>());

export const addproduct = createAction(ADD_PRODUCT, props<{ productinput: Product }>());
export const addproductSuccess = createAction(ADD_PRODUCT_SUCCESS, props<{ productinput: Product }>());
export const addproductFail = createAction(ADD_PRODUCT_FAIL, props<{ error: string }>());

