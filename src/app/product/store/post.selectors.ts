import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "./post.model";

export const PRODUCT_STATE_NAME = 'product';

export const getProductsState = createFeatureSelector<Product>(PRODUCT_STATE_NAME);

export const getProducts = createSelector(getProductsState, (state) => {
    return state.productlist;
});