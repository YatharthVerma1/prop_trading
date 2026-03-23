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
        accountSize: 500000,
        currentBalance: 521250,
        profitTarget: 550000,
        maxLoss: 450000,
        dailyLoss: 475000,
        winRate: 64.5,
        totalTrades: 42,
        chartData: Array.from({ length: 14 }).map((_, i) => ({
          day: `Day ${i + 1}`,
          balance: 500000 + (Math.random() * 25000 - 5000) + (i * 1500),
        })),
        recentTrades: [
          { id: "T1", pair: "NIFTY 24000 CE", type: "BUY", lots: 50, openPrice: 185.50, closePrice: 220.10, profit: 17300, date: "2026-03-20" },
          { id: "T2", pair: "BANKNIFTY 51500 PE", type: "BUY", lots: 15, openPrice: 310.00, closePrice: 280.00, profit: -4500, date: "2026-03-19" },
          { id: "T3", pair: "NIFTY 23900 PE", type: "BUY", lots: 50, openPrice: 95.00, closePrice: 148.50, profit: 26750, date: "2026-03-18" },
          { id: "T4", pair: "BANKNIFTY 51000 CE", type: "BUY", lots: 15, openPrice: 420.00, closePrice: 395.00, profit: -3750, date: "2026-03-17" },
        ] as Trade[]
      };
    }
  });
}
