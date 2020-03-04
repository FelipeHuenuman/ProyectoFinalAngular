import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DigimonsComponent} from './components/digimons/digimons.component';

import { FiltroNivelComponent } from './components/filtro-nivel/filtro-nivel.component';
import { FiltroNombreComponent } from './components/filtro-nombre/filtro-nombre.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'digimons',component:DigimonsComponent},
  {path:'digimon_nombre',component:FiltroNombreComponent},
  {path:'digimon_nivel',component:FiltroNivelComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
