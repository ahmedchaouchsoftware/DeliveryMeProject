import {Component, OnInit} from '@angular/core';
import {LivraisonMockService} from './livraison.mock.service';

@Component({
  selector : 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit{

  livraisons: Livraison[];
  constructor(private livraisonService: LivraisonMockService){

  }

  ngOnInit(){
    this.livraisons = this.livraisonService.getLivraisons();
  }
}
