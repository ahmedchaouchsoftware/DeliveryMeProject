import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { LivraisonService } from './livraison.service';

@Injectable()
export class LivraisonResolver implements Resolve<any>{

  constructor(private livraisonService:LivraisonService){

  }
  resolve(){
    return this.livraisonService.getAll();
  }
}
