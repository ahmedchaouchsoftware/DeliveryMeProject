import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LivraisonComponent } from './livraison/livraison.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const appRoutes: Routes = [
  {path: 'livraison', component: LivraisonComponent},
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
  exports: [RouterModule]
})
export class AppRoutingModule{

}
