"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { X, MessageSquare, Send, ChevronRight, CheckCircle } from "lucide-react";

export default function FloatingLeadForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xyzypwwg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Quick Contact from ${name}`,
          source: "Floating Lead Form",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        // Close the form after 3 seconds
        setTimeout(() => {
          setIsExpanded(false);
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="fixed right-6 bottom-6 z-50 bg-[#25375d] hover:bg-[#1a2744] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group"
          aria-label="Quick contact"
        >
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            Free
          </span>
        </button>
      )}

      {/* Expanded Form */}
      {isExpanded && (
        <Card className="fixed right-6 bottom-6 z-50 w-[380px] shadow-2xl border-2 border-[#25375d]/20 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-[#25375d] to-[#1a2744] text-white p-4 rounded-t-lg relative">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Quick Contact</h3>
                <p className="text-xs text-white/80">We typically reply in 24 hours</p>
              </div>
            </div>
          </div>

          {submitStatus === "success" ? (
            <div className="p-8 bg-white text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
              {submitStatus === "error" && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm text-center">
                  Error sending message. Please try again.
                </div>
              )}

              <div>
                <Label htmlFor="float-name" className="text-sm font-semibold text-gray-700">
                  Name
                </Label>
                <Input
                  id="float-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="float-email" className="text-sm font-semibold text-gray-700">
                  Email
                </Label>
                <Input
                  id="float-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="float-message" className="text-sm font-semibold text-gray-700">
                  Message
                </Label>
                <textarea
                  id="float-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25375d] focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#25375d] hover:bg-[#1a2744] text-white font-semibold py-5 shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Or call us at <a href="tel:+15551234567" className="text-[#25375d] font-semibold hover:underline">+1 (555) 123-4567</a>
              </p>
            </form>
          )}
        </Card>
      )}
    </>
  );
}
