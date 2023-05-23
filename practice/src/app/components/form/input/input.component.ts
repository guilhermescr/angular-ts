import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() defaultUsername = 'userr';
  @Input() username = this.defaultUsername;

  clearUsername(): void {
    this.username = this.defaultUsername;
  }
}
