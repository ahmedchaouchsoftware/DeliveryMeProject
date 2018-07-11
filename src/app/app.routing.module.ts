import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LivraisonComponent } from './livraison/livraison.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LivraisonResolver } from './livraison/livraison.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'livraison',
    component: LivraisonComponent,
    resolve: {
      livraisons: LivraisonResolver
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule],
  providers: [LivraisonResolver]
})
export class AppRoutingModule{

}
