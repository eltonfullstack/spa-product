import { createAction, props } from "@ngrx/store";
import { Home, HomeModel } from "./home.model";

export const LOAD_TITLE = '[Home] Load Title';
// export const LOAD_TITLE_SUCCESS = '[Home] Load Title Success';

export const loadtitle = createAction(LOAD_TITLE, props<{ title: string }>());
// export const loadtitleSuccess = createAction(LOAD_TITLE_SUCCESS, props<{ title: string }>());