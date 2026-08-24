import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredGame: any;
  gamesList: any[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    // 1. Puxa o jogo #1 mais jogado para o Hero Banner
    this.gamesService.getFeaturedGame().subscribe((res: any) => {
      if (res.results && res.results.length > 0) {
        const game = res.results[0];
        this.featuredGame = {
          title: game.name,
          subtitle: `Nota dos jogadores: ⭐ ${game.rating} / 5 (${game.ratings_count} avaliações)`,
          cover: game.background_image,
          label: "MAIS JOGADO PS",
          price: "R$ 349,90",
          url: `https://store.playstation.com/pt-br/search/${encodeURIComponent(game.name)}`
        };
      }
    });

    // 2. Puxa a lista de jogos mais jogados da PlayStation da API da RAWG
    this.gamesService.getGames().subscribe((res: any) => {
      if (res.results) {
        this.gamesList = res.results.map((game: any) => ({
					title: game.name,
          cover: game.background_image,
          label: game.rating > 4.5 ? "FAVORITO" : "POPULAR",
          type: "DIGITAL | PS4 PS5",
          price: "R$ " + (Math.floor(Math.random() * 150) + 149) + ",90",
          url: `https://store.playstation.com/pt-br/search/${encodeURIComponent(game.name)}`
        }));
      }
    });
  }

}

