import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";



import { CarrinhoService } from './carrinho.service';


import{ROUTES} from './app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { IndieComponent } from './indie/indie.component';
import { RpgComponent } from './rpg/rpg.component';
import { OfertaComponent } from './oferta/oferta.component';
import { RequisitosComponent } from './oferta/requisitos/requisitos.component';
import { AvaliacoesComponent } from './oferta/avaliacoes/avaliacoes.component';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//pipe
import { DescricaoReduzida } from './descricao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    IndieComponent,
    RpgComponent,
    OfertaComponent,
    RequisitosComponent,
    AvaliacoesComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
   OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CarrinhoService,{provide: LOCALE_ID, useValue:'pt-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localePt);

