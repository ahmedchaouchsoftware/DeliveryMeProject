import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { API_URLS } from '../config/api.url.config';


@Injectable()
export class LivraisonService {

  constructor(private http: HttpClient){

  }

  getLivraisons(): Observable<any>{
    return this.http.get(API_URLS.LIVRAISONS_URL);
  }
}
