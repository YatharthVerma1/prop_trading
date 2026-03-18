import { Link } from "wouter";
import { TrendingUp, Twitter, Instagram, Youtube, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                PropTrader<span className="text-blue-500">Elite</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We discover raw trading talent and provide the capital needed to succeed. Pass our evaluation, get funded up to $200,000, and keep up to 90% of your profits.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-blue-400">How It Works</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-blue-400">Pricing & Packages</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-blue-400">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-blue-400">Contact Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white">Risk Disclosure</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Subscribe for trading tips and exclusive discount codes.</p>
            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none text-white text-sm px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-500 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center flex flex-col items-center">
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
            <strong>Risk Disclosure:</strong> Trading Forex, CFDs, and other financial instruments involves significant risk of loss and is not suitable for all investors. The information provided on this website is for educational purposes only and should not be considered financial advice. PropTrader Elite does not provide any investment services. We provide a simulated trading environment where traders can prove their skills.
          </p>
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} PropTrader Elite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
