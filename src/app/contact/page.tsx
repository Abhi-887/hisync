"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Building2, 
  Globe, 
  Users, 
  Calendar,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 (120) 555-0123"],
      subtitle: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@hisync.in"],
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["A708, Sector 132, Noida", "Uttar Pradesh 201304"],
      subtitle: "Visit us during business hours"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM EST", "Saturday - Sunday: Closed"],
      subtitle: "EST (Eastern Standard Time)"
    },
  ];

  const services = [
    "ERP Implementation",
    "Process Automation",
    "Business Consulting",
    "Digital Transformation",
    "System Integration",
    "Training & Support",
    "Custom Development",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden flex items-center justify-center px-4">
          {/* Premium Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:32px_32px]"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="text-center max-w-md mx-auto animate-fade-in-scale relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
            <p className="text-slate-600 mb-8">
              Your message has been sent successfully. Our team will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 transition-transform duration-200 shadow-xl"
            >
              Send Another Message
            </Button>
          </div>
        </div>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.05),transparent_50%)]"></div>
        
        {/* Corporate Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:60px_60px]"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Professional Accent Elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-indigo-500/15 rounded-full animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-blue-400/20 rounded-full animate-pulse animation-delay-400"></div>
        
        {/* Corporate Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/30 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-200/20 to-transparent"></div>
        
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200/50 text-blue-700 text-sm font-semibold mb-6 shadow-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Enterprise Contact
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Let's Build Something
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Amazing</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business? Our enterprise solutions team is here to help you achieve your goals with cutting-edge technology and expert guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-delay-200">
              <Card className="p-8 shadow-xl border-0 bg-white/70 backdrop-blur-xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Get In Touch</h2>
                  <p className="text-slate-600">Tell us about your project and we'll get back to you soon.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <div className="hover:scale-105 transition-transform duration-200">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-delay-400">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`animate-fade-in-delay-${(index + 1) * 100}`}
                >
                  <Card className="p-6 shadow-lg border-0 bg-white/60 backdrop-blur-xl hover:bg-white/80 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-slate-700 font-medium mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-slate-500 mt-2">{info.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}

              {/* Quick Actions */}
              <div className="space-y-4 animate-fade-in-delay-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h3>
                
                <div className="hover:scale-105 transition-transform duration-200">
                  <Button
                    variant="outline"
                    className="w-full justify-between text-left h-auto p-4 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Schedule a Call</div>
                        <div className="text-sm text-slate-500">Book a 30-minute consultation</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </Button>
                </div>

                <div className="hover:scale-105 transition-transform duration-200">
                  <Button
                    variant="outline"
                    className="w-full justify-between text-left h-auto p-4 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Live Chat Support</div>
                        <div className="text-sm text-slate-500">Get instant help from our team</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </Button>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-4">Follow Us</h4>
                  <div className="flex space-x-3">
                    {[
                      { icon: <Linkedin className="w-5 h-5" />, color: "hover:bg-blue-600" },
                      { icon: <Twitter className="w-5 h-5" />, color: "hover:bg-sky-500" },
                      { icon: <Facebook className="w-5 h-5" />, color: "hover:bg-blue-700" }
                    ].map((social, index) => (
                      <button
                        key={index}
                        className={`w-10 h-10 bg-slate-100 hover:text-white ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110`}
                      >
                        {social.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Located in Noida, Sector 132, our office is easily accessible and equipped with modern facilities for client meetings.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-96 rounded-2xl flex items-center justify-center animate-fade-in-delay-200">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-slate-500 text-sm">A708, Sector 132, Noida, Uttar Pradesh 201304</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      <FooterSection />
    </>
  );
}
