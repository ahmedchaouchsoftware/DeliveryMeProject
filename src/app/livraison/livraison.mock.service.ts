import {Livraison} from '../shared/livraison';

export LivraisonMockService {

  const LIVRAISONS : Livraison[] = [];

  constructor(){

    let livraison1: Livraison = new Livraison('L100','Nouira','Sarah','Courbevoie','LIDL','','Clichy');
    let livraison1: Livraison = new Livraison('L101','Abbes','Hamza','Asnieres','Carrefour','','La Defense');
    let livraison1: Livraison = new Livraison('L100','Nouira','Sarah','Courbevoie','Intermarche','','Paris');
    LIVRAISONS.push(livraison1);
    LIVRAISONS.push(livraison2);
    LIVRAISONS.push(livraison3);
  }
}
