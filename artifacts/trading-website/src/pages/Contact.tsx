import { useState } from "react";
import { Mail, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Get in <span className="text-gradient-blue">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Have questions about our evaluation process or need technical support? Our team is here to help 24/7.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Support</h4>
                  <p className="text-muted-foreground text-sm mb-2">Our average response time is under 2 hours.</p>
                  <a href="mailto:support@proptraderelite.com" className="text-blue-400 hover:text-blue-300 font-medium">support@proptraderelite.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Live Chat</h4>
                  <p className="text-muted-foreground text-sm mb-2">Available 24/5 during market hours.</p>
                  <Button variant="outline" size="sm" className="mt-1">Open Chat Support</Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Headquarters</h4>
                  <p className="text-muted-foreground text-sm">
                    125 Old Broad St<br />
                    London, EC2N 1AR<br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 sm:p-10 rounded-3xl relative z-10 border-white/10">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-muted-foreground mb-8">Thanks for reaching out. A member of our support team will get back to you shortly.</p>
                <Button variant="outline" onClick={() => setSent(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">First Name</label>
                    <input 
                      type="text" required
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Last Name</label>
                    <input 
                      type="text" required
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Email Address</label>
                  <input 
                    type="email" required
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Subject</label>
                  <select required className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 appearance-none">
                    <option value="">Select a topic</option>
                    <option value="evaluation">Evaluation Rules</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payouts</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Message</label>
                  <textarea 
                    required rows={5}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <Button type="submit" variant="gradient" className="w-full h-12 text-md mt-2 gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
