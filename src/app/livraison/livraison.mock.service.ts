import {Injectable} from '@angular/core';
import {Livraison} from '../shared/livraison';

@Injectable()
export class LivraisonMockService {

  private LIVRAISONS : Livraison[] = [];

  constructor(){

    let livraison1: Livraison = new Livraison('L100','Nouira','Sarah','Courbevoie','LIDL','','Clichy');
    let livraison2: Livraison = new Livraison('L101','Abbes','Hamza','Asnieres','Carrefour','','La Defense');
    let livraison3: Livraison = new Livraison('L100','Nouira','Sarah','Courbevoie','Intermarche','','Paris');
    this.LIVRAISONS.push(livraison1);
    this.LIVRAISONS.push(livraison2);
    this.LIVRAISONS.push(livraison3);
  }

public getLivraisons(): Livraison[]{
  return this.LIVRAISONS;
}
}
