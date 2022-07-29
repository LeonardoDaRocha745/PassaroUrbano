import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{
        transform(texto: string, limite : number):string {
            if(texto.length >limite){
                return texto.substr(0, limite) + '...'
            }else{
                return texto
            }
        }
}