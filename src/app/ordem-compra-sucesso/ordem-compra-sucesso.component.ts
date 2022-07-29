import { Component, OnInit, Input } from '@angular/core';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {


  @Input()
  public idPedidoCompra!: number;
  public itensCarrinho: ItemCarrinho[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
