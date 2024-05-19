import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddRoutingModule } from "./add-routing.module";
import { AddComponent } from "./add.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AddRoutingModule,
    ],
    exports: [],
    declarations: [AddComponent],
    providers: [],
})
export class AddModule{}