import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { StoreModule } from "@ngrx/store";
import { HOME_STATE_NAME } from "./store/home.selectors";
import { homeReducer } from "./store/home.reducers";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule, 
        HomeRoutingModule,
        StoreModule.forFeature(HOME_STATE_NAME, homeReducer),
    ],
    exports: [HomeComponent]
})
export class HomeModule {}