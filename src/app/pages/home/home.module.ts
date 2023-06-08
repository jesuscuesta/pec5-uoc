import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { CardsComponent } from 'src/app/shared/components/cards/cards.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { HomeRoutingModule } from './home-routing.module';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, TableComponent, CardsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    HomeRoutingModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [PokemonService],
})
export class HomeModule {}
