import { Component } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent {
  firstSectionTitle: string = 'First Section :)';
  isImageDestroyed: boolean = false;

  returnImage(): string {
    return 'https://cdn.shopify.com/s/files/1/1240/0898/files/step1_img.png?v=1620247041';
  }

  toggleImage(): void {
    this.isImageDestroyed = !this.isImageDestroyed;
  }
}
