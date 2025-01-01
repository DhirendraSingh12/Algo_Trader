export interface Strategy {
  id: string;
  name: string;
  description: string;
  performance: number;
  risk: 'Low' | 'Medium' | 'High';
  timeframe: string;
}

export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  volume: number;
}

export interface BacktestResult {
  returns: number;
  sharpeRatio: number;
  maxDrawdown: number;
  winRate: number;
}