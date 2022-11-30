import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/models/interface';
import { getPostFiltered, getPosts } from 'src/app/service/service.service';


@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

    post: Interface[] = []

  constructor() { }

  ngOnInit(): void {
    this.post = []
        let r = getPostFiltered(false)
        r.then((res) => {
            this.post = res
        })

  }

}
