import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [FormComponent, ReactiveFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {}
