'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MessageSquare, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-white/20 text-white border-0 px-6 py-2 text-sm font-semibold">
            Ready to Transform?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Build the Future
            <br />
            <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Ready to accelerate your digital transformation? Our experts are standing by to help you unlock your organization's full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Schedule a Call</h3>
            <p className="text-blue-100 text-sm">Book a free consultation with our experts</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Live Chat</h3>
            <p className="text-blue-100 text-sm">Get instant answers to your questions</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Call Us</h3>
            <p className="text-blue-100 text-sm">Speak directly with our solution architects</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email Us</h3>
            <p className="text-blue-100 text-sm">Send us your requirements and timeline</p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 mr-4">
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
          >
            View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
