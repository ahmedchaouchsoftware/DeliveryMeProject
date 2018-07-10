import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { API_URLS } from '../config/api.url.config';
import { Livraison } from '../shared/livraison';


@Injectable()
export class LivraisonService {

  constructor(private http: HttpClient){

  }

  getLivraisons(): Observable<any>{
    return this.http.get(API_URLS.LIVRAISONS_URL);
  }

  addLivraison(livraison : Livraison): Observable<any>{
    return this.http.post(API_URLS.LIVRAISONS_URL, livraison);
  }

  updateLivraison(livraison : Livraison): Observable<any>{
    return this.http.put(API_URLS.LIVRAISONS_URL, livraison);
  }

  deleteLivraison(idLivraison: number):Observable<any>{
    return this.http.delete(API_URLS.LIVRAISONS_URL + `/${idLivraison}`);
  }
}
