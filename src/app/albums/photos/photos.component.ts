import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos$;
  albumId;
  constructor(private albumserv:AlbumService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.albumId= this.route.snapshot.params.albumId
     this.albumserv.getPhotos(this.albumId).subscribe(res=> this.photos$ = res)
  }

}
