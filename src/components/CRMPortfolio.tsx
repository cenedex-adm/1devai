"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CRMPortfolio() {
  const portfolioItems = [
    {
      title: "YouCubeApps",
      image: "https://ext.same-assets.com/766399910/3019916681.webp",
      categories: ["Customer Relationship Management", "WordPress Website"],
    },
    {
      title: "CaseTrack",
      image: "https://ext.same-assets.com/766399910/2873792829.webp",
      categories: ["Customer Relationship Management", "Mobile Application", "Web Application"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="py-24 px-4 text-center"
        style={{ backgroundColor: '#0d4c8a' }}
      >
        <h1 className="text-5xl font-bold text-white">
          Customer Relationship Management
        </h1>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div key={index}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full border-0 shadow-md">
                <div className="relative bg-white p-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <CardHeader className="pb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.categories.map((category, catIndex) => (
                      <Badge
                        key={catIndex}
                        variant="outline"
                        className="text-xs font-normal px-3 py-1"
                        style={{ borderColor: '#0d4c8a', color: '#0d4c8a' }}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-semibold" style={{ color: '#0d4c8a' }}>
                    {item.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-4" style={{ backgroundColor: '#2c4866' }}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Tell Us About Your Project
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border-0 rounded-md focus:outline-none focus:ring-2 text-white placeholder-gray-400"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border-0 rounded-md focus:outline-none focus:ring-2 text-white placeholder-gray-400"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 border-0 rounded-md focus:outline-none focus:ring-2 text-white placeholder-gray-400"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              />
            </div>

            <div>
              <label htmlFor="business" className="block text-sm font-medium mb-2 text-white">
                Business/Organization
              </label>
              <input
                type="text"
                id="business"
                placeholder="Business/Organization"
                className="w-full px-4 py-3 border-0 rounded-md focus:outline-none focus:ring-2 text-white placeholder-gray-400"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">
                What service are you interested in?
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 border-0 rounded-md focus:outline-none focus:ring-2 text-white"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <option value="" className="text-gray-900">Select a service</option>
                <option value="app-dev" className="text-gray-900">Application Development</option>
                <option value="crm-dev" className="text-gray-900">End-to-End CRM Development</option>
                <option value="security" className="text-gray-900">Vulnerability/Security Scanning</option>
                <option value="wordpress" className="text-gray-900">WordPress Management</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2 text-white">
                Describe your idea/requirement
              </label>
              <textarea
                id="description"
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 border-0 rounded-md focus:outline-none focus:ring-2 text-white placeholder-gray-400"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-3 text-white font-semibold rounded-md transition-colors hover:opacity-90"
                style={{ backgroundColor: '#4a7ba7' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 text-center" style={{ backgroundColor: '#1e3449' }}>
        <p className="text-white text-sm">
          © 2024 1Dev Software Solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
}
