import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  mostrarTodo: boolean = false;
  detailPokemon: any = null;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    const pokemonId = this.route.snapshot.paramMap.get('id') ?? '';
    this.pokemonService.getPokemon(pokemonId).subscribe((res: any) => {
      this.detailPokemon = res;
    });
  }
}
