import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ServicesPage() {
  const services = [
    {
      title: "Vulnerability/Security Scanning",
      image: "https://ext.same-assets.com/766399910/3491427519.webp",
      description: "We offer website security vulnerability scanning and monitoring. We use the latest technology to scan and assess your website for any possible known vulnerabilities and threats and apply solution(s).",
      link: "#"
    },
    {
      title: "WordPress Management",
      image: "https://ext.same-assets.com/766399910/640805685.webp",
      description: "We are your one-stop solution partner for your WordPress website. From design to development, conversion, theme customization, backup, and general maintenance.",
      link: "#"
    },
    {
      title: "End-to-End CRM Development",
      image: "https://ext.same-assets.com/766399910/4163960411.webp",
      description: "We are experts in end to end customized development, implementation, migration and support of custom and scalable Customer Relationship Management (CRM) solutions.",
      link: "#"
    },
    {
      title: "Application Development",
      image: "https://ext.same-assets.com/766399910/1291460815.webp",
      description: "Our App team includes: qualified UX designers, visual designers and software engineers with deep expertise in cross-platform web and mobile development technologies for the modern business.",
      link: "#"
    }
  ];

  const projects = [
    {
      title: "DaMeKi Web Services",
      category: "WordPress Website",
      image: "https://ext.same-assets.com/766399910/689830134.png"
    },
    {
      title: "YouCubeApps",
      category: "CRM, WordPress Website",
      image: "https://ext.same-assets.com/766399910/2786776568.png"
    },
    {
      title: "Cenedex Software Solutions",
      category: "WordPress Website",
      image: "https://ext.same-assets.com/766399910/689830134.png"
    },
    {
      title: "Chaingapp",
      category: "Mobile App, Web App, WordPress",
      image: "https://ext.same-assets.com/766399910/689830134.png"
    },
    {
      title: "climbUnity",
      category: "Mobile App, WordPress",
      image: "https://ext.same-assets.com/766399910/689830134.png"
    },
    {
      title: "CaseTrack",
      category: "CRM, Mobile App, Web App",
      image: "https://ext.same-assets.com/766399910/689830134.png"
    }
  ];

  const articles = [
    {
      date: "01",
      month: "Jun",
      title: "Features & Benefits of CRM Software (Customers & Business Advantages)",
      image: "https://ext.same-assets.com/766399910/1549095885.png"
    },
    {
      date: "01",
      month: "Jun",
      title: "5 reasons your business needs a mobile app",
      image: "https://ext.same-assets.com/766399910/3567399816.png"
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
          src="https://ext.same-assets.com/766399910/3179901076.webp"
          alt="Our Services"
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* Tagline Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <p className="text-sm text-[#224163] font-semibold mb-4">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          We work passionately to integrate information, design, and technology to
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
                  className="text-[#224163] font-semibold hover:text-[#3a5f85] transition-colors inline-flex items-center gap-2"
                >
                  Read More
                  <span className="text-xl">→</span>
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

      {/* Articles Section */}
      <section className="bg-gradient-to-r from-[#224163] to-[#3a5f85] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <span className="italic">Grow Your Business:</span> Articles, Insights and Guides
            </h2>
            <div className="h-1 w-12 bg-white mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#224163] text-white px-4 py-2 text-center">
                      <div className="text-2xl font-bold">{article.date}</div>
                      <div className="text-sm">{article.month}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tell Us About Your Project</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Business/Organization</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">What service are you interested in?</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#224163]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#224163] text-white py-4 px-6 rounded-md font-semibold hover:bg-[#3a5f85] transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
