import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/form/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    FormComponent,
    InputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
