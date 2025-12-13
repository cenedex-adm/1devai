"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Code, Database, DollarSign, Lock, Puzzle, Zap, RefreshCw, Settings } from "lucide-react";

export default function SaaSTools() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#1a2744] to-[#0f1729]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Replace Expensive SaaS Tools<br />With Your Own AI-Built System
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-6">
            Stop Paying Monthly Fees. Own Your Tools Forever.
          </p>
          <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            1dev.ai helps businesses break free from endless subscriptions by generating custom, code-based replacements for the tools they use every day—CRM systems, invoicing tools, project managers, schedulers, inventory dashboards, and more.
          </p>
          <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mt-6">
            Our AI takes what you already use (QuickBooks, HubSpot, Trello, Monday, Salesforce, etc.) and rewrites the functionality into your own custom app—hosted anywhere you want, with no recurring SaaS fees.
          </p>
        </div>
      </section>

      {/* AI SaaS Replacement Engine */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI SaaS Replacement Engine
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <RefreshCw className="w-8 h-8 text-blue-400" />
              Clone Any Business Workflow
            </h3>

            <p className="text-lg text-white/80 mb-8">
              Upload screenshots, describe your workflows, or share exported data.<br />
              1dev.ai will rebuild fully custom versions of:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "CRM / Lead tracking",
                "Invoicing & payment tracking",
                "QuickBooks-style accounting tools",
                "Scheduling & calendar integration",
                "Project tracking & task management",
                "Client portals",
                "Inventory dashboards",
                "Automations & reporting systems",
                "Internal knowledgebase & ticketing"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-white/90 font-semibold">
              You end up with your own private app, accessible only to your company.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <div className="text-4xl font-bold text-blue-400 mb-4">1</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Describe What You Want to Replace
              </h3>
              <div className="bg-black/30 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-white/80 italic">
                  "Clone my QuickBooks invoicing workflow but make it simpler."
                </p>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <div className="text-4xl font-bold text-purple-400 mb-4">2</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI Generates the Full Codebase
              </h3>
              <div className="space-y-2">
                {[
                  "Database schema",
                  "Backend API",
                  "Frontend dashboard",
                  "Automations & notifications",
                  "User authentication",
                  "Reporting & exports"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/80">
                    <Code className="w-4 h-4 text-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <div className="text-4xl font-bold text-green-400 mb-4">3</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Deploy Anywhere
              </h3>
              <p className="text-white/80 mb-4">Host it on:</p>
              <div className="space-y-2">
                {[
                  "Your own server",
                  "AWS, Azure, GCP",
                  "Vercel, Netlify, Render",
                  "Local machine"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/80">
                    <Database className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/90 font-semibold mt-6">
                No subscription. No lock-in.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Build Your Own */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Build Your Own Instead of Renting SaaS?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Save Money */}
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border-green-500/20 p-8">
              <DollarSign className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Save $2,000–$20,000 a Year
              </h3>
              <p className="text-white/80 text-lg">
                Stop paying per-seat SaaS pricing.
              </p>
            </Card>

            {/* Own Your Data */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border-blue-500/20 p-8">
              <Lock className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Own Your Data
              </h3>
              <p className="text-white/80 text-lg">
                Your clients, your invoices, your notes—fully private.
              </p>
            </Card>

            {/* Fully Customizable */}
            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border-purple-500/20 p-8">
              <Puzzle className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Fully Customizable
              </h3>
              <p className="text-white/80 text-lg">
                Add features SaaS tools don't let you modify.
              </p>
            </Card>

            {/* Integrate With Anything */}
            <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm border-orange-500/20 p-8">
              <Settings className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Integrate With Anything
              </h3>
              <p className="text-white/80 mb-4">
                Your custom system can still connect to:
              </p>
              <div className="space-y-2">
                {[
                  "Stripe",
                  "PayPal",
                  "Google Workspace",
                  "Banks & accounting exports",
                  "Inventory tools",
                  "SMS/email API providers"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/70">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Future-Proof */}
          <Card className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm border-pink-500/20 p-8 mt-8">
            <div className="flex items-center gap-4 mb-4">
              <Zap className="w-12 h-12 text-pink-400" />
              <h3 className="text-2xl font-bold text-white">
                Future-Proof
              </h3>
            </div>
            <p className="text-white/80 text-lg">
              You can add new modules anytime with a single prompt.
            </p>
          </Card>
        </div>
      </section>

      {/* Example AI SaaS Replacements */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Example AI SaaS Replacements
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* QuickBooks Clone */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <div className="text-3xl font-bold text-blue-400 mb-4">1</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Custom QuickBooks Clone
              </h3>
              <p className="text-white/80 mb-4">
                Generate your own invoicing + expense tracking + reporting tool:
              </p>
              <div className="space-y-2">
                {[
                  "Invoice builder",
                  "Recurring billing",
                  "Expense dashboard",
                  "Profit/loss",
                  "CSV/QBO export"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/70">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI-Built CRM */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <div className="text-3xl font-bold text-purple-400 mb-4">2</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI-Built CRM
              </h3>
              <p className="text-white/80 mb-4">
                A private CRM tailored to your workflow:
              </p>
              <div className="space-y-2">
                {[
                  "Lead pipeline",
                  "Call notes",
                  "Automations",
                  "Task reminders",
                  "Client stages"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/70">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Project/Task Manager */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <div className="text-3xl font-bold text-green-400 mb-4">3</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Project/Task Manager
              </h3>
              <p className="text-white/80 mb-4">
                Trello/Monday-style board with:
              </p>
              <div className="space-y-2">
                {[
                  "Drag-and-drop",
                  "Team tasks",
                  "Assignments",
                  "Due dates",
                  "Comments"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/70">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Scheduling System */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
              <div className="text-3xl font-bold text-orange-400 mb-4">4</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Scheduling System
              </h3>
              <p className="text-white/80 mb-4">
                Calendar + appointment booking like Calendly:
              </p>
              <div className="space-y-2">
                {[
                  "Custom availability",
                  "Auto reminders",
                  "Payment options"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/70">
                    <CheckCircle className="w-4 h-4 text-orange-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-white/20 p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stop Paying for SaaS. Build Your Own Tools With AI.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Why rent your CRM, invoicing system, or project manager when you can own the code?
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              1dev.ai lets you recreate the exact tools you use today—QuickBooks, HubSpot, Trello, Notion, and more—without monthly fees.
            </p>

            <div className="bg-black/30 border border-white/10 rounded-lg p-8 mb-8">
              <p className="text-white/90 font-semibold mb-4">Get custom-built software:</p>
              <div className="grid md:grid-cols-2 gap-3 text-left">
                {[
                  "Tailored to your workflow",
                  "Totally private",
                  "100% customizable",
                  "No user limits",
                  "No recurring charges"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-2xl font-bold text-white mb-8">
              Your business, your code, your rules.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
