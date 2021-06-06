
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
       'Authorization': 'Bearer BQBWVxNxnXKXk554S7RPnCBf42PGqBkLhAwL-f-uuP8uFmeL1nyA5KqMjnFN7MgjfKmlOOVU5PU8pcJt8-w'
    });
    
    return this.http.get(url, { headers });

  }

  //Pegar novos 
  getNewReleases() {
   
    return this.getQuery('browse/new-releases')
            .pipe( map((data: any) => data.albums.items ));
   
  }

  getArtist( termino: string) {
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
           .pipe(map((data: any) => data.artists.items ));

  }


}
