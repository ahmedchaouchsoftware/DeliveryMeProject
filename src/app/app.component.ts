import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  showHideSideBar : boolean = false;

  constructor(private appservice: AppService,
              private router: Router){}

  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }

  ngOnInit(){
    if(!this.appservice.authenticated){
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/home');
    }
  }
}
