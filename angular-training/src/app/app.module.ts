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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
