import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Zap, Shield, Clock, BarChart3, ChevronRight, PlayCircle, Globe, Trophy, Star, Rocket, Lock, TrendingUp, Users, Award } from "lucide-react";
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
                NSE Indices · Options Buying · Now Open
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                Trade Our Capital. <br />
                <span className="text-gradient">Keep Your Profits.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Prove your trading skills on NSE Indices with simulated capital up to <strong className="text-white">₹10,00,000</strong>. Pass our evaluation and keep up to <strong className="text-white">90%</strong> of profits — zero risk to your personal capital.
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

              {/* Trust badges instead of fake customer count */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {[
                  { icon: Lock, label: "Secure Platform" },
                  { icon: Zap, label: "Instant Payouts" },
                  { icon: Globe, label: "150+ Countries" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-sm text-white/70">
                    <Icon className="w-3.5 h-3.5 text-blue-400" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side — platform feature cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative h-[500px]"
            >
              {/* Account size card */}
              <div className="absolute top-10 right-10 w-72 glass-panel rounded-2xl p-6 glow-blue animate-[bounce_6s_infinite_ease-in-out]">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-blue-500/20 text-blue-300">Up to ₹10L</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Simulated Capital Options</p>
                <h3 className="text-2xl font-display font-bold text-white mb-3">₹2L — ₹10L</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["₹2L", "₹5L", "₹10L", "2-Step", "1-Step", "NSE"].map(size => (
                    <span key={size} className="text-center text-xs py-1 px-2 rounded bg-white/5 border border-white/5 text-white/70 font-medium">{size}</span>
                  ))}
                </div>
              </div>

              {/* Profit split card */}
              <div className="absolute bottom-20 left-0 w-64 glass-panel rounded-2xl p-6 animate-[bounce_7s_infinite_ease-in-out_reverse]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Profit Split</h4>
                    <p className="text-xs text-muted-foreground">Industry-leading</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                  <p className="text-xs text-muted-foreground mb-1">You Keep</p>
                  <p className="font-display font-bold text-green-400 text-3xl">90%</p>
                </div>
                <p className="text-xs text-muted-foreground mt-3">Fee refunded on your first payout</p>
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
              <h3 className="text-4xl font-display font-bold text-white mb-2">₹10L</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Max Capital</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-display font-bold text-white mb-2">90%</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Profit Split</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-display font-bold text-white mb-2">NSE</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Options Buying</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-display font-bold text-white mb-2">&lt;24h</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Payout Time</p>
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
            <motion.div variants={fadeUp} className="glass-panel p-8 rounded-2xl border-blue-500/30 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none rounded-2xl" />
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-display font-bold text-xl text-white z-10 shadow-lg shadow-blue-500/50">3</div>
              <h4 className="text-xl font-bold text-white mb-3 mt-2">PropTrader Elite</h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                You are now a funded trader! Trade with our capital on a live account. You keep up to 90% of your profits and we cover any losses.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Up to 90% Split</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Refundable Fee</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Scale up to ₹80L</li>
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
              
              <div className="space-y-4">
                {[
                  { label: "Maximum Simulated Capital", value: "Up to ₹10,00,000" },
                  { label: "Profit Split", value: "80% — 90%" },
                  { label: "Market", value: "NSE Indices — Options Buying" },
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

      {/* OUR COMMITMENT — replaces fake payout proof */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Our Promise</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Built on Trust. <span className="text-gradient">Proven by Design.</span></h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We designed every rule, every process, and every payout system with one goal: to be the prop firm we wished existed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: (
                  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                    {/* Frame */}
                    <rect x="4" y="4" width="48" height="48" rx="13" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeOpacity="0.2" strokeWidth="1" />
                    {/* Clock circle */}
                    <circle cx="25" cy="29" r="9.5" stroke="#22c55e" strokeOpacity="0.85" strokeWidth="1.4" />
                    {/* Hour hand - pointing up */}
                    <line x1="25" y1="29" x2="25" y2="22.5" stroke="#22c55e" strokeOpacity="1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Minute hand - pointing right */}
                    <line x1="25" y1="29" x2="30.5" y2="31.5" stroke="#22c55e" strokeOpacity="1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Clock center */}
                    <circle cx="25" cy="29" r="1.3" fill="#22c55e" fillOpacity="1" />
                    {/* Lightning bolt - top right */}
                    <path d="M39 15L35.5 22H39L35 30.5L43.5 21.5H40L43 15Z" fill="#22c55e" fillOpacity="0.95" />
                  </svg>
                ),
                title: "Same-Day Payouts",
                desc: "Withdrawal requests processed and sent within 24 hours — no delays, no excuses.",
              },
              {
                icon: (
                  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                    {/* Frame */}
                    <rect x="4" y="4" width="48" height="48" rx="13" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeOpacity="0.2" strokeWidth="1" />
                    {/* Circular return arc — most of circle */}
                    <path d="M38.5 19.5A12 12 0 1 1 28 16" stroke="#22c55e" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    {/* Arrow head at arc end */}
                    <polyline points="24.5,12.5 28,16.5 31.5,13" stroke="#22c55e" strokeOpacity="0.85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    {/* Checkmark inside */}
                    <polyline points="22,29 26,33 34,23" stroke="#22c55e" strokeOpacity="1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                ),
                title: "Fee Refunded",
                desc: "Your challenge fee is fully refunded with your very first payout. You risk nothing long-term.",
              },
              {
                icon: (
                  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                    {/* Frame */}
                    <rect x="4" y="4" width="48" height="48" rx="13" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeOpacity="0.2" strokeWidth="1" />
                    {/* Shield outline */}
                    <path d="M28 13L17 17.5V27C17 33.5 21.8 39.5 28 41.5C34.2 39.5 39 33.5 39 27V17.5L28 13Z" stroke="#22c55e" strokeOpacity="0.85" strokeWidth="1.4" strokeLinejoin="round" fill="#22c55e" fillOpacity="0.06" />
                    {/* Rule lines inside shield */}
                    <line x1="22" y1="25" x2="34" y2="25" stroke="#22c55e" strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round" />
                    <line x1="22" y1="29" x2="34" y2="29" stroke="#22c55e" strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round" />
                    {/* Checkmark on bottom rule */}
                    <polyline points="22,33 25.5,36.5 34,29.5" stroke="#22c55e" strokeOpacity="1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                ),
                title: "No Hidden Rules",
                desc: "Every rule is published upfront. No surprise breaches. What you see is exactly what you get.",
              },
              {
                icon: (
                  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                    {/* Frame */}
                    <rect x="4" y="4" width="48" height="48" rx="13" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeOpacity="0.2" strokeWidth="1" />
                    {/* Bar 1 */}
                    <rect x="12" y="34" width="7" height="8" rx="1.5" fill="#22c55e" fillOpacity="0.4" />
                    {/* Bar 2 */}
                    <rect x="22" y="27" width="7" height="15" rx="1.5" fill="#22c55e" fillOpacity="0.6" />
                    {/* Bar 3 */}
                    <rect x="32" y="19" width="7" height="23" rx="1.5" fill="#22c55e" fillOpacity="0.85" />
                    {/* Baseline */}
                    <line x1="11" y1="43" x2="44" y2="43" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round" />
                    {/* Arrow upward trend */}
                    <path d="M12 32 Q22 22 33 18" stroke="#22c55e" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" fill="none" strokeDasharray="2.5 2.5" />
                    {/* Arrow head */}
                    <polyline points="30,14.5 34,18 38,14" stroke="#22c55e" strokeOpacity="1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <line x1="34" y1="11" x2="34" y2="18.5" stroke="#22c55e" strokeOpacity="1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: "Infinite Scaling",
                desc: "Consistent traders get rewarded. Scale from ₹2L all the way to ₹80L in capital.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex flex-col"
              >
                <div className="mb-5">{item.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Instruments ticker — replaces fake payout ticker */}
          <div className="w-full bg-black/40 border border-white/5 rounded-2xl py-5 px-6 overflow-hidden relative flex items-center gap-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest whitespace-nowrap shrink-0">Trade</span>
            <div className="overflow-hidden flex-1">
              <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
                {["Forex", "Gold (XAU/USD)", "Crude Oil", "NASDAQ", "S&P 500", "EUR/USD", "BTC/USD", "GBP/JPY", "Silver", "DAX 40", "Forex", "Gold (XAU/USD)", "Crude Oil", "NASDAQ", "S&P 500", "EUR/USD", "BTC/USD", "GBP/JPY", "Silver", "DAX 40"].map((inst, i) => (
                  <span key={i} className="text-white/60 font-medium text-sm mx-6">{inst} <span className="text-white/20 ml-6">·</span></span>
                ))}
              </div>
            </div>
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
            Pass our evaluation, grow your account, and unlock up to ₹80 Lakh in simulated trading capital.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
            <div className="absolute left-0 top-1/2 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block z-0" />
            {[
              { level: 1, amount: "₹2L" },
              { level: 2, amount: "₹5L" },
              { level: 3, amount: "₹10L" },
              { level: 4, amount: "₹20L" },
              { level: 5, amount: "₹40L", scaleUp: true },
              { level: 6, amount: "₹80L", scaleUp: true }
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
                <div className={`flex items-center justify-center font-display font-bold rounded-full border-2 border-[#050508] transition-all text-sm ${i >= 4 ? 'w-20 h-20 bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]' : 'w-16 h-16 bg-white/10 text-white/80'}`}>
                  {step.amount}
                </div>
                <span className="mt-4 text-sm text-muted-foreground font-medium">Level {step.level}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <span className="text-white font-medium">Scale up every 3 months</span>
              <CheckCircle2 className="text-blue-500 w-5 h-5 shrink-0" />
            </div>
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <span className="text-white font-medium">10% profit triggers scale</span>
              <CheckCircle2 className="text-blue-500 w-5 h-5 shrink-0" />
            </div>
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <span className="text-white font-medium">Up to 10x starting capital</span>
              <CheckCircle2 className="text-blue-500 w-5 h-5 shrink-0" />
            </div>
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <span className="text-white font-medium">Keep 90% at every level</span>
              <CheckCircle2 className="text-blue-500 w-5 h-5 shrink-0" />
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
                Be part of our founding community. Connect with fellow traders, get market insights, and grow alongside us from day one.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-8 h-8 rounded-lg bg-[#5865F2]/20 flex items-center justify-center shrink-0"><BarChart3 className="w-4 h-4 text-[#5865F2]" /></div>
                  Daily Market Analysis
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-8 h-8 rounded-lg bg-[#5865F2]/20 flex items-center justify-center shrink-0"><TrendingUp className="w-4 h-4 text-[#5865F2]" /></div>
                  Live Trade Calls
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-8 h-8 rounded-lg bg-[#5865F2]/20 flex items-center justify-center shrink-0"><Users className="w-4 h-4 text-[#5865F2]" /></div>
                  Peer Mentorship
                </li>
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

      {/* WHY WE'RE DIFFERENT — replaces fake testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Our Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Why <span className="text-gradient">PropTrader Elite</span>?
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We're not just another prop firm. We're setting a new standard for what traders deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Award,
                title: "Trader-First Rules",
                body: "Every rule is designed to be fair and transparent. No trick clauses, no ambiguous conditions. If you trade well, you get funded — period.",
              },
              {
                icon: TrendingUp,
                title: "Built-In Growth",
                body: "Our scaling plan means your account grows with your performance. The better you trade, the more capital you unlock — automatically.",
              },
              {
                icon: Users,
                title: "A Community Behind You",
                body: "You're not alone. Our Discord community, support team, and educational resources are here to help you succeed at every step.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass-panel p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Early-access CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-transparent border border-blue-500/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Be Among Our First Funded Traders</h4>
                <p className="text-muted-foreground">We're launching now. Early traders get priority support and first-mover advantage.</p>
              </div>
            </div>
            <Link href="/pricing">
              <Button variant="gradient" size="lg" className="shrink-0 gap-2">
                Claim Your Spot <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
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
            Choose your account size and start your evaluation today. Become one of our first funded traders.
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
