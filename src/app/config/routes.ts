import { Routes } from '@angular/router';
import {HomeComponent} from '../screens/home/home.component';
import {PageNotFoundComponent} from '../screens/page-not-found/page-not-found.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
    
  ];

  
  export default appRoutes;