import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard' , pathMatch: 'full'},
  {path: 'pokemons', component: PokemonComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'detail/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
