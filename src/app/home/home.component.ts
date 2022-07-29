import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[]
  constructor(private ofertasService: OfertasService) { 
 // colocar um private é msm coisa que colocar um this.ofertas service recebe ofertas
  }


  ngOnInit() {
   this.ofertasService.getOfertas().then(
 //função de chamar as ofertas ao iniciar
     (ofertas: Oferta[])=>{
    this.ofertas = ofertas
   },
   )
   .catch( 
     
    (param:any) =>{ console.log(param)}
   
   )

 
  }


}
