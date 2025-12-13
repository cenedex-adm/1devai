"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Mail, Sparkles } from "lucide-react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves viewport from top
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Add delay to avoid triggering immediately on page load
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Exit intent form submitted:", { name, email });
    // Handle form submission
    setIsOpen(false);
    alert("Thank you! We'll send you exclusive insights and offers.");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-0">
        <div className="relative bg-gradient-to-br from-[#25375d] to-[#1a2744] text-white p-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Wait! Special Offer
              </span>
            </div>

            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-white mb-3">
                Don't Leave Empty-Handed!
              </DialogTitle>
              <DialogDescription className="text-lg text-white/90">
                Get a <span className="font-bold text-yellow-400">FREE consultation</span> and
                exclusive insights on how custom software can transform your business.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="exit-name" className="text-white text-sm font-semibold mb-2 block">
                  Your Name
                </Label>
                <Input
                  id="exit-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/40"
                  required
                />
              </div>

              <div>
                <Label htmlFor="exit-email" className="text-white text-sm font-semibold mb-2 block">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                  <Input
                    id="exit-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pl-10 focus:border-white/40 focus:ring-white/40"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  className="flex-1 bg-white text-[#25375d] hover:bg-gray-100 font-semibold py-6 text-lg shadow-lg"
                >
                  Get My Free Consultation
                </Button>
              </div>
            </form>

            <p className="text-xs text-white/60 text-center mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
