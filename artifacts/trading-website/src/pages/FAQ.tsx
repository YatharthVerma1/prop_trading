import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    category: "The Evaluation",
    questions: [
      { q: "What happens if I breach a rule?", a: "If a rule is breached, your evaluation is failed and the account is closed. However, you are always welcome to purchase a new challenge and try again." },
      { q: "Is there a time limit to pass?", a: "No! We have completely removed time limits from our evaluation phases. Trade at your own pace without pressure." },
      { q: "Do you offer a free retry?", a: "Yes. If your account ends in profit at the end of a 30-day trading cycle but you haven't reached the profit target (and haven't breached any rules), we will issue a free retry." }
    ]
  },
  {
    category: "Trading Rules",
    questions: [
      { q: "Can I hold trades over the weekend?", a: "Yes, you can hold trades over the weekend on both evaluation and funded accounts without any restrictions." },
      { q: "Is News Trading allowed?", a: "Yes, you are allowed to trade during macroeconomic news events. We do not place restrictions on your trading strategy." },
      { q: "Are Expert Advisors (EAs) allowed?", a: "Yes, EAs and trading bots are fully allowed as long as they do not employ latency arbitrage, high-frequency trading (HFT), or copy trading from other signals." }
    ]
  },
  {
    category: "Payouts & Funding",
    questions: [
      { q: "When can I request my first payout?", a: "You can request your first payout 14 days after placing your first trade on the funded account." },
      { q: "How are payouts processed?", a: "We process payouts via Bank Wire Transfer and Cryptocurrency (USDT, BTC, ETH). Crypto payouts are usually processed within 24 hours." },
      { q: "Will I get my evaluation fee refunded?", a: "Yes! Your initial evaluation fee is fully refunded to you along with your first successful payout from a funded account." }
    ]
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string>("0-0");

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? "" : index);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our firm and how the evaluation works.
          </p>
        </div>

        <div className="space-y-12">
          {FAQS.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-xl font-display font-bold text-white mb-6 pl-4 border-l-2 border-blue-500">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.questions.map((faq, qIdx) => {
                  const idx = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === idx;
                  return (
                    <div 
                      key={qIdx} 
                      className={`glass-panel border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-blue-500/30 bg-blue-500/5' : 'border-white/5 hover:border-white/10'}`}
                    >
                      <button 
                        className="w-full text-left px-6 py-5 flex items-center justify-between"
                        onClick={() => toggleAccordion(idx)}
                      >
                        <span className="font-medium text-white pr-4">{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-blue-500 text-white' : 'bg-white/5 text-muted-foreground'}`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <div className="px-6 pb-6 pt-0 text-muted-foreground text-sm leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
