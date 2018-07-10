
export class Livraison{
  constructor(public idLivraison?: number,
              public ref?: string,
              public expediteur_nom?: string,
              public expediteur_prenom?: string,
              public expediteur_adresse?: string,
              public destinataire_nom?: string,
              public destinataire_prenom?: string,
              public destinataire_adresse?: string){

  }
}
