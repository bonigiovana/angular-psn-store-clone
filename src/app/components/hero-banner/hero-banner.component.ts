import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css'],
})
export class HeroBannerComponent implements OnInit {

	//Variaveis do Molde (aguardar API)
	@Input() heroCover: string = '';
	@Input() heroBadge: string = 'DESTAQUE';
	@Input() heroTitle: string = 'Carregando jogo..,';
	@Input() heroSubtitle: string = 'Descrição do jogo em destaque...';
	@Input() heroPrice: string = 'R$ 0,00';
	@Input() heroUrl: string = '#';

	// Controle de abertura de video//
	showTrailerModel: boolean = false;
	safeTrailerUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
		//Link do trailer//
		const rawUrl = 'https://www.youtube.com/embed/QkkoHAzjinU?autoplay=1';
		this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
	}
		ngOnInit(): void { }

		openTrailer(): void {
		this.showTrailerModel = true;
		}

		closeTrailer(): void {
		this.showTrailerModel = false;
	}
}
