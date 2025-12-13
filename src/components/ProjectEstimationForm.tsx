"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProjectEstimationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#25375d] to-[#1a2744] hover:from-[#1a2744] hover:to-[#25375d] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all fixed bottom-8 left-8 z-50 group"
        >
          <Calculator className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          Get AI Project Estimate
          <Sparkles className="ml-2 w-5 h-5 group-hover:animate-pulse" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-[#25375d] flex items-center gap-2">
            <Calculator className="w-8 h-8" />
            AI Project Estimation
          </DialogTitle>
          <DialogDescription className="text-base">
            Tell us about your AI project and we'll provide a detailed estimate within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="border-gray-300 focus:border-[#25375d]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="border-gray-300 focus:border-[#25375d]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-700 font-semibold">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="border-gray-300 focus:border-[#25375d]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="border-gray-300 focus:border-[#25375d]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-gray-700 font-semibold">
                AI Project Type *
              </Label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#25375d] bg-white"
              >
                <option value="">Select a project type...</option>
                <option value="ml-model">Custom Machine Learning Model</option>
                <option value="chatbot">Intelligent Chatbot / Virtual Assistant</option>
                <option value="computer-vision">Computer Vision Solution</option>
                <option value="nlp">Natural Language Processing</option>
                <option value="predictive-analytics">Predictive Analytics Platform</option>
                <option value="automation">Intelligent Process Automation</option>
                <option value="recommendation">Recommendation Engine</option>
                <option value="other">Other AI Solution</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-gray-700 font-semibold">
                  Estimated Budget
                </Label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#25375d] bg-white"
                >
                  <option value="">Select budget range...</option>
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-plus">$250,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-gray-700 font-semibold">
                  Desired Timeline
                </Label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#25375d] bg-white"
                >
                  <option value="">Select timeline...</option>
                  <option value="urgent">Urgent (1-2 months)</option>
                  <option value="short">Short term (2-4 months)</option>
                  <option value="medium">Medium term (4-6 months)</option>
                  <option value="long">Long term (6+ months)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-700 font-semibold">
                Project Description *
              </Label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your AI project goals, challenges you're trying to solve, data you have available, and any specific requirements..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#25375d] resize-none"
              />
            </div>

            <div className="bg-[#25375d]/5 p-4 rounded-lg border border-[#25375d]/20">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#25375d]">What happens next?</strong><br />
                Our AI specialists will review your requirements and provide a detailed project estimate including timeline, deliverables, and investment within 24 hours.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#25375d] to-[#1a2744] hover:from-[#1a2744] hover:to-[#25375d] text-white py-6 text-lg font-semibold"
            >
              Get Your Free AI Project Estimate
            </Button>
          </form>
        ) : (
          <div className="py-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Thank You!
            </h3>
            <p className="text-lg text-gray-600 mb-2">
              Your project estimation request has been submitted successfully.
            </p>
            <p className="text-gray-500">
              Our AI team will reach out to you within 24 hours with a detailed estimate.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
