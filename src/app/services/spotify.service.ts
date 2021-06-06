
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service ');
  }



  //Querys
  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({
       'Authorization': 'Bearer BQDfMeg8hvtILFcEDgP8REvKEi4fZtOrkWaGMlGwb1_BlsBHW4r5hCQxROOEhNrBxpmmg5s3nhYynnVkKL4'
    });
    
    return this.http.get(url, { headers });

  }

  
  


  //Pegar novos 
  getNewReleases() {
   
    return this.getQuery('browse/new-releases')
            .pipe( map((data: any) => data.albums.items ));
   
  }

  getArtists( termino: string) {
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
           .pipe(map((data: any) => data.artists.items ));

  }
  
   getArtist( id: string) {
    
     return this.getQuery(`artists/${ id }`);
          // .pipe(map((data: any) => data.artists.items ));

   }
  
  getToTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
           .pipe( map( (data: any) => data.tracks));
  }

  


}
