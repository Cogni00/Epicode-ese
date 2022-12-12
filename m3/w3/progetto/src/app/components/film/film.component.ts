import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Films } from 'src/app/interface/auth-response';
import { MovieService } from 'src/app/movie.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  movie: Films[] = [];

  constructor(private movieSrv: MovieService) {

   }

  ngOnInit(): void {
    this.movieSrv.getFilm().subscribe((res) => {
     this.movie = res
    })
  }

}
