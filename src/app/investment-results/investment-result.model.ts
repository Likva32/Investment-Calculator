interface InvestmentData {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
}

interface InvestmentResult {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
}

export { InvestmentData, InvestmentResult };