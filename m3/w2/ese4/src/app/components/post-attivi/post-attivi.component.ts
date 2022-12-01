import { Component, OnInit, Output } from '@angular/core';
import { Interface } from 'src/app/models/interface';
import { getPosts, updatePost, callArray, deletePost } from 'src/app/service/service.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

    post: Interface[] = []

    constructor() { }

    ngOnInit(): void {
        callArray()
        let cardPost = getPosts()
        this.post = cardPost
    }

    cancella(id :number) {
        deletePost(id)
    }



    onInactivePost(id:number,i:number){
        updatePost({active:false},id)
        this.post.splice(i,1)
      }
}
