import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LivraisonMockService } from './livraison.mock.service';
import { Livraison } from '../shared/livraison';

@Component({
  selector : 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit{

  livraisons: Livraison[];

  livraisonForm : FormGroup;
  constructor(private livraisonService: LivraisonMockService, private fb : FormBuilder){
    this.livraisonForm = this.fb.group({
      ref: ['',Validators.required],
      expediteur_nom: '',
      expediteur_prenom: '',
      expediteur_adresse: '',
      destinataire_nom: '',
      destinataire_adresse: ''
    });
  }

  ngOnInit(){
    this.livraisons = this.livraisonService.getLivraisons();
  }
}
