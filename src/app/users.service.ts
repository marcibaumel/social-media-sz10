import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Post } from './models/posts';
import { User } from './models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsers() {
    return lastValueFrom(this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`));
  }

  getOneUser(id: number) {
    return lastValueFrom(this.http.get<User>(`https://jsonplaceholder.typicode.com/users/`+id));
  }

  getPostsOfUSer(userId: number) {
    return lastValueFrom(this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/users/`+userId+`/posts`));
  }

  constructor(private http: HttpClient) {}
}
