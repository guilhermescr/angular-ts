import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { UserProfile } from '../components/fb/userProfile';

@Injectable({
  providedIn: 'root',
})
export class FbService {
  private dbPath = '/users';

  usersRef: AngularFireList<UserProfile>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<UserProfile> {
    return this.usersRef;
  }

  create(user: UserProfile): any {
    return this.usersRef.push(user);
  }

  update(key: string, value: any): Promise<void> {
    return this.usersRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.usersRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.usersRef.remove();
  }
}
