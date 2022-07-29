import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError  } from 'rxjs/operators';



@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private OfertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa 
    //retorno Oferta[]
    .pipe(
      //tempinho antes de chamar a requisção da API
    /*debounceTime(500),*/
    distinctUntilChanged(),//para fazer pesquisas distintas 
    switchMap((termo: string) =>{
      console.log('requisição http para api')
      //limpar o campo de busca depois de escrever
      if(termo.trim() === ''){
        return of<Oferta[]>([])
      }
        return this.OfertasService.pesquisaOfertas(termo)
    }))
    catchError((err:any)=>{
      console.log(err)
      return of<Oferta[]>([])
    })


  }

  public pesquisa(termoDaBusca: any):void{ 
    console.log('keyup caracter: ',termoDaBusca)
      this.subjectPesquisa.next(termoDaBusca)
  }
  public limpaPesquisa(): void {
   this.subjectPesquisa.next('') 
  }
 
  
 

}
