import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

arraytodo: todo[]=[]

  constructor() { }

  ngOnInit(): void {
  //qua mettiamo il codice iniziale che viene eseguito la prima volta che il codice viene avviato
  fetch("http://jsonplaceholder.typicode.com/todo")
  .then(res=>res.json())
  .then ((res:todo[]) => {
    (res =>{this.arraytodo = res;
})
}

}


