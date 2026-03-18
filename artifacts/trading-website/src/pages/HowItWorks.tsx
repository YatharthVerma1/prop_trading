import { Link } from "wouter";
import { ArrowRight, FileText, Target, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "The Challenge (Phase 1)",
      desc: "Prove your trading skills by hitting our reasonable 8% profit target while respecting drawdown limits. Take as much time as you need.",
      icon: Target,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      num: "02",
      title: "Verification (Phase 2)",
      desc: "We just need to make sure your results were consistent. The profit target is reduced to 5%, with the same drawdown rules.",
      icon: ShieldCheck,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      num: "03",
      title: "Elite Funded Trader",
      desc: "Congratulations! You are trading our live capital. Request your first payout after 14 days, and receive your full evaluation fee refund.",
      icon: Award,
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Path to <span className="text-gradient-blue">Funding</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transparent, realistic, and fair evaluation designed to find profitable traders. We want you to succeed because when you win, we win.
          </p>
        </div>

        <div className="relative space-y-24 before:absolute before:inset-0 before:ml-10 md:before:ml-[50%] before:-translate-x-px md:before:mx-auto before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:via-indigo-500/50 before:to-transparent">
          {steps.map((step, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-background bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl relative z-10">
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              <div className="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] p-8 rounded-3xl glass-panel relative">
                <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold mb-4 ${step.bg} ${step.color} border ${step.border}`}>
                  Step {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center glass-panel p-12 rounded-3xl">
          <FileText className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h3 className="text-3xl font-display font-bold text-white mb-4">Clear Rules. No Surprises.</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We don't rely on hidden rules to fail you. Our rules are straightforward: Don't hit the daily loss limit, don't hit the max loss limit. That's it.
          </p>
          <Link href="/pricing">
            <Button size="lg" variant="gradient" className="gap-2">
              View Challenge Accounts <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
