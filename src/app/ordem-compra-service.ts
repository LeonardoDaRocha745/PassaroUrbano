import { Pedido } from "./shared/pedido.model";
import { Injectable } from "@angular/core";
import { HttpClient,HttpResponse,HttpRequest, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { URL_API } from "./app.api";

@Injectable()
export class OrdemCompraService{
    constructor(private http: HttpClient){}


    public efetivarCompra(pedido: Pedido): Observable<any> {
        const headers = { 'Content-Type': 'application/json' };
        const body = JSON.stringify(pedido);
     
        return this.http.post<any>(`${URL_API}/pedidos`, body, { headers }).pipe(map((resposta:any)=>{
            resposta.id
            console.log("ID:"+resposta.id)
        }));
      }

    
}