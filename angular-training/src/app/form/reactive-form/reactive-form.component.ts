import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  @Output() reactiveFormSubmitEvent = new EventEmitter<User>();

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getFormControlValidation(formControlName: string): boolean {
    return (
      this.reactiveForm.controls[formControlName].invalid &&
      (this.reactiveForm.controls[formControlName].dirty ||
        this.reactiveForm.controls[formControlName].touched)
    );
  }

  onSubmit(): void {
    if (this.reactiveForm.valid) {
      this.reactiveFormSubmitEvent.emit(this.reactiveForm.value);
      this.reactiveForm.reset();
    }
  }
}
