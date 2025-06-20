import { Injectable } from "@angular/core";
import { InvestmentData, InvestmentResult } from "./investment-result.model";

@Injectable({providedIn: 'root'})
export class InvestmentResultService {
    public investmentResult: InvestmentResult[] = [];

    public calculateInvestmentResults({initialInvestment, duration, expectedReturn, annualInvestment}: InvestmentData): void {
        const annualData: InvestmentResult[] = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;

            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        this.investmentResult = annualData;
    }
}