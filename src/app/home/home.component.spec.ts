import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from "@ngrx/store";

describe('HomeComponent', () => {
    
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    const store = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            providers: [
                RouterTestingModule,
                { provide: Store, useValue: store }],
        });

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
    });

    it('should create home component', () => {
        expect(component).toBeTruthy();
    });

});