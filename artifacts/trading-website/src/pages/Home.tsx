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
