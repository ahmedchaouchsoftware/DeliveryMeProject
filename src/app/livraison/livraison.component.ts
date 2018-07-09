import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LivraisonService } from './livraison.service';
import { Livraison } from '../shared/livraison';

@Component({
  selector : 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit{

  livraisons: Livraison[];

  livraisonForm : FormGroup;
  constructor(private livraisonService: LivraisonService, private fb : FormBuilder){
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
    this.loadLivraisons();
  }

  loadLivraisons(){
    this.livraisonService.getLivraisons().subscribe(
      data => { this.livraisons = data },
      error => { console.log('An error was occured.')},
      () => { console.log('loading livraisons was done.')}
    );
  }

  addLivraison(){
    const l = this.livraisonForm.value;
    this.livraisonService.addLivraison(l).subscribe(
      res => {
        this.loadLivraisons();
      }
    );
  }
}
