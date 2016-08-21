import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'home', component: SearchComponent },
  { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(routes);
