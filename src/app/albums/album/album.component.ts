import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private albumserv:AlbumService) { }
  albums$:[]=[]
  ngOnInit() {
    this.albumserv.getAlbums().subscribe(res=>this.albums$= res)
    
  }

}
