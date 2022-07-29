import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import {Oferta} from './shared/oferta.model'
import { URL_API } from './app.api';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class OfertasService{

    

    //serviço de consumo da API 

    constructor(private http:HttpClient){}
      public getOfertas(): Promise<Oferta[]> {
            return firstValueFrom(this.http.get(`${URL_API}/ofertas?destaque=true`))
            .then((resposta: any) => resposta)
        }

 public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]>{
     //aqui ele pega
     return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
     .toPromise(

     )
     //aqui ele devolve a resposta da requisição
     .then((resposta: any) => resposta)

 }

 public getOfertasPorId(id: number):Promise<Oferta>{
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
    .toPromise()  .then((resposta: any) => resposta[0])
 
 }

 public getRequisitosOfertaPorId(id:number): Promise<string>{
    return this.
    http.get(`${URL_API}/requisitos?id=${id}`).toPromise()
    .then((resposta:any)=>{
        console.log(resposta)
        return resposta
     
    })
 }

 public getAvaliacoesOfertaPorId(id:number): Promise<string>{
    return this.http.get(`${URL_API}/avaliacoes?id=${id}`).toPromise()
    .then((resposta:any)=>{
        console.log(resposta)
        return resposta
     
    })
 }

 //cria o método de pesquisar dentro do serviço de oferta(ofertaservice)
 //importa o array de oferta e ofertaservice no topo(topocomponent)
 //cria um método de pesquisa onde ele vai pegar o termo e pesquisar
 //ai depois ele vai pegar oq foi digitado e fazer um subscribe

 public pesquisaOfertas(termo: string): Observable <Oferta[]>{
   //like é algo do json server, cada API pode resp e usar termos diferentes para essa função
    return this.http.get(`${URL_API}/ofertas?titulo_like=${termo}`)
    //operador de tranformação do observable map
    .pipe(
    retry(10),
    map((resposta:any)=> resposta))
    
 }




        
    }

    

      


            
   

   
