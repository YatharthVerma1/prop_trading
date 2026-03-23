import { useState } from "react";
import { Link } from "wouter";
import { User, Lock, Mail, ChevronDown, Globe, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegister } from "@/hooks/use-auth";

const COUNTRIES = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "NP", name: "Nepal", flag: "🇳🇵" },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "RO", name: "Romania", flag: "🇷🇴" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦" },
  { code: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿" },
  { code: "UG", name: "Uganda", flag: "🇺🇬" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "OTHER", name: "Other", flag: "🌐" },
];

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("IN");
  const registerMutation = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate({ name, email, password, country });
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md glass-panel p-8 sm:p-10 rounded-3xl relative z-10 border-white/10 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-white mb-2">Create Account</h1>
          <p className="text-muted-foreground">Start your evaluation journey today</p>
        </div>

        {registerMutation.isError && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6 flex items-center gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>{registerMutation.error?.message || "Registration failed. Please try again."}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/70 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 focus:bg-white/[0.06] transition-all"
                placeholder="Arjun Sharma"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 focus:bg-white/[0.06] transition-all"
                placeholder="trader@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/70 ml-1">Country</label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-11 pr-10 text-white text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 focus:bg-white/[0.06] transition-all appearance-none cursor-pointer"
                style={{ colorScheme: "dark" }}
              >
                <option value="IN" className="bg-[#111117] text-white">🇮🇳  India (Recommended)</option>
                <option disabled className="bg-[#0A0A0F] text-white/30">──────────────</option>
                {COUNTRIES.filter((c) => c.code !== "IN").map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#111117] text-white">
                    {c.flag}  {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/70 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 focus:bg-white/[0.06] transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 pt-1 cursor-pointer group">
            <input
              type="checkbox"
              required
              className="mt-0.5 w-4 h-4 shrink-0 rounded border border-white/20 bg-white/[0.04] checked:bg-blue-600 checked:border-blue-600 accent-blue-600 cursor-pointer"
            />
            <span className="text-xs text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
              I agree to the <span className="text-blue-400 hover:underline cursor-pointer">Terms of Service</span>, <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>, and confirm I am over 18 years old.
            </span>
          </label>

          <Button
            type="submit"
            variant="gradient"
            className="w-full h-12 text-sm font-semibold mt-2"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
          </Button>
        </form>

        <p className="text-center text-white/40 text-sm mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
