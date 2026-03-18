import { useQuery } from "@tanstack/react-query";

export type Trade = {
  id: string;
  pair: string;
  type: "BUY" | "SELL";
  lots: number;
  openPrice: number;
  closePrice: number;
  profit: number;
  date: string;
};

export function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard_stats"],
    queryFn: async () => {
      await new Promise(r => setTimeout(r, 600));
      return {
        accountSize: 100000,
        currentBalance: 104250.50,
        profitTarget: 110000,
        maxLoss: 90000,
        dailyLoss: 95000,
        winRate: 64.5,
        totalTrades: 42,
        chartData: Array.from({ length: 14 }).map((_, i) => ({
          day: `Day ${i + 1}`,
          balance: 100000 + (Math.random() * 8000 - 2000) + (i * 300),
        })),
        recentTrades: [
          { id: "T1", pair: "XAUUSD", type: "BUY", lots: 2.5, openPrice: 2045.50, closePrice: 2052.10, profit: 1650.00, date: "2024-05-12" },
          { id: "T2", pair: "EURUSD", type: "SELL", lots: 5.0, openPrice: 1.0850, closePrice: 1.0810, profit: 2000.00, date: "2024-05-11" },
          { id: "T3", pair: "GBPUSD", type: "BUY", lots: 3.0, openPrice: 1.2640, closePrice: 1.2610, profit: -900.00, date: "2024-05-10" },
          { id: "T4", pair: "US30", type: "SELL", lots: 1.0, openPrice: 38500, closePrice: 38400, profit: 1000.00, date: "2024-05-09" },
        ] as Trade[]
      };
    }
  });
}
