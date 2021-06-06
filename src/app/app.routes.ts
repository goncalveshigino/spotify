
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { SerachComponent } from './components/serach/serach.component';


export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'search', component: SerachComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]