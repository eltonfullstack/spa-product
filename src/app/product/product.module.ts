import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { ProductRoutingModule } from "./product-routing.module";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { PRODUCT_STATE_NAME } from "./store/post.selectors";
import { productReducer } from "./store/post.reducers";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./store/post.effects";

@NgModule({
    declarations: [ProductComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        EffectsModule.forFeature([ProductEffects]),
        StoreModule.forFeature(PRODUCT_STATE_NAME, productReducer),
    ],
    exports: [ProductComponent]
})
export class ProductModule { }