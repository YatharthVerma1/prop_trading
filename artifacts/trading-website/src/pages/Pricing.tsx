import { useState } from "react";
import { Link } from "wouter";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type PlanType = "2step" | "1step";
type CapitalSize = 0 | 1 | 2;

const CAPITAL_SIZES = [
  { label: "₹2,00,000", value: 200000, display: "₹2L" },
  { label: "₹5,00,000", value: 500000, display: "₹5L" },
  { label: "₹10,00,000", value: 1000000, display: "₹10L" },
];

const PLANS = {
  "2step": {
    name: "2-Step Challenge",
    subtitle: "Standard 2-Phase Evaluation",
    badge: "Most Popular",
    market: "NSE Indices — Options Buying",
    refundable: true,
    fees: [3999, 8999, 17999],
    rules: [
      { label: "Phase 1 Profit Target", values: ["₹20,000 (10%)", "₹50,000 (10%)", "₹1,00,000 (10%)"] },
      { label: "Phase 2 Profit Target", values: ["₹10,000 (5%)", "₹25,000 (5%)", "₹50,000 (5%)"] },
      { label: "Max. Daily Loss", value: "5%" },
      { label: "Max. Overall Loss", value: "10%" },
      { label: "Min. Trading Days", value: "4 Days" },
      { label: "Trading Period", value: "Unlimited" },
      { label: "Fee Refund", value: "100% with first payout" },
      { label: "Profit Split", value: "80% (up to 90%)" },
    ],
    features: [
      "2-Phase evaluation process",
      "Fee fully refunded with first payout",
      "80% profit split (scaling to 90%)",
      "Max. daily loss: 5% of simulated capital",
      "Max. overall loss: 10% of simulated capital",
      "Minimum 4 trading days required",
      "Unlimited trading period",
      "NSE Indices — Options Buying only",
    ],
  },
  "1step": {
    name: "1-Step Challenge",
    subtitle: "Single Step to NiftyProp Account",
    badge: "Faster Path",
    market: "NSE Indices — Options Buying",
    refundable: false,
    fees: [3899, 8799, 17699],
    rules: [
      { label: "Profit Target", values: ["₹20,000 (10%)", "₹50,000 (10%)", "₹1,00,000 (10%)"] },
      { label: "Max. Daily Loss", value: "3%" },
      { label: "Max. Overall Loss", value: "10%" },
      { label: "Trading Period", value: "Unlimited" },
      { label: "Best Day Rule", value: "50% of profit target" },
      { label: "Profit Split", value: "90%" },
      { label: "Fee", value: "Non-refundable" },
    ],
    features: [
      "Single-phase evaluation — faster to funded",
      "90% profit split from day one",
      "Max. daily loss: 3% of simulated capital",
      "Max. overall loss: 10% of simulated capital",
      "Best Day Rule: max 50% of profit target in one day",
      "Unlimited trading period",
      "NSE Indices — Options Buying only",
      "Non-refundable fee",
    ],
  },
};

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function Pricing() {
  const [planType, setPlanType] = useState<PlanType>("2step");
  const [capitalIdx, setCapitalIdx] = useState<CapitalSize>(1);

  const plan = PLANS[planType];
  const fee = plan.fees[capitalIdx];
  const capital = CAPITAL_SIZES[capitalIdx];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Evaluation Plans</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
            Choose Your <span className="text-gradient">Challenge</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Trade NSE Indices with simulated capital. Pass the evaluation and unlock your NiftyProp funded account.
          </p>
        </div>

        {/* Plan Type Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/[0.03] border border-white/10 rounded-xl p-1">
            {(["2step", "1step"] as PlanType[]).map((type) => (
              <button
                key={type}
                onClick={() => setPlanType(type)}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  planType === type
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {type === "2step" ? "2-Step Challenge" : "1-Step Challenge"}
              </button>
            ))}
          </div>
        </div>

        {/* Capital Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {CAPITAL_SIZES.map((cap, i) => (
            <button
              key={cap.label}
              onClick={() => setCapitalIdx(i as CapitalSize)}
              className={`px-8 py-3 rounded-xl font-display font-semibold text-base transition-all cursor-pointer ${
                capitalIdx === i
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500"
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cap.label}
            </button>
          ))}
        </div>

        {/* Main Pricing Card */}
        <motion.div
          key={`${planType}-${capitalIdx}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel rounded-3xl overflow-hidden shadow-[0_0_60px_-15px_rgba(30,111,255,0.2)]"
        >
          <div className="grid md:grid-cols-2">
            {/* Left — Fee & Rules */}
            <div className="p-10 bg-white/[0.02]">
              <div className="flex items-start justify-between mb-2">
                <p className="text-blue-400 font-medium text-sm">{plan.name}</p>
                <span className="text-xs font-bold px-2 py-1 rounded bg-blue-500/15 text-blue-300 border border-blue-500/20">
                  {plan.badge}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-8">{plan.market}</p>

              {/* Fee */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-1">
                  One-time {plan.refundable ? "refundable" : ""} fee
                </p>
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-display font-bold text-white">
                    {formatINR(fee)}
                  </span>
                </div>
                {plan.refundable ? (
                  <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Fully refunded with your first payout
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <Info className="w-3 h-3" /> Non-refundable fee
                  </p>
                )}
              </div>

              {/* Rules Table */}
              <div className="space-y-0 border-t border-white/5">
                {plan.rules.map((rule, i) => (
                  <div key={i} className="flex justify-between items-center py-3.5 border-b border-white/5 last:border-0">
                    <span className="text-sm text-muted-foreground">{rule.label}</span>
                    <span className="text-sm font-medium text-white text-right">
                      {"values" in rule ? rule.values[capitalIdx] : rule.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Features & CTA */}
            <div className="p-10 bg-gradient-to-br from-blue-600/8 to-transparent border-l border-white/5 flex flex-col">
              <div className="mb-2">
                <p className="text-sm font-bold text-white">Simulated Capital</p>
                <p className="text-4xl font-display font-bold text-white mt-1">{capital.label}</p>
              </div>
              <p className="text-xs text-muted-foreground mb-8">{plan.subtitle}</p>

              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">What's Included</h3>
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/register">
                <Button variant="gradient" size="lg" className="w-full h-14 text-base shadow-blue-500/30 cursor-pointer">
                  Start {capital.label} {planType === "2step" ? "2-Step" : "1-Step"} Challenge
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Comparison Note */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-white mb-3">2-Step Challenge</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Two-phase evaluation with lower daily loss limit</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 shrink-0" /> 5% max daily loss — more breathing room per session</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Fee refunded with first payout</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Profit split starts at 80%, scales to 90%</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">1-Step Challenge</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-400 shrink-0" /> Single phase — faster route to funded account</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-400 shrink-0" /> 90% profit split from your very first payout</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-400 shrink-0" /> Stricter daily loss limit: 3%</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-green-400 shrink-0" /> Best Day Rule: no single day can exceed 50% of target</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
