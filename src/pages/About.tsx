import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  Heart,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions"
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Every project receives meticulous attention to detail and rigorous testing"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients as partners in their success journey"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating solutions that make a meaningful difference in the world"
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      expertise: "Full-Stack Development, AI/ML",
      experience: "8+ years",
      description: "Passionate about building scalable solutions that drive business growth"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Cloud Architecture, DevOps",
      experience: "10+ years",
      description: "Expert in designing robust, scalable cloud infrastructure"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      expertise: "React, Node.js, Python",
      experience: "7+ years",
      description: "Specializes in creating performant, user-friendly applications"
    },
    {
      name: "Emma Thompson",
      role: "UI/UX Designer",
      expertise: "Product Design, User Research",
      experience: "6+ years",
      description: "Creates intuitive experiences that users love"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const achievements = [
    "Top 1% React Development Agency",
    "AWS Advanced Consulting Partner",
    "Google Cloud Certified Partner",
    "Microsoft Gold Partner",
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 animate-bounce-in" style={{animationDelay: "0.2s"}}>
              🏆 Award-Winning Technology Team
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-up" style={{animationDelay: "0.4s"}}>
              Building the Future
              <span className="block text-accent">One Solution at a Time</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-in-up" style={{animationDelay: "0.6s"}}>
              We're a passionate team of technologists, designers, and strategists 
              dedicated to helping businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{animationDelay: "0.8s"}}>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="group">
                  Work With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-pulse-slow">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="hero-text">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, NxtStack Solutions began with a simple mission: to bridge the gap 
                  between innovative technology and practical business solutions. What started as a 
                  small team of passionate developers has grown into a full-service technology partner.
                </p>
                <p>
                  Today, we've helped over 150 businesses transform their operations, reach new customers, 
                  and achieve unprecedented growth through strategic technology implementation.
                </p>
                <p>
                  Our approach combines deep technical expertise with a genuine understanding of business 
                  challenges, ensuring every solution we deliver creates real, measurable value.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="hero-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="service-card text-center animate-bounce-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="hero-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Talented professionals passionate about technology and your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="service-card animate-slide-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                  <CardDescription>
                    <div className="text-sm text-primary font-medium mb-1">{member.expertise}</div>
                    <div className="text-xs text-muted-foreground">{member.experience}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our team can help bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="group animate-bounce-in">
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;