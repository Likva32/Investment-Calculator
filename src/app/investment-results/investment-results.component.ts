import { Component, OnInit } from '@angular/core';
import { InvestmentResultService } from './investment-result.service';
import { InvestmentResult } from './investment-result.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css']
})
export class InvestmentResultsComponent {

  constructor(private investmentResultService: InvestmentResultService) { }

  get InvestmentResults(): InvestmentResult[] {
    return this.investmentResultService.investmentResult;
  }
}
