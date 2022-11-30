import { Component, Input, OnInit } from '@angular/core';
import { Interface } from 'src/app/models/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {

  constructor() { }

@Input() p!: Interface;


  ngOnInit(): void {
  }

}
