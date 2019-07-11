import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from '../app/component/customer/customer/customer.component'
import { HeroesComponent } from '../app/component/heroes/heroes/heroes.component'
import { LoginComponent } from '../app/component/login/login.component';
import { RegisterComponent } from '../app/component/register/register.component'



const routes: Routes = [
  { path: 'taketocustomer', component: CustomerComponent },
  { path: 'taketoheroes', component: HeroesComponent },
  { path: 'taketologin', component: LoginComponent },
  {path: 'taketoregister',component: RegisterComponent},
 {
    path: '',
    redirectTo: '/taketologin',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
