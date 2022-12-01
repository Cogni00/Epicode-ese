import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/models/interface';
import { getPosts, updatePost } from 'src/app/service/service.service';


@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

    post: Interface[] = [];

  constructor() { }
  ngOnInit(): void {
    let cardPost = getPosts()
    this.post = cardPost

}
onActivePost(id: number, i: number) {
        updatePost({ active: true }, id);
        this.post.splice(i, 1);
      }


}
