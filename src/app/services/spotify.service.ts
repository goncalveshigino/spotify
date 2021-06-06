
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
       'Authorization': 'Bearer BQBHpLGbgtXvYTuO-hc3HVvhTys9so-B586xaZHNuEwvoK7PENuJQzkL46s8uk4dYuyeA5jq_B_1I3-2bmc'
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
