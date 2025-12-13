"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Settings, Shield, Database, Globe, Handshake, Calendar, Target, HomeIcon, TrendingUp, Users, ChevronLeft, ChevronRight, CheckCircle2, Brain, Sparkles, Bot, Zap, MessageSquare, BarChart3, Eye, Cpu } from "lucide-react";
import { useState, useEffect } from "react";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import FloatingLeadForm from "@/components/FloatingLeadForm";
import NewsletterSignup from "@/components/NewsletterSignup";
import InlineLeadForm from "@/components/InlineLeadForm";
import FloatingCallButton from "@/components/FloatingCallButton";
import ProjectEstimationForm from "@/components/ProjectEstimationForm";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80',
      title: 'AI-Powered Solutions',
      titleLine2: 'For Tomorrow\'s Businesses',
      description: 'Harness the power of Artificial Intelligence to transform your business. We build intelligent, adaptive software that learns, predicts, and automates to give you a competitive edge in the digital age.',
      buttonText: 'Explore AI Solutions'
    },
    {
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80',
      title: 'Machine Learning Meets',
      titleLine2: 'Business Intelligence',
      description: 'From predictive analytics to natural language processing, we integrate cutting-edge AI technologies into custom solutions that drive growth, efficiency, and innovation for your business.',
      buttonText: 'Start Your AI Journey'
    },
    {
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80',
      title: 'Intelligent Automation',
      titleLine2: 'Smarter Operations',
      description: 'Leverage AI-driven automation to streamline processes, reduce costs, and unlock new capabilities. Our solutions combine machine learning, computer vision, and intelligent agents to revolutionize how you work.',
      buttonText: 'Discover More'
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 800);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [isTransitioning, slides.length]);

  return (
    <div className="min-h-screen">
      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      {/* Floating Lead Form */}
      <FloatingLeadForm />

      {/* Floating Call Button */}
      <FloatingCallButton />

      {/* Project Estimation Form */}
      <ProjectEstimationForm />

      {/* Hero Slider Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute'
              }`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
                {slide.title}<br />
                {slide.titleLine2}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                {slide.description}
              </p>
              <Button
                size="lg"
                className="bg-[#25375d] hover:bg-[#1a2744] text-white px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                {slide.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsTransitioning(false), 800);
                }
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-12 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#25375d] text-sm font-semibold mb-3">AI-Driven Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Next-Generation AI Solutions<br />
              Powered by Machine Learning & Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intelligent chatbots to predictive analytics, we harness the power of AI to deliver transformative solutions that learn, adapt, and optimize your business operations.
            </p>
            <div className="w-24 h-1 bg-[#25375d] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* AI & Machine Learning Solutions */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 border-[#25375d]/20 bg-gradient-to-br from-white to-[#25375d]/5">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#25375d] to-[#1a2744] flex items-center justify-center shadow-lg">
                  <Brain className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">AI & Machine Learning Solutions</h3>
              <p className="text-lg text-[#25375d] italic text-center mb-4">
                Intelligent Systems That Learn and Adapt
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transform your business with custom AI and machine learning solutions. We develop intelligent systems that analyze data, recognize patterns, make predictions, and continuously improve. From computer vision to deep learning models, we bring AI capabilities to your applications.
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Our AI Capabilities:</h4>
                <ul className="space-y-2">
                  {[
                    "Custom machine learning model development",
                    "Natural Language Processing (NLP) & understanding",
                    "Computer vision & image recognition",
                    "Predictive analytics & forecasting",
                    "Deep learning & neural networks",
                    "AI model training & optimization",
                    "MLOps & model deployment"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <Sparkles className="w-5 h-5 text-[#25375d] mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="text-[#25375d] font-semibold text-sm flex items-center mx-auto hover:gap-2 transition-all mt-4">
                Learn More <ArrowRight size={16} className="ml-1" />
              </button>
            </Card>

            {/* Intelligent Chatbots & Virtual Assistants */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 border-[#25375d]/20 bg-gradient-to-br from-white to-[#25375d]/5">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#25375d] to-[#1a2744] flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Intelligent Chatbots & Virtual Assistants</h3>
              <p className="text-lg text-[#25375d] italic text-center mb-4">
                24/7 AI-Powered Customer Engagement
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Deploy intelligent conversational AI that understands context, learns from interactions, and delivers personalized customer experiences. Our chatbots and virtual assistants handle inquiries, automate support, and drive engagement using advanced NLP and machine learning.
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Chatbot Capabilities:</h4>
                <ul className="space-y-2">
                  {[
                    "Natural language understanding & processing",
                    "Multi-language support & translation",
                    "Context-aware conversations",
                    "Integration with business systems",
                    "Sentiment analysis & emotion detection",
                    "Voice recognition & speech synthesis",
                    "Continuous learning from interactions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <Bot className="w-5 h-5 text-[#25375d] mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Business Benefits:</h4>
                <ul className="space-y-2">
                  {[
                    "Reduce support costs by up to 80%",
                    "Instant responses 24/7/365",
                    "Handle unlimited simultaneous conversations",
                    "Improve customer satisfaction scores",
                    "Capture leads and qualify prospects",
                    "Seamless handoff to human agents",
                    "Analytics & conversation insights"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <Zap className="w-5 h-5 text-[#25375d] mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="text-[#25375d] font-semibold text-sm flex items-center mx-auto hover:gap-2 transition-all mt-4">
                Learn More <ArrowRight size={16} className="ml-1" />
              </button>
            </Card>

            {/* AI-Powered Analytics & Insights */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 border-[#25375d]/20 bg-gradient-to-br from-white to-[#25375d]/5">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#25375d] to-[#1a2744] flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">AI-Powered Analytics & Insights</h3>
              <p className="text-lg text-[#25375d] italic text-center mb-4">
                Turn Data Into Intelligent Decisions
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Unlock the full potential of your data with AI-driven analytics platforms. We build intelligent dashboards and reporting systems that use machine learning to uncover hidden patterns, predict trends, and provide actionable insights that drive strategic decision-making.
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Analytics Features:</h4>
                <ul className="space-y-2">
                  {[
                    "Predictive analytics & forecasting",
                    "Real-time data processing & visualization",
                    "Anomaly detection & alerts",
                    "Customer behavior analysis",
                    "Automated report generation",
                    "Natural language queries",
                    "Interactive AI-powered dashboards",
                    "Trend analysis & pattern recognition",
                    "Prescriptive recommendations"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <BarChart3 className="w-5 h-5 text-[#25375d] mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="text-[#25375d] font-semibold text-sm flex items-center mx-auto hover:gap-2 transition-all mt-4">
                Learn More <ArrowRight size={16} className="ml-1" />
              </button>
            </Card>

            {/* Computer Vision & Image Recognition */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 border-[#25375d]/20 bg-gradient-to-br from-white to-[#25375d]/5">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#25375d] to-[#1a2744] flex items-center justify-center shadow-lg">
                  <Eye className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Computer Vision & Image Recognition</h3>
              <p className="text-lg text-[#25375d] italic text-center mb-4">
                AI That Sees and Understands
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Implement advanced computer vision solutions that enable machines to interpret and understand visual information. From object detection to facial recognition, our AI-powered vision systems automate processes, enhance security, and unlock new possibilities for your business.
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Vision AI Applications:</h4>
                <ul className="space-y-2">
                  {[
                    "Object detection & classification",
                    "Facial recognition & authentication",
                    "Optical character recognition (OCR)",
                    "Image & video content analysis",
                    "Quality inspection & defect detection",
                    "Medical image analysis"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <Eye className="w-5 h-5 text-[#25375d] mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our computer vision solutions process images and video in real-time, providing instant insights and automated responses. We build custom models trained on your specific data for maximum accuracy and performance.
              </p>

              <button className="text-[#25375d] font-semibold text-sm flex items-center mx-auto hover:gap-2 transition-all mt-4">
                Learn More <ArrowRight size={16} className="ml-1" />
              </button>
            </Card>

            {/* Intelligent Process Automation */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 border-[#25375d]/20 bg-gradient-to-br from-white to-[#25375d]/5">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#25375d] to-[#1a2744] flex items-center justify-center shadow-lg">
                  <Cpu className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Intelligent Process Automation (IPA)</h3>
              <p className="text-lg text-[#25375d] italic text-center mb-4">
                AI-Driven Workflow Optimization
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Combine RPA with AI to automate complex business processes that require human-like decision making. Our intelligent automation solutions learn from patterns, handle exceptions, and continuously optimize workflows to maximize efficiency and reduce operational costs.
              </p>

              <div className="bg-gradient-to-br from-[#25375d]/5 to-[#25375d]/10 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-900 mb-3 text-center">Automation Capabilities</h4>
                <p className="text-gray-600 text-sm text-center mb-4">
                  Our IPA solutions combine robotic process automation (RPA) with artificial intelligence to automate end-to-end business processes with minimal human intervention.
                </p>
                <div className="space-y-2">
                  {[
                    "Document processing & data extraction",
                    "Intelligent workflow orchestration",
                    "Decision automation with ML",
                    "Email & communication automation",
                    "Integration with existing systems"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-700">
                      <Zap className="w-4 h-4 text-[#25375d] mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <button className="text-[#25375d] font-semibold text-sm flex items-center mx-auto hover:gap-2 transition-all mt-4">
                Learn More <ArrowRight size={16} className="ml-1" />
              </button>
            </Card>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-gradient-to-r from-[#25375d] to-[#1a2744] rounded-2xl p-12 text-white mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Us for <span className="italic font-serif">AI Solutions</span>?
              </h3>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Our AI and machine learning solutions leverage cutting-edge technologies and industry best practices. With deep expertise in artificial intelligence, our team delivers transformative solutions that drive real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Expertise & Innovation",
                  description: "Our team specializes in the latest AI technologies including deep learning, NLP, computer vision, and reinforcement learning. We stay at the forefront of AI innovation to deliver cutting-edge solutions."
                },
                {
                  title: "Custom ML Model Development",
                  description: "We design and train custom machine learning models tailored to your specific use cases and data, ensuring optimal performance and accuracy for your business needs."
                },
                {
                  title: "End-to-End AI Implementation",
                  description: "From data preparation and model training to deployment and monitoring, we handle the complete AI lifecycle. Our MLOps expertise ensures smooth integration and continuous improvement."
                },
                {
                  title: "Scalable AI Architecture",
                  description: "Our AI solutions are built on scalable cloud infrastructure that grows with your business, handling increasing data volumes and user demands without compromising performance."
                },
                {
                  title: "Explainable AI",
                  description: "We prioritize transparency in our AI models. Our solutions provide clear insights into how decisions are made, ensuring trust, compliance, and better business understanding."
                },
                {
                  title: "Data Security & Privacy",
                  description: "We implement robust security measures and comply with data protection regulations. Your sensitive data is encrypted, anonymized, and handled with the highest security standards."
                },
                {
                  title: "Continuous Learning Systems",
                  description: "Our AI solutions don't just perform tasks—they learn and improve over time. We implement feedback loops and retraining pipelines to ensure your models stay accurate and relevant."
                },
                {
                  title: "AI Integration Services",
                  description: "We seamlessly integrate AI capabilities into your existing systems and workflows, minimizing disruption while maximizing value. Our APIs and microservices ensure smooth interoperability."
                },
                {
                  title: "Dedicated AI Specialists",
                  description: "Work with a team of data scientists, ML engineers, and AI architects who bring deep expertise. We provide ongoing support, model maintenance, and strategic AI consultation."
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">
              Ready to transform your business? Let's discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#25375d] hover:bg-[#1a2744] text-white px-8 py-6 text-lg">
                Contact Us
              </Button>
              <Button variant="outline" className="border-2 border-[#25375d] text-[#25375d] hover:bg-[#25375d] hover:text-white px-8 py-6 text-lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Lead Generation Form */}
      <InlineLeadForm />

      {/* Why 1Dev Section */}
      <section className="py-20 bg-[#25375d] text-white relative">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://ext.same-assets.com/766399910/155886100.webp)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold mb-3">Why 1Dev AI Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Transforming businesses with <span className="italic font-serif">intelligent AI</span>
            </h2>
            <div className="w-24 h-1 bg-white mt-6" />
          </div>

          <p className="text-lg mb-12 max-w-4xl">
            We are pioneers in AI implementation, with a team of data scientists, ML engineers, and AI architects who bring cutting-edge artificial intelligence to solve real business challenges.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: <Handshake className="w-8 h-8" />,
                title: "We Deliver Excellence",
                description: "We practice active listening, use the best tools, commit to strong standards and our team is focused on value and delivery."
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "On Time Delivery",
                description: "We establish realistic deadlines with our clients and apply processes that ensures: on time, on budget, high quality software delivery."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Results Focused",
                description: "Our approach is to develop software solutions where the end result you are looking for is our primary focus from start to finish."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="bg-white/10 p-4 rounded-lg flex-shrink-0 border border-white/20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startups Section */}
      <section className="py-20 bg-[#1a2744] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white/20 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Empowering AI Startups</h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto">
              We partner with visionary startups building the next generation of AI-powered products. From proof-of-concept to production-ready ML systems, 1Dev helps you bring your intelligent solutions to market faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI-First Development",
                description: "Our team specializes in building AI-native products from the ground up. We understand the unique challenges of training models, managing data pipelines, and deploying intelligent systems at scale."
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Flexible Engagement Models",
                description: "For qualifying AI startups, we offer equity partnerships and milestone-based pricing. We invest in your vision and grow with you, providing the AI expertise you need without breaking the bank."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "AI Ecosystem Access",
                description: "Tap into our network of AI researchers, data scientists, and industry experts. We connect you with GPU cloud providers, data labeling services, and potential investors in the AI space."
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#25375d] border-none p-8 text-center">
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#25375d] text-sm font-semibold mb-3">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of the innovative solutions we've delivered for our clients across various industries
            </p>
            <div className="w-24 h-1 bg-[#25375d] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "AI-Powered Predictive Maintenance",
                category: "Machine Learning",
                description: "Deep learning system that predicts equipment failures 48 hours in advance, reducing downtime by 60% for a manufacturing client.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
                tags: ["TensorFlow", "Python", "AWS SageMaker"]
              },
              {
                title: "Intelligent Customer Service Bot",
                category: "NLP & Chatbots",
                description: "Advanced conversational AI handling 10,000+ customer inquiries daily with 95% accuracy, supporting 12 languages for global e-commerce platform.",
                image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
                tags: ["GPT-4", "LangChain", "Azure"]
              },
              {
                title: "Medical Image Analysis System",
                category: "Computer Vision",
                description: "FDA-approved computer vision solution for detecting abnormalities in medical scans with 98% accuracy, assisting radiologists in early diagnosis.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
                tags: ["PyTorch", "OpenCV", "DICOM"]
              }
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white/90 text-sm">{project.category}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-[#25375d]/10 text-[#25375d] text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-[#25375d] hover:bg-[#1a2744] text-white px-8 py-6 text-lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#25375d] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "150+",
                label: "Projects Delivered",
                icon: "🚀"
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                icon: "⭐"
              },
              {
                number: "12+",
                label: "Years Experience",
                icon: "📅"
              },
              {
                number: "50+",
                label: "Team Members",
                icon: "👥"
              }
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#25375d] text-sm font-semibold mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-[#25375d] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
                content: "1Dev transformed our vision into reality. Their team's expertise in CRM development helped us streamline our operations and increase productivity by 40%. Highly recommended!"
              },
              {
                name: "Michael Chen",
                role: "CTO, DataFlow Solutions",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
                content: "Working with 1Dev was a game-changer for our business. They delivered a robust, scalable application on time and within budget. Their attention to detail is unmatched."
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, HealthWise",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
                content: "The mobile app developed by 1Dev exceeded our expectations. Their team understood our healthcare industry needs and built a secure, HIPAA-compliant solution that our users love."
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex mt-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <NewsletterSignup />

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#25375d] text-sm font-semibold mb-3">AI & ML Technologies</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the most advanced AI and machine learning technologies to build intelligent, scalable solutions
            </p>
            <div className="w-24 h-1 bg-[#25375d] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: "Machine Learning",
                technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"]
              },
              {
                category: "Natural Language",
                technologies: ["OpenAI GPT", "Hugging Face", "spaCy", "NLTK", "BERT"]
              },
              {
                category: "Computer Vision",
                technologies: ["OpenCV", "YOLO", "Detectron2", "MediaPipe", "DeepFace"]
              },
              {
                category: "AI Platforms",
                technologies: ["Google AI", "AWS SageMaker", "Azure ML", "IBM Watson", "Vertex AI"]
              },
              {
                category: "Data Processing",
                technologies: ["Pandas", "NumPy", "Apache Spark", "Dask", "Polars"]
              },
              {
                category: "MLOps & Deployment",
                technologies: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "TensorFlow Serving"]
              },
              {
                category: "Vector Databases",
                technologies: ["Pinecone", "Weaviate", "Milvus", "Qdrant", "ChromaDB"]
              },
              {
                category: "AI Frameworks",
                technologies: ["LangChain", "LlamaIndex", "AutoGen", "Haystack", "Rasa"]
              }
            ].map((stack, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#25375d] mb-4 border-b-2 border-[#25375d] pb-2">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, techIdx) => (
                    <li key={techIdx} className="flex items-center text-gray-700">
                      <span className="text-[#25375d] mr-2">✓</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-600 mb-3">
              A <span className="text-[#25375d] font-semibold italic">strong process</span> is key to successful projects.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Process</h2>
            <div className="w-24 h-1 bg-[#25375d] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Discovery and Onboarding",
                description: "Tell us about your plan/problems and get to know the team",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
              },
              {
                number: "2",
                title: "Design and Development",
                description: "Carving and gluing the pieces that will bring your project to life",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80"
              },
              {
                number: "3",
                title: "Test, Review and Launch",
                description: "Functionality, usability, stability and security drills before lift off",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
              },
              {
                number: "4",
                title: "Support and Maintenance",
                description: "Ensuring consistent functionality, usability, stability and security",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="flex justify-center mb-6 relative">
                  <div className="w-32 h-32 rounded-full border-4 border-gray-200 flex items-center justify-center relative overflow-hidden bg-gray-50">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    {idx < 3 && (
                      <div className="absolute left-full top-1/2 w-full h-0.5 bg-gray-200 hidden md:block z-0" />
                    )}
                    <div className="absolute bottom-0 right-0 bg-[#1a2744] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#25375d] text-sm font-semibold mb-3">Industries We Serve</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expertise Across Multiple Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver tailored software solutions for diverse industries, understanding unique challenges and requirements
            </p>
            <div className="w-24 h-1 bg-[#25375d] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Healthcare",
                icon: "🏥",
                description: "AI diagnostics, medical imaging analysis, and predictive patient care"
              },
              {
                name: "Finance & Banking",
                icon: "🏦",
                description: "Fraud detection, algorithmic trading, and risk assessment AI"
              },
              {
                name: "E-Commerce",
                icon: "🛒",
                description: "Recommendation engines, dynamic pricing, and demand forecasting"
              },
              {
                name: "Education",
                icon: "🎓",
                description: "Personalized learning AI and intelligent tutoring systems"
              },
              {
                name: "Manufacturing",
                icon: "🏭",
                description: "Predictive maintenance, quality control, and process optimization"
              },
              {
                name: "Logistics",
                icon: "🚚",
                description: "Route optimization, demand prediction, and warehouse automation"
              },
              {
                name: "Retail",
                icon: "🏬",
                description: "Computer vision checkout, inventory management, and customer analytics"
              },
              {
                name: "Agriculture",
                icon: "🌾",
                description: "Crop monitoring, yield prediction, and precision farming AI"
              }
            ].map((industry, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#25375d] to-[#1a2744] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how we can help you build innovative software solutions that drive growth and efficiency. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#25375d] hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Get Started Today
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-600 mb-3">From The Blog</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Check Out These <span className="italic font-serif text-[#25375d]">Articles</span>
            </h2>
            <div className="w-24 h-1 bg-[#25375d] mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: "15",
                month: "Nov",
                title: "How Machine Learning is Transforming Business Operations",
                excerpt: "Discover how ML algorithms are revolutionizing decision-making, automating complex processes, and delivering unprecedented insights across industries.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
                category: "Machine Learning",
                readTime: "5 min read"
              },
              {
                date: "10",
                month: "Nov",
                title: "Building Intelligent Chatbots: A Complete Guide",
                excerpt: "Learn how to create AI-powered chatbots that understand context, provide personalized responses, and deliver exceptional customer experiences 24/7.",
                image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
                category: "AI Chatbots",
                readTime: "4 min read"
              },
              {
                date: "05",
                month: "Nov",
                title: "Computer Vision Applications in Real-World Business",
                excerpt: "Explore practical applications of computer vision technology from quality control and security to healthcare diagnostics and retail analytics.",
                image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=600&q=80",
                category: "Computer Vision",
                readTime: "6 min read"
              },
              {
                date: "28",
                month: "Oct",
                title: "Natural Language Processing: From Text to Intelligence",
                excerpt: "Understand how NLP enables machines to comprehend human language, extract meaning, and generate human-like responses for business applications.",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
                category: "NLP & AI",
                readTime: "7 min read"
              },
              {
                date: "20",
                month: "Oct",
                title: "Predictive Analytics: Using AI to Forecast Business Trends",
                excerpt: "Learn how predictive models analyze historical data to forecast future outcomes, enabling proactive decision-making and strategic planning.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
                category: "Predictive Analytics",
                readTime: "5 min read"
              },
              {
                date: "12",
                month: "Oct",
                title: "MLOps: Deploying and Managing ML Models in Production",
                excerpt: "Master the practices and tools for deploying, monitoring, and maintaining machine learning models at scale in production environments.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
                category: "MLOps",
                readTime: "8 min read"
              }
            ].map((article, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#25375d] text-white p-3 text-center shadow-lg">
                    <div className="text-2xl font-bold">{article.date}</div>
                    <div className="text-sm">{article.month}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#25375d] px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#25375d] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <button className="text-[#25375d] font-semibold text-sm flex items-center hover:gap-2 transition-all">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#25375d] text-sm font-semibold mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-[#25375d] mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {[
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
              }
            ].map((faq, idx) => (
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
            <Button className="bg-[#25375d] hover:bg-[#1a2744] text-white px-8 py-4">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section id="contact" className="py-20 bg-[#1a2744] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tell Us About Your Project</h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Business/Organization</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="Business/Organization"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">What AI service are you interested in?</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40">
                <option className="bg-[#1a2744]">AI & Machine Learning Solutions</option>
                <option className="bg-[#1a2744]">Intelligent Chatbots & Virtual Assistants</option>
                <option className="bg-[#1a2744]">AI-Powered Analytics & Insights</option>
                <option className="bg-[#1a2744]">Computer Vision & Image Recognition</option>
                <option className="bg-[#1a2744]">Intelligent Process Automation</option>
                <option className="bg-[#1a2744]">Custom AI Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Describe your idea/requirement</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#25375d] hover:bg-[#1a2744] text-white py-6 text-lg font-semibold"
            >
              Submit
            </Button>
          </form>
        </div>

        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">1Dev Software Solutions</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Building innovative software solutions that transform businesses and drive digital success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#process" className="text-white/80 hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#blog" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">AI Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-white/80">Machine Learning Solutions</li>
                <li className="text-white/80">AI Chatbots</li>
                <li className="text-white/80">Computer Vision</li>
                <li className="text-white/80">Process Automation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">📷</span>
                </a>
              </div>
              <div className="mt-4 text-sm">
                <p className="text-white/80">Email: info@1devsoftware.com</p>
                <p className="text-white/80 mt-2">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-sm text-white/60">
              &copy; 2024 1Dev Software Solutions. All rights reserved. |
              <a href="#" className="hover:text-white ml-2">Privacy Policy</a> |
              <a href="#" className="hover:text-white ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
