import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  public initialInvestment: number = 0;
  public annualInvestment: number = 0;
  public expectedReturn: number = 0;
  public duration: number = 0;

  constructor() { }

}
