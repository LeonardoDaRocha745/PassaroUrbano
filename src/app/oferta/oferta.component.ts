import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import {CarrinhoService} from '../carrinho.service';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  /*
  private tempoObservableSubscription!: Subscription
  private meuObservableTesteSubscription!: Subscription
  */

  private route!: ActivatedRoute
  //cm essa variavel a gente consegue fazer o data binding
  //recuperar o valor delas da API no template HTML
  public oferta!:Oferta

  constructor(route:ActivatedRoute,private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService

    ) { 
   this.route = route;
  }

  ngOnInit(): void {


    this.route.params.subscribe((parametros: Params)=>{

      //dispara a promisse da oferta atualizando o id atual da rota
    this.ofertasService.getOfertasPorId(parametros['id'])
    .then((oferta : Oferta)=>{
      this.oferta = oferta
      console.log(this.oferta)
    })
    
  })

    /*
    this.route.params.subscribe(
      //aqui foi emitida 3 funções atraves do subscribe, Instrução, erro e conclusão
      (parametro:any)=>{
      console.log(parametro)
    }, 
    (erro:any) => console.log(erro),
    ()=> console.log ('Processamento foi classificado como concluido')

    )
    */

  /*
   //observavél
   let tempo = interval(2000)

   //observador assistindo pelo subscribe
   this.tempoObservableSubscription = tempo.subscribe((intervalo:number)=>{
    console.log(intervalo)
   })


//observable(oberservavel)

let meuObservableTeste = Observable.create((observer: Observer <string>)=>{
  observer.next('Primeiro evento da stream')
  observer.error("Deu ruim kkkkjj")
  observer.complete()
})

//observable(oberservador)
this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
  //essa variavel resultado vai receber aquele texto "primeiro evento da stream"
  (resultado: any) => console.log(resultado),
  //função tratando do erro
  (erro: string)=> console.log(erro),
  //função tratando da conclusão
  ()=>console.log('Stream de eventos foi finalizada'),
)
*/

  }

  ngOnDestroy() {
    //quando o componente(tela) é destruido/sair da tela, realiza o unsubscribe(para de funcuonar o subscribe)
    /*
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
    */
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta)
      console.log(this.carrinhoService.exibirItens())
  }


}
