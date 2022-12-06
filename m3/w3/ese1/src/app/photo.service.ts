import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  getData() {
    this.http.get<Photo[]>("http://localhost:3000/photos").pipe ( catchError((err) => {
      throw new Error (" Lettura Get fallita ")
    }))
  }
}

// minuto 23.34
