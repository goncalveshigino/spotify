import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styles: [
  ]
})
export class SerachComponent  {

  artistas: any[] = [];

  constructor( private spotify: SpotifyService) { }

  buscar(termino: string) {

    this.spotify.getArtist(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
      });
  }
  
}
