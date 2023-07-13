import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { TestingChildrenComponent } from './testing-children/testing-children.component';
import { YellowMarkerCustomDirectiveComponent } from './yellow-marker-custom-directive/yellow-marker-custom-directive.component';
import { TestingAngularMaterialComponent } from './testing-angular-material/testing-angular-material.component';
import { FormComponent } from './form/form.component';
import { BooksApiComponent } from './books-api/books-api.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'life-cycle-hooks',
    component: LifeCycleHooksComponent,
  },
  {
    path: 'switch-case',
    component: SwitchCaseComponent,
  },
  {
    path: 'testing-children',
    component: TestingChildrenComponent,
  },
  {
    path: 'custom-directive-yellow-marker',
    component: YellowMarkerCustomDirectiveComponent,
  },
  {
    path: 'testing-angular-material',
    component: TestingAngularMaterialComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'books-test-api',
    component: BooksApiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
