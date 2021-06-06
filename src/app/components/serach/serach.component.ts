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
  loading: boolean | undefined;

  constructor(private spotify: SpotifyService,) {
  
    
  }
  
  

  buscar(termino: string) {
    this.loading = true;
    this.spotify.getArtist(termino)
      .subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  }
  
}
