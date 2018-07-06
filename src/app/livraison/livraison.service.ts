import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class LivraisonService {

  constructor(private http: HttpClient){

  }

  getLivraisons(): Observable<any>{
    return null;
  }
}
