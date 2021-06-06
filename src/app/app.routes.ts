
import { Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component'
import { SerachComponent } from './components/serach/serach.component';


export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'search', component: SerachComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]