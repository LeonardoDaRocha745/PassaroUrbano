import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra-service';
import { Pedido } from '../shared/pedido.model'
import {CarrinhoService} from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: any
  public itensCarrinho: ItemCarrinho[] = []
  //os campos do formulário
  public formulario: FormGroup = new FormGroup({
    /*Form Control aceita 3 paramentros opcionais 
    1- Valor inicial do campo
    2- Array de validadores
    3- Array de validadores assíncronos
    */
    'endereco': new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
    'numero':new FormControl(null, [Validators.required,Validators.minLength(1),Validators.maxLength(15)]),
    'complemento':new FormControl(null, []),
    'formaPagamento':new FormControl(null,[Validators.required]),
  })

  constructor(private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens()
     console.log('Array de itens do carrinho:', this.itensCarrinho)

  }

  public confirmarCompra(): void {
      if(this.formulario.status === 'INVALID'){
       
        this.formulario.get('endereco')?.markAsTouched()
        this.formulario.get('numero')?.markAsTouched()
        this.formulario.get('complemento')?.markAsTouched()
        this.formulario.get('formaPagamento')?.markAsTouched()

      }else{

        if(this.carrinhoService.exibirItens().length === 0){
          alert('Você não selecionou nenhuma oferta')
        }else{
        let pedido: Pedido = new Pedido (
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          this.carrinhoService.exibirItens()
          )
        console.log(pedido)
      
        this.ordemCompraService.efetivarCompra(pedido).subscribe
        ((idPedido: any)=>{
            this.idPedidoCompra = idPedido
  
        })
        

      }

       
      }
  }

  public adicionar(item: ItemCarrinho):void {
    this.carrinhoService.adicionarQuantidade(item)
  }
  public diminuir(item:ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item)
  }

 

}
