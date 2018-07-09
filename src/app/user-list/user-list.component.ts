import { Component, OnInit } from '@angular/core';
import {UserListService} from '../user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserListService]
})
export class UserListComponent implements OnInit {

  public users: any[];
  constructor(private uls: UserListService) { }

  ngOnInit() {
    this.uls.listUsers().subscribe(v => this.users = v);
  }

}
