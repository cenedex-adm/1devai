"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. A simple web application typically takes 8-12 weeks, while complex enterprise solutions may take 4-6 months or longer. We provide detailed timelines during the discovery phase and maintain transparent communication throughout development."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes! We provide comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We offer flexible maintenance packages tailored to your needs, ensuring your software remains secure and up-to-date."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with four key phases: Discovery & Planning, Design & Development, Testing & QA, and Launch & Support. This iterative approach ensures flexibility, regular client feedback, and high-quality deliverables."
    },
    {
      question: "How do you ensure the security of our software?",
      answer: "Security is our top priority. We implement industry best practices including secure coding standards, regular security audits, penetration testing, encryption protocols, and compliance with regulations like GDPR, HIPAA, and PCI-DSS where applicable."
    },
    {
      question: "Can you work with our existing team or technology stack?",
      answer: "Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly with your existing workflows and technology stack. We're flexible and adaptable to your development environment and processes."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, dedicated team, and equity share arrangements for qualifying startups. During our initial consultation, we'll discuss the best approach for your specific project and budget."
    },
    {
      question: "What AI and machine learning services do you offer?",
      answer: "We provide a comprehensive range of AI services including custom machine learning model development, natural language processing (NLP), computer vision solutions, intelligent chatbots, predictive analytics, and AI-powered automation. Our team can help you identify the best AI solutions for your specific business needs."
    },
    {
      question: "How do you handle data privacy and security for AI projects?",
      answer: "We take data privacy extremely seriously. All AI projects are developed with privacy-by-design principles. We implement data anonymization, secure data handling protocols, and comply with relevant regulations like GDPR and CCPA. Your data never leaves your control without explicit consent."
    },
    {
      question: "Can you integrate AI solutions with our existing systems?",
      answer: "Yes, integration is one of our core strengths. We design AI solutions with interoperability in mind, using standard APIs and microservices architecture. Whether you use legacy systems or modern cloud infrastructure, we can seamlessly integrate AI capabilities into your existing technology stack."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve a diverse range of industries including healthcare, finance & banking, e-commerce, education, manufacturing, logistics, retail, and agriculture. Our team has deep domain expertise and understands the unique challenges and regulations of each sector."
    },
    {
      question: "Do you provide training for our team to use the AI solutions?",
      answer: "Absolutely! We believe in empowering our clients. Every AI solution delivery includes comprehensive documentation, user training sessions, and ongoing support. We ensure your team is confident in using and managing the AI tools we build."
    },
    {
      question: "What's the difference between your custom solutions and off-the-shelf software?",
      answer: "Custom solutions are built specifically for your business workflows, offering perfect fit, unlimited scalability, and complete ownership. Unlike SaaS subscriptions, you own the code, have no per-user fees, and can modify features anytime. Our solutions are tailored to give you a competitive advantage."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#224163] to-[#3a5f85] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and AI solutions
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <span className="text-[#25375d] mr-3 text-2xl">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-8">
                  <span className="text-[#25375d] font-bold mr-2">A:</span>
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link href="/#contact">
              <Button className="bg-[#25375d] hover:bg-[#1a2744] text-white px-8 py-4">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25375d] to-[#1a2744] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help transform your business with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-white text-[#25375d] hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Get Started Today
              </Button>
            </Link>
            <Link href="/services">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
