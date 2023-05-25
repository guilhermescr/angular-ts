import { Component, OnInit } from '@angular/core';
import { FbService } from 'src/app/services/fb.service';
import { UserProfile } from './userProfile';

@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.css'],
})
export class FbComponent {
  users: UserProfile[] = [];
  usersId: number[] = [];

  constructor(private fbService: FbService) {}

  ngOnInit() {
    this.fbService
      .getAll()
      .valueChanges()
      .subscribe((users) => (this.users = users));
  }

  createUser(): void {
    const user: UserProfile = {
      id: this.users.length + 1,
      fullName: 'Chicken Smith McWay',
      nickname: 'McChicken',
      profilePicture:
        'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXGzDAK/200/200/original?country=br',
    };

    const userKey = this.fbService.create(user).key;
    this.fbService.update(userKey, {
      ...user,
      key: userKey,
    });
  }

  deleteUser({ currentTarget }: Event): void {
    const deleteButton = currentTarget as HTMLButtonElement;
    const userId = Number(deleteButton.id);
    const userToBeDeleted = this.users[userId];
    const userKey = userToBeDeleted.key;

    if (typeof userKey === 'string') {
      this.fbService.delete(userKey);
    }
  }
}
