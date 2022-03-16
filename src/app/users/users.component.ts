import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersService, private router: Router) {}

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  navigatePosts(userId: number) {
    this.router.navigate(['user', userId, 'posts']);
  }
}
