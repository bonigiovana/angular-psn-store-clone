import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

	@Input() gameTitle: string = '';
	@Input() gameCover: string = '';
	@Input() gameLabel: string = '';
	@Input() gameType: string = '';
	@Input() gamePrice: string = '';
	@Input() gameUrl: string = '#';


  constructor() { }

  ngOnInit(): void {
  }

}
