import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";
import { take } from "rxjs/internal/operators/take";
import { AuthService } from "../auth.service";

export interface AuthResponse {

  accessToken: string,
  user: {
    email: string,
    id: number
  }
}

export interface RegisterRequest {
  email:string,
  password: string,
  nome: string
}

export interface Login {
  email:string,
  password:string
}


export interface Films {

  adult: string,
  backdrop_path: string,
  genre_ids: number,
  id: number,
  original_language: string,
  original_title: string,
  overview: string
  popularity: number,
  poster_path: string,
  release_date: number,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
