import { Component, OnInit, Output } from '@angular/core';
import { Interface } from 'src/app/models/interface';
import { getPosts } from 'src/app/service/service.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

    post: Interface[] = []

    constructor() { }

    ngOnInit(): void {
        let cardPost = getPosts()
        this.post = cardPost
    }

}
