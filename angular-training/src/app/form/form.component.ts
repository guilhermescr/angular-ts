import { Component } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  user!: User;

  signUpUser(user: User): void {
    this.user = user;
    console.log('Account created successfully!');
  }
}
