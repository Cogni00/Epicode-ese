import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError , ReplaySubject, tap} from 'rxjs';
import { AuthResponse, Films, RegisterRequest } from './interface/auth-response';
import { Login } from './interface/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   jwtHelper = new JwtHelperService()
   private authSubj = new BehaviorSubject <null | AuthResponse>(null);

   user$ = this.authSubj.asObservable();

  registerUrl = " http://localhost:3000/register";
  userUrl = "http://localhost:3000/login"


  constructor(private http:HttpClient, private r: Router) { }

  register(data:{nome:string}) {
    return this.http.post<AuthResponse>(this.registerUrl,data).pipe(catchError((err)=> {
    throw err;
    }))
  }

  accedi(data:Login) {
    return this.http.post<AuthResponse>(this.userUrl, data).pipe(catchError(err => {
      throw err;
    }), tap((res) => {
      this.authSubj.next(res)
      localStorage.setItem("user", JSON.stringify(res))
    }))
  }

  esci() {
    localStorage.removeItem("user")
    this.authSubj.next(null)
    this.r.navigate(['login'])
  }


}


