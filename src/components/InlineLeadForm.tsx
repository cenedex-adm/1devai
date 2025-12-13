"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Building2, Rocket, CheckCircle2 } from "lucide-react";

export default function InlineLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inline lead form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#25375d]/5 via-transparent to-[#1a2744]/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#25375d]/10 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-[#25375d]" />
              <span className="text-sm font-semibold text-[#25375d]">
                FREE CONSULTATION
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Turn Your Vision Into Reality?
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Schedule a free 30-minute consultation with our experts. We'll discuss your project,
              provide insights, and create a roadmap to success.
            </p>

            <div className="space-y-4">
              {[
                "Free project assessment and scope analysis",
                "Technology stack recommendations",
                "Timeline and budget estimation",
                "Risk analysis and mitigation strategies",
                "No obligation, no pressure, just valuable insights",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#25375d]/5 border-l-4 border-[#25375d] rounded-lg">
              <p className="text-gray-800 italic">
                "1Dev helped us transform our business idea into a fully functional platform.
                Their expertise and dedication exceeded our expectations!"
              </p>
              <p className="text-sm text-gray-600 mt-2 font-semibold">
                - Michael Thompson, CEO at TechFlow
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="p-8 shadow-2xl border-2 border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-12 animate-in fade-in duration-500">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-600 text-lg">
                  We've received your request. Our team will contact you within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Your Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you shortly
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="inline-name" className="text-sm font-semibold text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="inline-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="mt-1.5"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="inline-email" className="text-sm font-semibold text-gray-700">
                      Business Email *
                    </Label>
                    <div className="relative mt-1.5">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="inline-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inline-phone" className="text-sm font-semibold text-gray-700">
                      Phone Number *
                    </Label>
                    <div className="relative mt-1.5">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="inline-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inline-company" className="text-sm font-semibold text-gray-700">
                      Company Name (Optional)
                    </Label>
                    <div className="relative mt-1.5">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="inline-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#25375d] hover:bg-[#1a2744] text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Claim My Free Consultation
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
