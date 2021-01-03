import { Component, OnInit } from '@angular/core';

import { Currency } from '../../_models/currency';
import { Exchange } from '../../_models/exchange';
import { CurrencyService } from '../../_services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currency: Currency | any;
  rates: Exchange[] | any;
  exchange: Exchange | any;
  rate: string;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.rate = 'usd';
    this.getCurrency();
  }

  getCurrency(){
    console.log(this.rate);
    this.rates = [];
    var ex = null;
    this.currencyService.getCurrency(this.rate).subscribe(
      res => {
        console.log(res);
        this.currency = res;
        for (let key in this.currency.rates) {
          ex = new Exchange(key, this.currency.rates[key]);
          this.rates.push(ex);
        }
        console.log(this.rates);
      },
      err => console.error(err)
    )
  }

}
