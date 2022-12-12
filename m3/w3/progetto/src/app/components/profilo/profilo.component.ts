import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  datiUtente: any = [];

  constructor() { }

  ngOnInit(): void {
   let data : any = localStorage.getItem("user")
   this.datiUtente = JSON.parse(data)
  }

}
