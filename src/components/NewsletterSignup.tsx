"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setIsSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#25375d] via-[#1a2744] to-[#25375d] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join 5,000+ business leaders receiving weekly insights on software development trends,
            industry best practices, and exclusive tips to accelerate your digital transformation.
          </p>
        </div>

        {isSubmitted ? (
          <div className="flex items-center justify-center gap-3 py-4 text-white animate-in fade-in duration-300">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-lg font-semibold">
              Thanks for subscribing! Check your inbox soon.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 px-6 py-6 text-lg focus:border-white/40 focus:ring-white/40"
                required
              />
              <Button
                type="submit"
                className="bg-white text-[#25375d] hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              >
                <Send className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/90">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">5,000+</span>
            <span className="text-sm">Subscribers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">Weekly</span>
            <span className="text-sm">Updates</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">100%</span>
            <span className="text-sm">Free Content</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">0</span>
            <span className="text-sm">Spam Emails</span>
          </div>
        </div>
      </div>
    </section>
  );
}
