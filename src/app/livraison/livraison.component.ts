import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { LivraisonService } from './livraison.service';
import { Livraison } from '../shared/livraison.model';


@Component({
  selector : 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit{

  public livraisons: Livraison[];

  livraisonForm : FormGroup;

  operation: string = "ajouter";

  selectedLivraison : Livraison;


  constructor(private livraisonService: LivraisonService, private fb : FormBuilder, private route: ActivatedRoute){
    this.createForm();
  }

  ngOnInit(){
    this.initLivraison();
    this.livraisons = this.route.snapshot.data.livraisons;
  }

  createForm(){
    this.livraisonForm = this.fb.group({
      ref: ['',Validators.required],
      expediteur_nom: '',
      expediteur_prenom: '',
      expediteur_adresse: '',
      destinataire_nom: '',
      destinataire_adresse: ''
    });
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
        this.initLivraison();
        this.loadLivraisons();
      }
    );
  }

  updateLivraison(){
    this.livraisonService.updateLivraison(this.selectedLivraison).subscribe(
      res => {
        this.initLivraison();
        this.loadLivraisons();
      }
    );
  }

  deleteLivraison(){
    this.livraisonService.deleteLivraison(this.selectedLivraison.idLivraison).subscribe(
      res => {
        this.selectedLivraison = new Livraison();
        this.loadLivraisons();
      }
    );
  }

  initLivraison(){
    this.selectedLivraison = new Livraison();
    this.createForm();
  }


}
