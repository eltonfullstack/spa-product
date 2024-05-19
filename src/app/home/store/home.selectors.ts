import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Home } from "./home.model";


export const HOME_STATE_NAME = 'home';

const getHomeStateTitle = createFeatureSelector<Home>(HOME_STATE_NAME);

export const getTitle = createSelector(
    getHomeStateTitle,
    (state) => state.title
)