import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { TestingChildrenComponent } from './testing-children/testing-children.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './testing-children/child/child.component';
import { YellowMarkerDirective } from './shared/directives/yellow-marker.directive';
import { YellowMarkerCustomDirectiveComponent } from './yellow-marker-custom-directive/yellow-marker-custom-directive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './testing-angular-material/angular-material.module';
import { FormModule } from './form/form.module';
import { FirstTestSuiteComponent } from './first-test-suite/first-test-suite.component';
import { StoreModule } from '@ngrx/store';
import { BooksApiComponent } from './books-api/books-api.component';
import { booksReducer } from './books-api/state/books.reducer';
import { collectionReducer } from './books-api/state/collection.reducer';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { CounterNgrxComponent } from './counter-ngrx/counter-ngrx.component';
import { counterReducer } from './counter-ngrx/state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    SwitchCaseComponent,
    TestingChildrenComponent,
    HomeComponent,
    ChildComponent,
    YellowMarkerDirective,
    YellowMarkerCustomDirectiveComponent,
    FirstTestSuiteComponent,
    BooksApiComponent,
    RxjsOperatorsComponent,
    CounterNgrxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormModule,
    StoreModule.forRoot({
      books: booksReducer,
      counter: counterReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
