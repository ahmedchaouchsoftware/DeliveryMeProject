import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LivraisonComponent } from './livraison/livraison.component';
import {LivraisonMockService} from './livraison/livraison.mock.service';
import {Livraison} from './shared/livraison';

@NgModule({
  declarations: [
    AppComponent,
    LivraisonComponent,
    Livraison
  ],
  imports: [
    BrowserModule
  ],
  providers: [LivraisonMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
