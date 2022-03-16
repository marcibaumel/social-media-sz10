import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Post } from './models/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  getPosts() {
    return lastValueFrom(this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    ));
  }

  getComments(postId: number):Comment[] | any {
    return lastValueFrom(this.httpClient.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments'
    ));
  }

  //$(postId)
  deletePost(postId: number) {
    return lastValueFrom( this.httpClient.delete(
      'https://jsonplaceholder.typicode.com/posts/' + postId
    ));
  }

  constructor(private httpClient: HttpClient) {}
}
