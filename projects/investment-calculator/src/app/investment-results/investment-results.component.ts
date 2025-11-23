import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [ CurrencyPipe  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private readonly investmentService: InvestmentService;

  constructor(investmentService: InvestmentService) {
    this.investmentService = investmentService;
  }

  get results() {
    return this.investmentService.resultsData;
  }
}
