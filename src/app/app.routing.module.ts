import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LivraisonComponent } from './livraison/livraison.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LivraisonResolver } from './livraison/livraison.resolver';



export const appRoutes: Routes = [
  {
    path: 'livraison',
    component: LivraisonComponent,
    resolve: {
      livraisons: LivraisonResolver
    }
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
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
