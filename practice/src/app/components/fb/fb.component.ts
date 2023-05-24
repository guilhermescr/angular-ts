import { Component } from '@angular/core';
import { FbService } from 'src/app/services/fb.service';
import { UserProfile } from './userProfile';

@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.css'],
})
export class FbComponent {
  users: UserProfile[] = [];
  testOfArray: any[] = [];

  constructor(private fbService: FbService) {}

  checkValues(): void {
    console.log(this.fbService.getAll());
  }

  createUser(): void {
    const user: UserProfile = {
      id: 2,
      fullname: 'Chicken Smith McWay',
      nickname: 'McChicken',
      profilePicture:
        'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXGzDAK/200/200/original?country=br',
    };
    this.fbService.create(user);
  }
}
