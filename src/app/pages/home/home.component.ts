import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ListPokemon } from 'src/app/shared/model/list-pokemon';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('60ms', animate('600ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [listAnimation],
})
export class HomeComponent implements OnInit {
  show: boolean = true;
  listPokemon: ListPokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getListPokemon().subscribe((res: any) => {
      this.listPokemon = res.results;
     });
  }

  showOption = (option: boolean) => {
    this.show = option;
  };
}
