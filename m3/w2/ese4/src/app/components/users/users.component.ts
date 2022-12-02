import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { getUsers } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    user : Users[] = [];


  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.user = []
        getUsers()
        .then((res) => {
            this.user = res
        })
  }

}

