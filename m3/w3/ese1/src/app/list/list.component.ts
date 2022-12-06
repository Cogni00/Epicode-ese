import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  photos: Photo[] = []

  constructor( private ps : PhotoService) { }

  ngOnInit(): void {
    this.ps.getData()
  }

   getPhotos() {}
}
