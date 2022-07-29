import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html',
  styleUrls: ['./requisitos.component.css'],
  providers: [OfertasService]
})
export class RequisitosComponent implements OnInit {

  public requisitosSO!: string
  public ProcessadorSO!: string
  public MemoriaSO!: string
  public PlacadadeVideoSO!: string
  public ArmazenamentoSO!: string


  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
this.route.parent?.params.subscribe((parametros: Params)=>{


      //dispara a promisse da oferta atualizando o id atual da rota

    this.ofertasService.getRequisitosOfertaPorId(parametros['id'])
    .then((resposta:any)=>{
  this.requisitosSO = resposta[0].SO,
  this.ProcessadorSO = resposta[0].Processador,
  this.MemoriaSO = resposta[0].Memoria,
  this.PlacadadeVideoSO = resposta[0].PlacaVideo,
  this.ArmazenamentoSO = resposta[0].Armazenamento
    })

  })

  }

  

}
