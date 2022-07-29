import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css'],
  providers: [OfertasService]

})
export class RpgComponent implements OnInit {

  //criando um atributo q vai receber o serviço
  public ofertas!: Oferta[] 

  constructor(private ofertasServices: OfertasService ) { }

  ngOnInit() {
  this.ofertasServices.getOfertasPorCategoria('RPG')
  .then((ofertas: Oferta[]) => {
    // instanciando o array de ofertas
this.ofertas = ofertas
  })

  }

}
