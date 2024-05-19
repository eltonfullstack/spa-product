import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Product } from "../store/post.model";
import { Router } from "@angular/router";
import { addproduct } from "../store/post.actions";

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

    formAdd!: FormGroup;

    constructor(
        private store: Store<Product>,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm() {
        this.formAdd = new FormGroup({
            name: new FormControl('', Validators.required),
            image: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
        })
    }

    get f() {
        return this.formAdd.controls;
    }

    submmit() {
        console.log(this.formAdd.value);

        this.store.dispatch(addproduct({ productinput: this.formAdd.value }));
        this.router.navigate(['/products']);
    }
}