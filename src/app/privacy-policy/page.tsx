import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | 1Dev.AI - AI-Powered Software Solutions",
  description: "Privacy Policy for 1Dev.AI Software Solutions. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#25375d] to-[#1a2744] text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-white/80 text-lg mt-4">
            Your privacy matters to us. This policy explains how we handle your information.
          </p>
          <p className="text-white/60 mt-4 text-sm">
            Effective date: February 4, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                What This Policy Covers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy explains how 1Dev.AI Software Solutions ("we," "us," "our") collects, uses, shares, and protects information when you visit our website at 1Dev.AI ("Site") or contact us for quotes, consultations, project inquiries, or resources such as downloadable AI guides, whitepapers, or case studies.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may collect the following categories of information:
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">A. Information You Provide</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Contact details (such as name, email, phone number, company name, job title) when you request a quote, consultation, or contact us through our forms.</li>
                <li>Project details you submit (messages, technical requirements, preferred timelines, budget ranges, AI/ML service interests, technology stack preferences).</li>
                <li>Newsletter subscription information when you sign up for our AI insights and updates.</li>
                <li>Project estimation form data including industry sector, project scope, and feature requirements.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">B. Information Collected Automatically</h3>
              <p className="text-gray-700 mb-3">When you use the Site, we (and our service providers) may automatically collect:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Device and usage data (IP address, browser type, pages viewed, approximate location inferred from IP, date/time, referring URLs).</li>
                <li>Cookies and similar technologies (see Section 6).</li>
                <li>Interaction data with our AI chatbot or virtual assistants if implemented on the Site.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">C. Downloads & Resources</h3>
              <p className="text-gray-700 leading-relaxed">
                If you request or download resources (for example, AI implementation guides, machine learning whitepapers, case studies, or technical documentation), we may collect information associated with that request and basic usage data related to the download.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use information for purposes such as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li><strong>Providing quotes and services:</strong> Responding to inquiries, scheduling consultations, preparing project estimates, delivering AI and software development services.</li>
                <li><strong>Customer support:</strong> Answering questions, coordinating projects, providing technical support for delivered solutions.</li>
                <li><strong>Improving the Site:</strong> Analytics, troubleshooting, performance optimization, enhancing user experience.</li>
                <li><strong>Marketing and communications:</strong> Sending follow-ups, newsletters, AI industry insights, promotional content, or service updates where permitted (see Section 7).</li>
                <li><strong>Security and fraud prevention:</strong> Protecting our Site, users, intellectual property, and business operations.</li>
                <li><strong>Legal compliance:</strong> Enforcing terms, complying with applicable laws and regulations.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                How We Share Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell or rent your personal information. We may share information in these situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li><strong>Service providers:</strong> Vendors that help operate our Site and business (hosting, website platform tools, analytics, communications, CRM, scheduling, forms, cloud infrastructure, or similar). They may access information only to perform services for us.</li>
                <li><strong>Business transfers:</strong> If we're involved in a merger, acquisition, financing, or sale of assets, information may be transferred as part of that transaction.</li>
                <li><strong>Legal and safety:</strong> To comply with law, respond to lawful requests, protect rights/safety, investigate fraud, or enforce agreements.</li>
                <li><strong>With your direction:</strong> If you ask us to share information with third parties (e.g., coordinating with your IT team, other contractors, or technology partners).</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">5</span>
                Sensitive Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Please do not submit sensitive personal information through the Site (e.g., government ID numbers, payment card details, medical information, proprietary algorithms, or confidential source code). If a payment is needed for our services, we will inform you of the accepted payment method and any payment processor involved. For projects involving confidential data, we establish appropriate NDAs and data protection agreements separately.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">6</span>
                Cookies & Analytics
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We (and our providers) may use cookies, pixels, and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Remember your preferences and settings.</li>
                <li>Understand Site traffic and performance.</li>
                <li>Measure marketing effectiveness.</li>
                <li>Personalize your experience based on your interests.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 text-sm">
                  <strong>Your choices:</strong> You can control cookies through your browser settings. If you disable cookies, some features may not work properly. You may also opt out of certain analytics and advertising cookies through industry opt-out tools.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">7</span>
                Marketing Choices
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You can opt out of promotional emails by using the unsubscribe link included in our emails or by contacting us at <a href="mailto:info@1devsoftware.com" className="text-[#25375d] hover:underline font-medium">info@1devsoftware.com</a>. Note: Even if you opt out of marketing communications, we may still send non-promotional messages (e.g., project updates, quote follow-ups, or communications related to services you've requested).
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">8</span>
                Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain personal information only as long as reasonably necessary for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Providing services and ongoing support.</li>
                <li>Maintaining business records and project documentation.</li>
                <li>Complying with legal and regulatory obligations.</li>
                <li>Resolving disputes and enforcing our agreements.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Retention periods vary depending on the type of information and purpose for which we collected it. Upon request, we can provide more specific information about retention periods for particular categories of data.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">9</span>
                Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use reasonable administrative, technical, and physical safeguards designed to protect information. This includes encryption, secure data storage, access controls, and regular security assessments. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security of your data.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">10</span>
                Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site and services are not intended for children under 13 years of age, and we do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information promptly.
              </p>
            </div>

            {/* Section 11 - California Notice */}
            <div className="mb-12 p-8 bg-gradient-to-br from-[#25375d]/5 to-[#25375d]/10 rounded-xl border border-[#25375d]/20">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">11</span>
                California Privacy Notice (CCPA/CPRA)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a California resident, you may have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Right to know/access:</strong> The categories and specific pieces of personal information collected about you.</li>
                <li><strong>Right to delete:</strong> Personal information we hold about you (subject to certain exceptions).</li>
                <li><strong>Right to correct:</strong> Inaccurate personal information we maintain about you.</li>
                <li><strong>Right to opt out:</strong> Of "sale" or "sharing" of personal information (as those terms are defined under California law).</li>
                <li><strong>Right to non-discrimination:</strong> For exercising your privacy rights.</li>
              </ul>
              <div className="bg-white p-4 rounded-lg border border-[#25375d]/20">
                <p className="text-gray-800 font-medium mb-2">Do we sell or share personal information?</p>
                <p className="text-gray-700">
                  We do not sell personal information, and we do not share personal information for cross-context behavioral advertising as defined under California law.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">12</span>
                Links to Other Websites
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site may contain links to third-party websites, including technology partners, cloud service providers, or industry resources. We are not responsible for the privacy practices, content, or security of those third-party sites. We encourage you to review the privacy policies of any external sites you visit.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25375d] mb-4 flex items-center">
                <span className="w-8 h-8 bg-[#25375d] text-white rounded-full flex items-center justify-center text-sm mr-3">13</span>
                Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will revise the "Effective date" at the top of this policy and may provide additional notice through our Site or via email if required by law.
              </p>
            </div>

            {/* Section 14 - Contact */}
            <div className="mb-12 p-8 bg-gradient-to-r from-[#25375d] to-[#1a2744] rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-white text-[#25375d] rounded-full flex items-center justify-center text-sm mr-3">14</span>
                Contact Us
              </h2>
              <p className="text-white/90 leading-relaxed mb-6">
                For questions, concerns, or requests about privacy and your personal information, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@1devsoftware.com" className="text-white/80 hover:text-white transition-colors">
                      info@1devsoftware.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-[#25375d] hover:bg-[#1a2744] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2744] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">1Dev.AI Software Solutions</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Building innovative AI-powered software solutions that transform businesses and drive digital success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/#process" className="text-white/80 hover:text-white transition-colors">Our Process</Link></li>
                <li><Link href="/#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
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
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>Email: info@1devsoftware.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} 1Dev.AI Software Solutions. All rights reserved. |
              <Link href="/privacy-policy" className="hover:text-white ml-2">Privacy Policy</Link> |
              <Link href="/terms-of-service" className="hover:text-white ml-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
