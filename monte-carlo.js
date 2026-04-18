// ══════════════════════════════════════════════════════════════
// MONTE CARLO SIMULATION ENGINE FOR RETIREMENT PLANNING
// ══════════════════════════════════════════════════════════════

class MonteCarloSimulation {
  constructor(params) {
    this.numSimulations = 10000;
    this.years = params.lifeExp - params.retireAge;
    this.params = params;
  }

  // Box-Muller transform for normal distribution
  randomNormal() {
    const u1 = Math.random();
    const u2 = Math.random();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  }

  // Lognormal returns (realistic market behavior)
  lognormalReturn(mean, volatility) {
    const normal = this.randomNormal();
    const logReturn = mean + volatility * normal;
    return Math.exp(logReturn) - 1;
  }

  simulatePath() {
    let portfolio = this.params.initialPortfolio;
    const yearlyBalances = [portfolio];
    
    for (let year = 0; year < this.years; year++) {
      // Get random returns for each asset class
      const stockReturn = this.lognormalReturn(0.07, 0.15);   // 7% mean, 15% volatility
      const bondReturn = this.lognormalReturn(0.04, 0.06);    // 4% mean, 6% volatility
      const cashReturn = this.lognormalReturn(0.025, 0.005);  // 2.5% mean, 0.5% volatility
      const propertyReturn = this.lognormalReturn(0.03, 0.05); // 3% mean, 5% volatility
      
      // Asset allocation (60/40 stocks/bonds by default)
      const stocks = portfolio * 0.45;
      const bonds = portfolio * 0.25;
      const cash = portfolio * 0.15;
      const property = portfolio * 0.15;
      
      // Apply returns
      portfolio = stocks * (1 + stockReturn) +
                  bonds * (1 + bondReturn) +
                  cash * (1 + cashReturn) +
                  property * (1 + propertyReturn);
      
      // Subtract annual expenses (inflation-adjusted at 2%)
      const inflationRate = 0.02;
      const adjustedExpenses = this.params.annualExpenses * Math.pow(1 + inflationRate, year);
      portfolio -= adjustedExpenses;
      
      // Add income sources (CPF LIFE, business income, etc.)
      portfolio += this.params.annualIncome;
      
      // Never go below zero
      yearlyBalances.push(Math.max(0, portfolio));
    }
    
    return {
      finalBalance: portfolio,
      yearlyBalances: yearlyBalances,
      success: portfolio > 0
    };
  }

  run() {
    const results = [];
    for (let i = 0; i < this.numSimulations; i++) {
      results.push(this.simulatePath());
    }
    return this.analyze(results);
  }

  analyze(results) {
    const finalBalances = results.map(r => r.finalBalance).sort((a, b) => a - b);
    const successCount = results.filter(r => r.success).length;
    const successRate = (successCount / this.numSimulations) * 100;
    
    const getPercentile = (arr, p) => arr[Math.floor((p / 100) * arr.length)];
    
    return {
      successRate: successRate,
      successCount: successCount,
      finalBalances: finalBalances,
      percentile10: getPercentile(finalBalances, 10),
      percentile25: getPercentile(finalBalances, 25),
      percentile50: getPercentile(finalBalances, 50),
      percentile75: getPercentile(finalBalances, 75),
      percentile90: getPercentile(finalBalances, 90),
      minBalance: finalBalances[0],
      maxBalance: finalBalances[finalBalances.length - 1],
      allResults: results
    };
  }
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MonteCarloSimulation;
}
