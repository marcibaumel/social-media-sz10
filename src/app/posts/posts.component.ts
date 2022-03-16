import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/posts';
import { User } from '../models/users';
import { PostsService } from '../posts.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []
  user?: User;

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute, private userService: UsersService) { }


  async onDeletePost(index: number){
    console.log(this.posts[index]);

    await this.postService.deletePost(this.posts[index].id);
    this.posts.splice(index, 1);
  }

  async ngOnInit(){
    const userId = this.activatedRoute.snapshot.paramMap.get('id');

    if(userId){
      this.posts = await this.userService.getPostsOfUSer(parseInt(userId));
      this.user = await this.userService.getOneUser(parseInt(userId));
    }else{
      this.posts = await this.postService.getPosts();
    }


  }

  async loadComments(index:number){
    this.posts[index].comments = await this.postService.getComments(this.posts[index].id);
  }

}
