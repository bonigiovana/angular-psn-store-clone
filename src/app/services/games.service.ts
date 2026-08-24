import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  // Sua chave de API da RAWG
  private apiKey = '7f21ce4750754b7db0004207ca0d5f85';

  constructor(private http: HttpClient) { }

  // Busca os 40 jogos mais jogados da PlayStation (PS4/PS5) na API da RAWG
  getGames(): Observable<any> {
    const url = `https://api.rawg.io/api/games?key=${this.apiKey}&parent_platforms=2&page_size=40&ordering=-added`;
    return this.http.get<any>(url);
  }

  // Busca o jogo #1 mais jogado para o Hero Banner
  getFeaturedGame(): Observable<any> {
    const url = `https://api.rawg.io/api/games?key=${this.apiKey}&parent_platforms=2&page_size=1&ordering=-added`;
    return this.http.get<any>(url);
  }
}


