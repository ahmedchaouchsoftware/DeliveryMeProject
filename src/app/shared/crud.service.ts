import { Observable } from 'rxjs/Observable';

export interface CrudService {
  getLivraisons(): Observable<any>;

  addLivraison(produit): Observable<any>;

  updateLivraison(produit): Observable<any>;

  deleteLivraison(id): Observable<any>;
}
