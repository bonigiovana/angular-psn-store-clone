import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input() gameTitle: string = '';
	@Input() gameCover: string = '';
	@Input() gameLabel: string = '';
	@Input() gameType: string = 'DIGITAL | PS4 PS5';
	@Input() gamePrice: string = 'R$ 299,90';
	@Input() gameUrl: string = '#';

  constructor() { }

  ngOnInit(): void {
  }

}
