import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, RegisterRequest } from './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    registerUrl = "http://localhost:3000/register"

  constructor(private http:HttpClient) { }

  register(data:RegisterRequest) {
    return this.http.post<AuthResponse>(this.registerUrl, data)

  }

  login() {}
}
