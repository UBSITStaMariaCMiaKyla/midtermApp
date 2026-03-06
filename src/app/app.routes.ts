import { Routes } from '@angular/router';

import { Home } from './component/home/home';
import { Navi } from './component/navi/navi';

import { Interpolation } from './databinding/interpolation/interpolation';
import { Property } from './databinding/property/property';
import { Event } from './databinding/event/event';
import { TwoWay } from './databinding/two-way/two-way';

import { Products } from './products/products';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'navi', component: Navi },

  { path: 'databinding/interpolation', component: Interpolation },
  { path: 'databinding/property', component: Property },
  { path: 'databinding/event', component: Event },
  { path: 'databinding/two-way', component: TwoWay },

  { path: 'products', component: Products },

  { path: '**', redirectTo: 'home' },
];