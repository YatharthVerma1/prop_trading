import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Zap, Shield, Clock, BarChart3, ChevronRight, PlayCircle, Globe, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } }
};

export function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Now Funding Traders Worldwide
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                Trade Our Capital. <br />
                <span className="text-gradient">Keep Your Profits.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Prove your trading skills in our evaluation process. Get funded with up to <strong className="text-white">$200,000</strong> and keep up to <strong className="text-white">90%</strong> of the profits with zero risk to your personal capital.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button size="lg" variant="gradient" className="w-full sm:w-auto gap-2">
                    Start Challenge <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 group">
                    <PlayCircle className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                    How It Works
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {/* user faces placeholder using unsplash */}
                  {/* professional smiling man */}
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="Trader" className="w-8 h-8 rounded-full border-2 border-background" />
                  {/* professional smiling woman */}
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="Trader" className="w-8 h-8 rounded-full border-2 border-background" />
                  {/* confident trader */}
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" alt="Trader" className="w-8 h-8 rounded-full border-2 border-background" />
                </div>
                <p>Join <strong className="text-white">8,400+</strong> funded traders</p>
              </div>
            </motion.div>

            {/* Right side floating cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative h-[500px]"
            >
              <div className="absolute top-10 right-10 w-72 glass-panel rounded-2xl p-6 glow-blue animate-[bounce_6s_infinite_ease-in-out]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-green-500/20 text-green-400">Paid Today</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Total Payouts</p>
                <h3 className="text-3xl font-display font-bold text-white">$12,450,200</h3>
                <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[75%]" />
                </div>
              </div>

              <div className="absolute bottom-20 left-0 w-64 glass-panel rounded-2xl p-6 animate-[bounce_7s_infinite_ease-in-out_reverse]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    {/* happy young trader */}
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" alt="Recent Payout" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">David M.</h4>
                    <p className="text-xs text-muted-foreground">Funded $100K</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                  <p className="text-xs text-muted-foreground mb-1">Recent Withdrawal</p>
                  <p className="font-display font-bold text-green-400 text-lg">+$8,450.00</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            <div className="text-center px-4">
              <h3 className="text-4xl font-display font-bold text-white mb-2">$200K</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Max Funding</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-display font-bold text-white mb-2">90%</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Profit Split</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-display font-bold text-white mb-2">8.4k+</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Active Traders</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-display font-bold text-white mb-2">&lt;24h</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Avg Payout Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Evaluation Process</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">Your path to a <br/>Funded Account</h3>
            <p className="text-muted-foreground">Our straightforward 2-step evaluation process is designed to discover true trading talent.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Step 1 */}
            <motion.div variants={fadeUp} className="glass-panel p-8 rounded-2xl relative group">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center font-display font-bold text-xl text-blue-400 z-10">1</div>
              <h4 className="text-xl font-bold text-white mb-3 mt-2">The Challenge</h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Prove your skills on a demo account. Trade according to our parameters and hit the profit target of 8% without breaching drawdown limits.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Profit Target: 8%</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Max Daily Loss: 5%</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Unlimited Time</li>
              </ul>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeUp} className="glass-panel p-8 rounded-2xl relative group">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center font-display font-bold text-xl text-blue-400 z-10">2</div>
              <h4 className="text-xl font-bold text-white mb-3 mt-2">Verification</h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                A secondary phase to confirm your consistency. The rules remain the same, but the profit target is cut in half to just 5%.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Profit Target: 5%</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Max Daily Loss: 5%</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Unlimited Time</li>
              </ul>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeUp} className="glass-panel p-8 rounded-2xl border-blue-500/30 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none" />
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-display font-bold text-xl text-white z-10 shadow-lg shadow-blue-500/50">3</div>
              <h4 className="text-xl font-bold text-white mb-3 mt-2">PropTrader Elite</h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                You are now a funded trader! Trade with our capital on a live account. You keep up to 90% of your profits and we cover any losses.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Up to 90% Split</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Refundable Fee</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Scale up to $2M</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#08080C] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Built by traders, <br/>for traders.</h2>
              <p className="text-muted-foreground">We understand what you need to succeed because we've been there. Our platform offers the best conditions in the industry.</p>
            </div>
            <Link href="/pricing">
              <Button variant="outline" className="gap-2">
                View All Features <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Instant Payouts", desc: "Get paid within 24 hours of requesting a withdrawal. Crypto and bank transfer available." },
              { icon: Clock, title: "No Time Limits", desc: "Take as much time as you need to pass the challenge. No pressure, trade at your own pace." },
              { icon: BarChart3, title: "Raw Spreads", desc: "Trade with institutional-grade liquidity, zero markups, and extremely low commissions." },
              { icon: Shield, title: "News Trading Allowed", desc: "We don't restrict your strategy. Trade the news, hold over the weekend, use EAs." },
              { icon: Globe, title: "Global Accessibility", desc: "We accept traders from over 150 countries with dedicated local support." },
              { icon: CheckCircle2, title: "Free Retry", desc: "Ended the challenge in profit but didn't hit the target? Get a free retry on us." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ELEVATE YOUR TRADING */}
      <section className="py-24 relative overflow-hidden bg-[#0a0a0f] border-y border-white/5">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Elevate Your Trading to the <span className="text-gradient">Next Level</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Access institutional-grade tools and conditions previously reserved for hedge funds and professional trading firms. Your edge, amplified.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: "Average Funded Trader Profit", value: "+18.4% monthly" },
                  { label: "Avg time to pass challenge", value: "12 days" },
                  { label: "Highest single payout", value: "$84,200" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-display font-bold text-white text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-panel p-2 rounded-2xl glow-blue">
                <img 
                  src={`${import.meta.env.BASE_URL}images/trader-dashboard.png`} 
                  alt="Trading Dashboard" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAYOUT PROOF */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Real Payouts. Real Traders.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've paid out over $12.4M to funded traders worldwide. Here's the proof.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 mb-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "Alex T.", amount: "$24,500", date: "Mar 2026", account: "$100K", bg: "1a1a2e", color: "4ade80" },
              { name: "Priya S.", amount: "$8,200", date: "Feb 2026", account: "$50K", bg: "1a1a2e", color: "4ade80" },
              { name: "Marcus J.", amount: "$41,000", date: "Jan 2026", account: "$200K", bg: "1a1a2e", color: "4ade80" },
              { name: "Yuki K.", amount: "$6,800", date: "Mar 2026", account: "$50K", bg: "1a1a2e", color: "4ade80" }
            ].map((payout, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl shimmer-card flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img src={`https://ui-avatars.com/api/?name=${payout.name.replace(' ', '+')}&background=${payout.bg}&color=${payout.color}&size=80`} alt={payout.name} className="w-14 h-14 rounded-full" />
                  <div>
                    <h4 className="font-bold text-white text-lg">{payout.name}</h4>
                    <p className="text-sm text-muted-foreground">{payout.date} • {payout.account} Account</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded mb-1">PAID</div>
                  <p className="font-display font-bold text-2xl text-green-400">{payout.amount}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="w-full bg-black/40 border-y border-white/5 py-4 overflow-hidden relative flex">
          <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$2,400</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$15,800</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$9,200</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$3,600</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$22,100</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$8,750</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$31,000</span>
            <span className="text-white/20 mx-2">•</span>
            {/* Duplicate for infinite effect */}
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$2,400</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$15,800</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$9,200</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$3,600</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$22,100</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$8,750</span>
            <span className="text-white/20 mx-2">•</span>
            <span className="text-green-400 font-display font-medium text-lg mx-4">+$31,000</span>
          </div>
        </div>
      </section>

      {/* SCALING PLAN */}
      <section className="py-24 relative overflow-hidden bg-[#050508] border-y border-white/5" style={{ backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src={`${import.meta.env.BASE_URL}images/trader-lifestyle.png`} alt="Trader Lifestyle" className="w-full h-full object-cover" style={{ maskImage: "linear-gradient(to left, black, transparent)" }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Scale Without Limits</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pass our evaluation, grow your account, and unlock up to $2,000,000 in trading capital.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
            <div className="absolute left-0 top-1/2 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block z-0" />
            {[
              { level: 1, amount: "$10K" },
              { level: 2, amount: "$25K" },
              { level: 3, amount: "$50K" },
              { level: 4, amount: "$100K" },
              { level: 5, amount: "$200K", scaleUp: true },
              { level: 6, amount: "$400K", scaleUp: true }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center mb-8 md:mb-0"
              >
                {step.scaleUp && <span className="absolute -top-8 text-blue-400 text-xs font-bold whitespace-nowrap bg-blue-500/10 px-2 py-1 rounded">Scale Up</span>}
                <div className={`flex items-center justify-center font-display font-bold rounded-full border-2 border-[#050508] transition-all ${i >= 4 ? 'w-20 h-20 bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]' : 'w-16 h-16 bg-white/10 text-white/80'}`}>
                  {step.amount}
                </div>
                <span className="mt-4 text-sm text-muted-foreground font-medium">Level {step.level}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <span className="text-white font-medium">Scale up every 3 months</span>
              <CheckCircle2 className="text-blue-500 w-5 h-5" />
            </div>
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <span className="text-white font-medium">10% profit triggers scale</span>
              <CheckCircle2 className="text-blue-500 w-5 h-5" />
            </div>
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <span className="text-white font-medium">Up to 10x starting capital</span>
              <CheckCircle2 className="text-blue-500 w-5 h-5" />
            </div>
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <span className="text-white font-medium">Keep 90% at every level</span>
              <CheckCircle2 className="text-blue-500 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* DISCORD COMMUNITY */}
      <section className="relative overflow-hidden py-24 bg-black border-y border-white/5">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 50%, rgba(88, 101, 242, 0.15) 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#5865F2]" fill="currentColor" viewBox="0 0 127.14 96.36">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53.01s5-12.74,11.43-12.74S54,46,53.89,53.01C53.89,60,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53.01s5-12.74,11.43-12.74S96.3,46,96.19,53.01C96.19,60,91.14,65.69,84.69,65.69Z"/>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Connect With Us On Discord</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 12,000+ traders in our active community. Get trade ideas, live signals, mentorship, and be part of the PropTrader Elite family.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white font-medium"><span className="text-2xl">📊</span> Daily Market Analysis</li>
                <li className="flex items-center gap-3 text-white font-medium"><span className="text-2xl">🎯</span> Live Trade Calls</li>
                <li className="flex items-center gap-3 text-white font-medium"><span className="text-2xl">🤝</span> Peer Mentorship</li>
              </ul>
              
              <Button asChild size="lg" className="discord-btn text-white font-bold h-14 px-8 text-lg rounded-xl">
                <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
                  Join Our Discord Server
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-panel p-2 rounded-2xl overflow-hidden relative">
                <img 
                  src={`${import.meta.env.BASE_URL}images/community-section.png`} 
                  alt="Discord Community" 
                  className="w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">What Our Traders Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                quote: "PropTrader Elite changed my life. I passed the $100K challenge in 9 days and received my first payout of $22,000 the very next day. The process is straightforward and the team is responsive.",
                name: "James R.", 
                location: "London UK", 
                funded: "$100K",
                avatar: "https://ui-avatars.com/api/?name=James+R&background=1a1a2e&color=60a5fa&size=80"
              },
              { 
                quote: "I've tried 3 other prop firms before and none compare to PropTrader Elite. The spreads are tight, news trading is allowed, and the scaling plan is the best in the industry.",
                name: "Amara N.", 
                location: "Lagos Nigeria", 
                funded: "$50K",
                avatar: "https://ui-avatars.com/api/?name=Amara+N&background=1a1a2e&color=60a5fa&size=80"
              },
              { 
                quote: "Got funded in 2 weeks and have been trading for 6 months now. Just hit my 4th payout. The dashboard is clean and withdrawals hit my account within hours.",
                name: "David K.", 
                location: "Toronto Canada", 
                funded: "$200K",
                avatar: "https://ui-avatars.com/api/?name=David+K&background=1a1a2e&color=60a5fa&size=80"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.location} • Funded {testimonial.funded}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}images/abstract-mesh.png`}
          alt="Abstract mesh"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to unlock your potential?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Choose your account size and start your evaluation today. Join the elite group of funded traders.
          </p>
          <Link href="/pricing">
            <Button size="lg" variant="gradient" className="h-16 px-12 text-lg glow-blue">
              Get Funded Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
