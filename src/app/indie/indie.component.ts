import { Component, OnInit } from '@angular/core';
import {Oferta} from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-indie',
  templateUrl: './indie.component.html',
  styleUrls: ['./indie.component.css'],
  providers: [OfertasService]
})
export class IndieComponent implements OnInit {

  //criando um atributo q vai receber o serviço
  public ofertas!: Oferta[] 
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('Indie')
    .then((ofertas: Oferta [])=>{
      // instanciando o array de ofertas
      this.ofertas = ofertas
    })
  }

}
