import { createReducer, on } from "@ngrx/store";
import { initialState } from "./home.state";
import { loadtitle } from "./home.actions";


const _homeReducer = createReducer(
    initialState,
    on(loadtitle, (state, action: any) => {
        return {
            ...state,
            title: action.title
        }
    }),
);

export function homeReducer(state: any, action: any) {
    return _homeReducer(state, action);
}