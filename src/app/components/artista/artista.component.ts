import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean | undefined;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {

    this.router.params.subscribe(data => {
       
      this.getArtist(data['id']);
      this.getTopTracks(data['id'])

    });


  }
 

  // Pegar Artista por ID
  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe(dataArtist => {
        this.artist = dataArtist;
        this.loading = false;
       })
  }

  getTopTracks( id: string) {
   
    this.spotify.getToTracks( id )
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      })
  }

 

}
