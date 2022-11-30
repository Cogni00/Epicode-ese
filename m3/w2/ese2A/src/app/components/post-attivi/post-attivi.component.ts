import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/models/interface';
import { getPostFiltered, getPosts } from 'src/app/service/service.service';

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
        let r = getPostFiltered(true)
        r.then((res) => {
            this.post = res
        })

    }

}
