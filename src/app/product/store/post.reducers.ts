import { createReducer, on } from "@ngrx/store";
import { initialState } from "./post.state";
import { addproduct, addproductSuccess, loadproducts, loadproductsSuccess } from "./post.actions";


const _productReducer = createReducer(
    initialState,
    on(loadproducts, (state) => {
        return {
            ...state
        }
    }),
    on(loadproductsSuccess, (state, action: any) => {
        return {
            ...state,
            productlist: [...action.productlist],
        }
    }),
    on(addproductSuccess, (state, action: any) => {
        const _product = {...action.productinput};
        return {
            ...state,
            productlist: [...state.productlist, _product]
        }
    }),
);

export function productReducer(state: any, action: any) {
    return _productReducer(state, action);
}