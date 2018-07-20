import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { API_URLS } from '../config/api.url.config';
import { Livraison } from '../shared/livraison.model';
import { CrudService } from '../shared/crud.service';


@Injectable()
export class LivraisonService implements CrudService{

  constructor(private http: HttpClient){

  }

  getAll(): Observable<any>{
    return this.http.get(API_URLS.LIVRAISONS_URL);
  }

  add(livraison : Livraison): Observable<any>{
    return this.http.post(API_URLS.LIVRAISONS_URL, livraison);
  }

  update(livraison : Livraison): Observable<any>{
    return this.http.put(API_URLS.LIVRAISONS_URL, livraison);
  }

  delete(idLivraison: number): Observable<any>{
    return this.http.delete(API_URLS.LIVRAISONS_URL + `/${idLivraison}`);
  }

}
