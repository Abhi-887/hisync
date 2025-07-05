'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Enterprise Clients",
      description: "Trusted by Fortune 500 companies worldwide"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "15+",
      label: "Years Experience",
      description: "Proven track record in digital transformation"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "50+",
      label: "Countries",
      description: "Global presence with local expertise"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "98%",
      label: "Success Rate",
      description: "Consistent delivery of exceptional results"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      expertise: "Cloud Architecture & AI",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      expertise: "Full-Stack Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Strategy",
      expertise: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Senior Solutions Architect",
      expertise: "Enterprise Integration",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-200">
            About HiSync
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Powering Digital Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just a technology company – we're your strategic partner in digital transformation, 
            combining deep technical expertise with business acumen to drive meaningful change.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.label}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Meet Our Leadership Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-blue-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation. We believe in creating lasting partnerships that transform 
              not just technology, but entire business ecosystems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
