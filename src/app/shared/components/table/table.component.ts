import { Component, Input, OnInit } from '@angular/core';
import { ListPokemon } from '../../model/list-pokemon';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  displayedColumns: string[] = ['show', 'name'];
  @Input() pokemons: ListPokemon[] = [];
}
