import { Component, OnInit } from '@angular/core';
import { InvestmentResultService } from '../investment-results/investment-result.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  standalone: false
})
export class UserInputComponent {
  public initialInvestment: number = 0;
  public annualInvestment: number = 0;
  public expectedReturn: number = 0;
  public duration: number = 0;

  constructor(private investmentService: InvestmentResultService) { }

  public onSubmit(): void {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    });
  }
}
