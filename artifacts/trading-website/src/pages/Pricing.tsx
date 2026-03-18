import { useState } from "react";
import { Link } from "wouter";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACCOUNTS = [
  { size: "$10,000", fee: 99, target1: "$800 (8%)", target2: "$500 (5%)" },
  { size: "$25,000", fee: 199, target1: "$2,000 (8%)", target2: "$1,250 (5%)" },
  { size: "$50,000", fee: 299, target1: "$4,000 (8%)", target2: "$2,500 (5%)", popular: true },
  { size: "$100,000", fee: 499, target1: "$8,000 (8%)", target2: "$5,000 (5%)" },
  { size: "$200,000", fee: 999, target1: "$16,000 (8%)", target2: "$10,000 (5%)" },
];

export function Pricing() {
  const [selectedAcc, setSelectedAcc] = useState(2); // default $50k

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Choose Your <span className="text-gradient-blue">Capital</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Pay a one-time refundable fee. No hidden charges. No recurring subscriptions. Your fee is refunded with your first payout.
          </p>
        </div>

        {/* Account Size Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {ACCOUNTS.map((acc, i) => (
            <button
              key={acc.size}
              onClick={() => setSelectedAcc(i)}
              className={`px-6 py-3 rounded-xl font-display font-semibold text-lg transition-all ${
                selectedAcc === i 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500" 
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
              }`}
            >
              {acc.size}
            </button>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(30,111,255,0.15)]">
          <div className="grid md:grid-cols-2">
            <div className="p-10 bg-white/[0.02]">
              <div className="mb-8">
                <p className="text-blue-400 font-medium mb-2">Evaluation Fee</p>
                <div className="flex items-end gap-2 text-white">
                  <span className="text-6xl font-display font-bold">${ACCOUNTS[selectedAcc].fee}</span>
                  <span className="text-muted-foreground pb-2 text-lg">one-time</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-muted-foreground">Trading Period</span>
                  <span className="text-white font-medium">Unlimited</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-muted-foreground">Minimum Trading Days</span>
                  <span className="text-white font-medium">5 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-muted-foreground">Max Daily Loss (5%)</span>
                  <span className="text-red-400 font-medium">${(parseInt(ACCOUNTS[selectedAcc].size.replace(/\D/g,'')) * 0.05).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span className="text-muted-foreground">Max Total Loss (10%)</span>
                  <span className="text-red-400 font-medium">${(parseInt(ACCOUNTS[selectedAcc].size.replace(/\D/g,'')) * 0.1).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="p-10 bg-gradient-to-br from-blue-600/10 to-transparent border-l border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">What's included</h3>
              <ul className="space-y-4 mb-10">
                {[
                  `Phase 1 Target: ${ACCOUNTS[selectedAcc].target1}`,
                  `Phase 2 Target: ${ACCOUNTS[selectedAcc].target2}`,
                  "Up to 90% Profit Split",
                  "Fee Refund on 1st Payout",
                  "News Trading Allowed",
                  "Weekend Holding Allowed",
                  "First Payout after 14 Days",
                  "Free Retry on Profit",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="/register">
                <Button variant="gradient" size="lg" className="w-full h-14 text-lg shadow-blue-500/30">
                  Start {ACCOUNTS[selectedAcc].size} Challenge
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
