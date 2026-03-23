import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { LayoutDashboard, Wallet, History, ArrowRightLeft, Settings, LogOut, TrendingUp, TrendingDown, Clock } from "lucide-react";
import { useUser, useLogout } from "@/hooks/use-auth";
import { useDashboardStats } from "@/hooks/use-dashboard";
import { formatMoney, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  const [, setLocation] = useLocation();
  const { data: user, isLoading: isUserLoading } = useUser();
  const logoutMutation = useLogout();
  const { data: stats, isLoading: isStatsLoading } = useDashboardStats();

  useEffect(() => {
    if (!isUserLoading && !user) {
      setLocation("/login");
    }
  }, [user, isUserLoading, setLocation]);

  if (isUserLoading || isStatsLoading || !user || !stats) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  const profit = stats.currentBalance - stats.accountSize;
  const profitPercentage = (profit / stats.accountSize) * 100;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0A0A0F] hidden lg:flex flex-col fixed inset-y-0 left-0 z-10">
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-white">PropTrader</span>
          </Link>
        </div>

        <nav className="flex-1 py-8 px-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: Wallet, label: "Accounts" },
            { icon: History, label: "Trading History" },
            { icon: ArrowRightLeft, label: "Payouts" },
            { icon: Settings, label: "Settings" },
          ].map((item, i) => (
            <button key={i} className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
              item.active 
                ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" 
                : "text-muted-foreground hover:bg-white/5 hover:text-white"
            )}>
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
              {user.name.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>
          <button 
            onClick={() => logoutMutation.mutate()}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64">
        <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
          
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-white">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name.split(' ')[0]}!</p>
            </div>
            <div className="flex items-center gap-3 bg-[#111117] border border-white/5 rounded-xl p-2">
              <div className="px-4 py-1.5 rounded-lg bg-blue-500/20 border border-blue-500/30">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">Phase 1</span>
              </div>
              <div className="px-4 py-1.5 border-l border-white/10">
                <span className="text-sm font-medium text-white">{formatMoney(stats.accountSize)} Account</span>
              </div>
            </div>
          </header>

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111117] border border-white/5 p-6 rounded-2xl">
              <p className="text-sm text-muted-foreground mb-1">Current Balance</p>
              <h3 className="text-3xl font-display font-bold text-white mb-4">{formatMoney(stats.currentBalance)}</h3>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Net P/L</p>
                  <p className={cn("text-lg font-bold flex items-center gap-1", profit >= 0 ? "text-green-400" : "text-red-400")}>
                    {profit >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {profit >= 0 ? '+' : ''}{formatMoney(profit)} ({profitPercentage.toFixed(2)}%)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111117] border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-muted-foreground">Daily Loss Limit</p>
                <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded">Safe</span>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-white">{formatMoney(stats.currentBalance)}</span>
                <span className="text-muted-foreground text-sm"> / {formatMoney(stats.dailyLoss)}</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>

            <div className="bg-[#111117] border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-muted-foreground">Max Loss Limit</p>
                <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded">Safe</span>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-white">{formatMoney(stats.currentBalance)}</span>
                <span className="text-muted-foreground text-sm"> / {formatMoney(stats.maxLoss)}</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chart */}
            <div className="lg:col-span-2 bg-[#111117] border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-white">Balance Growth</h3>
                <select className="bg-black/50 border border-white/10 text-xs text-white rounded-lg px-3 py-1 outline-none">
                  <option>All Time</option>
                  <option>Last 7 Days</option>
                </select>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stats.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1E6FFF" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#1E6FFF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 1000', 'dataMax + 1000']} tickFormatter={(value) => `₹${(value/1000).toFixed(0)}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A0A0F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="balance" stroke="#1E6FFF" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Trading Objectives */}
            <div className="bg-[#111117] border border-white/5 p-6 rounded-2xl flex flex-col">
              <h3 className="font-bold text-white mb-6">Trading Objectives</h3>
              
              <div className="space-y-6 flex-1">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Profit Target (10%)</span>
                    <span className="text-white font-medium">{formatMoney(profit)} / {formatMoney(stats.accountSize * 0.1)}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${Math.min(100, (profit/(stats.accountSize*0.1))*100)}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Minimum Trading Days</span>
                    <span className="text-white font-medium">12 / 4 Days</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Win Rate</p>
                    <p className="text-xl font-bold text-white">{stats.winRate}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Total Trades</p>
                    <p className="text-xl font-bold text-white">{stats.totalTrades}</p>
                  </div>
                </div>
              </div>

              <Button variant="gradient" className="w-full mt-6">Request Next Phase</Button>
            </div>
          </div>

          {/* Recent Trades */}
          <div className="bg-[#111117] border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-bold text-white">Recent Trades</h3>
              <Button variant="ghost" size="sm" className="text-xs">View All History</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-black/20">
                  <tr>
                    <th className="px-6 py-4 font-medium">Instrument</th>
                    <th className="px-6 py-4 font-medium">Direction</th>
                    <th className="px-6 py-4 font-medium">Qty</th>
                    <th className="px-6 py-4 font-medium">Entry Price</th>
                    <th className="px-6 py-4 font-medium">Exit Price</th>
                    <th className="px-6 py-4 font-medium">P&amp;L</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {stats.recentTrades.map((trade) => (
                    <tr key={trade.id} className="hover:bg-white/[0.02]">
                      <td className="px-6 py-4 font-medium text-white">{trade.pair}</td>
                      <td className="px-6 py-4">
                        <span className={cn("px-2 py-1 rounded text-xs font-bold", trade.type === 'BUY' ? "bg-blue-500/10 text-blue-400" : "bg-red-500/10 text-red-400")}>
                          {trade.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/80">{trade.lots}</td>
                      <td className="px-6 py-4 text-white/80">{trade.openPrice}</td>
                      <td className="px-6 py-4 text-white/80">{trade.closePrice}</td>
                      <td className={cn("px-6 py-4 font-bold", trade.profit >= 0 ? "text-green-400" : "text-red-400")}>
                        {trade.profit > 0 ? '+' : ''}{formatMoney(trade.profit)}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground flex items-center gap-2">
                        <Clock className="w-3 h-3" /> {trade.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
