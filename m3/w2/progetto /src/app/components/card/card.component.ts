import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Interface } from 'src/app/models/interface';
import { getPostFiltered, deletePost, updatePost } from 'src/app/service/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {

  constructor() { }

@Input() p!: Interface;
    post:Interface[] = []
    appSfondo = '';

  ngOnInit(): void {
    this.post = []
    getPostFiltered(true)
    .then((res) => {
        this.post = res
    })

  }

}
