import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, ReplaySubject } from 'rxjs';
import { Films } from './interface/auth-response';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  filmUrl = "http://localhost:3000/movies-popular"

  movie: Films[] = [];
  dataSubj = new ReplaySubject<boolean>()
  dataObs = this.dataSubj.asObservable()
  authSubj: any;


  constructor(private http:HttpClient) { }


  getFilm() {
    return this.http.get<Films[]>(this.filmUrl).pipe(catchError(err => {
      this.dataSubj.next(false)
      throw err;

    }))
  }
}
