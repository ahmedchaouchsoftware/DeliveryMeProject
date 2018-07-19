import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { LivraisonComponent } from './livraison/livraison.component';
import {LivraisonMockService} from './livraison/livraison.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { LivraisonService } from './livraison/livraison.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { XhrInterceptor } from './xhr.interceptor';
import { UserComponent } from './user/user.component';
import { principalReducer } from './shared/principal.reducer';
import { CrudComponent } from './shared/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    LivraisonComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal: principalReducer})
  ],
  providers: [
    LivraisonMockService,
    LivraisonService,
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
