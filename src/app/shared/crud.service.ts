import { Observable } from 'rxjs/Observable';

export interface CrudService {
  getAll(): Observable<any>;

  add(livraison): Observable<any>;

  update(livraison): Observable<any>;

  delete(id): Observable<any>;
}
