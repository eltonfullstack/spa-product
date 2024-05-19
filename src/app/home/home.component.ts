import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Home, HomeModel } from "./store/home.model";
import { getTitle } from "./store/home.selectors";
import { loadtitle } from "./store/home.actions";
import { Subject } from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    title!: Home[`title`];
    unsubscribe$ = new Subject<void>();

    constructor(
        private store: Store<Home>
    ) { }

    ngOnInit(): void {
        this.store.dispatch(loadtitle({ title: 'Obrigado Senhor!!!' }));
        this.store.select(getTitle).subscribe((data) => {
            this.title = data
        })
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}