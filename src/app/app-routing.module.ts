import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomerComponent} from '../app/component/customer/customer/customer.component'
import {HeroesComponent} from '../app/component/heroes/heroes/heroes.component'


const routes: Routes = [
  { path: 'taketocustomer', component: CustomerComponent },
  { path :'taketoheroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
