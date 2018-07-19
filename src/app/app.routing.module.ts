import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LivraisonComponent } from './livraison/livraison.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LivraisonResolver } from './livraison/livraison.resolver';
import { UserResolver } from './user/user.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
    {
      path: 'livraison',
      component: LivraisonComponent,
      resolve: {
        livraisons: LivraisonResolver
      },
      outlet: 'contentOutlet'
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      outlet: 'ContentOutlet'
    },
    {
      path: 'user',
      component: UserComponent,
      resolve: {
        users: UserResolver
      },
        outlet: 'contentOutlet'
    },
    ]
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
  providers: [LivraisonResolver, UserResolver]
})
export class AppRoutingModule{

}
