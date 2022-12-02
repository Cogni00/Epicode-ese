import { Component, Input, OnInit, ɵgetUnknownElementStrictMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users';
import { invioUtente, userId } from 'src/app/service/service.service';


@Component({
  selector: 'app-dettaglio-users',
  templateUrl: './dettaglio-users.component.html',
  styleUrls: ['./dettaglio-users.component.scss']
})
export class DettaglioUsersComponent implements OnInit {


    @Input()
    user!: Users[];
    id: number = 0;



  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        let idString = params.get("id");
        this.id = parseFloat(idString!);
        userId(this.id);
        let get = invioUtente();
        this.user = get;
        console.log(this.user);
    });
  }

}
