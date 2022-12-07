import { Component, OnInit, Output } from '@angular/core';
import { Interface } from 'src/app/models/interface';
import { updatePost, getPostFiltered, deletePost } from 'src/app/service/service.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

    post: Interface[] = []

    constructor() { }

    ngOnInit(): void {
        this.post = []
        getPostFiltered(true)
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


    onInactivePost(a: boolean , id:number){
        updatePost(false, id)
        this.post = this.post.filter((e)=>{
            if(e.id == id) {return false}
            return true
      })

      }
}
