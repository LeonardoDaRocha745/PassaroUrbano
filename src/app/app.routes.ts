import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component'
import { IndieComponent } from './indie/indie.component'
import { RpgComponent } from './rpg/rpg.component'
import { OfertaComponent } from './oferta/oferta.component'
import { RequisitosComponent } from './oferta/requisitos/requisitos.component'
import { AvaliacoesComponent } from './oferta/avaliacoes/avaliacoes.component'
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'

//aqui fica as rotas e os caminhos do site

export const ROUTES: Routes = [
    { path:'',component: HomeComponent},
    { path:'indie',component: IndieComponent},
    { path:'rpg',component: RpgComponent},
    { path: 'oferta',component:OfertaComponent},
    //rota interna de componentes filhos
    { path: 'oferta/:id',component:OfertaComponent,
children:[
{path:'', component: RequisitosComponent},
{path:'requisitos', component:RequisitosComponent},
{path:'avaliacoes', component:AvaliacoesComponent}
]
},
{path: 'ordem-compra', component: OrdemCompraComponent}
]