"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    business: "",
    service: "",
    description: ""
  });
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
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          business: formData.business,
          service: formData.service,
          description: formData.description,
          _subject: `New Project Inquiry from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          business: "",
          service: "",
          description: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      title: "Vulnerability/Security Scanning",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      description: "We offer website security vulnerability scanning and monitoring. We use the latest technology to scan and assess your website for any possible known vulnerabilities and threats and apply solution(s).",
      link: "/#contact"
    },
    {
      title: "WordPress Management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "We are your one-stop solution partner for your WordPress website. From design to development, conversion, theme customization, backup, and general maintenance.",
      link: "/#contact"
    },
    {
      title: "End-to-End CRM Development",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      description: "We are experts in end to end customized development, implementation, migration and support of custom and scalable Customer Relationship Management (CRM) solutions.",
      link: "/#contact"
    },
    {
      title: "Application Development",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      description: "Our App team includes: qualified UX designers, visual designers and software engineers with deep expertise in cross-platform web and mobile development technologies for the modern business.",
      link: "/#contact"
    }
  ];

  const projects = [
    {
      title: "DaMeKi Web Services",
      category: "WordPress Website",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80"
    },
    {
      title: "YouCubeApps",
      category: "CRM, WordPress Website",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
    },
    {
      title: "Cenedex Software Solutions",
      category: "WordPress Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
    },
    {
      title: "Chaingapp",
      category: "Mobile App, Web App, WordPress",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
    },
    {
      title: "climbUnity",
      category: "Mobile App, WordPress",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80"
    },
    {
      title: "CaseTrack",
      category: "CRM, Mobile App, Web App",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#224163] to-[#3a5f85] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Our Services</h1>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
          alt="Our Services"
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* Tagline Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <p className="text-sm text-[#224163] font-semibold mb-4">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          We work passionately to integrate information, design, and technology to {" "}
          <span className="text-[#224163] italic">help our clients transform their visions to reality.</span>
        </h2>
        <div className="h-1 w-12 bg-[#224163] mt-6"></div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-[#224163] font-semibold hover:text-[#3a5f85] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Read More
                  <ArrowRight size={20} />
                </Link>
                <div className="h-1 w-full bg-[#224163] mt-6"></div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm text-[#224163] font-semibold mb-4">We Deliver</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Explore Recent Projects</h2>
          <div className="h-1 w-12 bg-[#224163] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-[#224163] font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tell Us About Your Project</h2>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
              There was an error sending your message. Please try again or contact us directly.
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Business/Organization</label>
              <input
                type="text"
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">What service are you interested in?</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a service</option>
                <option value="app-dev">Application Development</option>
                <option value="crm">End-to-End CRM Development</option>
                <option value="security">Vulnerability/Security Scanning</option>
                <option value="wordpress">WordPress Management</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Describe your idea/requirement</label>
              <textarea
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#224163] text-white py-4 px-6 rounded-md font-semibold hover:bg-[#3a5f85] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
