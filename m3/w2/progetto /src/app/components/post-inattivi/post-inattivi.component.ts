import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/models/interface';
import { getPostFiltered, updatePost, deletePost } from 'src/app/service/service.service';


@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

    post: Interface[] = [];

  constructor() { }
  ngOnInit(): void {
    this.post = []
        getPostFiltered(false)
        .then((res) => {
            this.post = res
        })

}

cancellaPost(id :number) {
    deletePost(id)
    this.post = this.post.filter((e)=>{
        if(e.id == id) {return false}
        return true
  })

}
onActivePost(a: boolean, id: number) {
        updatePost(true, id);
        this.post = this.post.filter((e)=>{
            if(e.id == id) {return false}
            return true
      })
      }


}
