import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { RegisterRequest } from 'src/app/interface/auth-response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

err: string|undefined;

  constructor(private authSrv: AuthService, private r:Router ) { }

  ngOnInit(): void {
  }

  register(f:NgForm):void {
  if(f.valid) {
    let data :RegisterRequest = {
      email: f.value.email,
      password: f.value.password,
      nome: f.value.nome
    }
    this.authSrv.register(data).pipe(catchError(err=> {
      this.err = err.error
      throw new Error ("err")
    })).subscribe(res=>{
      this.err = undefined
    //TODO IN CORSO
      this.r.navigate([""]);

    })
  }

  }
}
