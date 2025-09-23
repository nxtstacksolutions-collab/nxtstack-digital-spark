import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  ArrowRight,
  Star,
  Calendar,
  Users,
  Code,
  Smartphone,
  Globe,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Complete e-commerce solution with advanced analytics and inventory management",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: ["Real-time Analytics", "Payment Integration", "Inventory Management", "Mobile Responsive"],
      client: "RetailCorp",
      duration: "4 months",
      team: "5 developers",
      results: ["300% increase in online sales", "50% reduction in cart abandonment", "99.9% uptime"],
      featured: true
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development", 
      description: "HIPAA-compliant mobile application for patient management and telemedicine",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      features: ["Video Consultations", "Appointment Scheduling", "Medical Records", "Push Notifications"],
      client: "MedTech Solutions",
      duration: "6 months",
      team: "4 developers",
      results: ["10,000+ active users", "95% user satisfaction", "HIPAA compliant"],
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Machine Learning",
      description: "Intelligent business intelligence platform with predictive analytics",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      features: ["Predictive Analytics", "Real-time Dashboards", "ML Models", "Data Visualization"],
      client: "DataCorp Analytics",
      duration: "8 months",
      team: "6 specialists",
      results: ["40% improvement in forecasting accuracy", "Real-time insights", "Automated reporting"],
      featured: true
    },
    {
      title: "FinTech Trading Platform",
      category: "Web Development",
      description: "High-frequency trading platform with real-time market data",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "WebSocket", "Redis", "MySQL"],
      features: ["Real-time Trading", "Market Data", "Portfolio Management", "Risk Analytics"],
      client: "TradePro Financial",
      duration: "10 months",
      team: "8 developers",
      results: ["Millisecond latency", "$50M+ daily volume", "99.99% uptime"],
      featured: false
    },
    {
      title: "Cloud Migration Solution",
      category: "Cloud Solutions",
      description: "Complete migration of legacy systems to AWS cloud infrastructure",
      image: "/api/placeholder/600/400",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      features: ["Auto Scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening"],
      client: "Enterprise Solutions Inc",
      duration: "12 months",
      team: "10 engineers",
      results: ["60% cost reduction", "99.9% availability", "Zero downtime migration"],
      featured: false
    },
    {
      title: "EdTech Learning Platform",
      category: "Web Development",
      description: "Interactive online learning platform with video streaming and assessments",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      features: ["Video Streaming", "Interactive Quizzes", "Progress Tracking", "Certificates"],
      client: "EduLearn Academy",
      duration: "5 months",
      team: "6 developers",
      results: ["50,000+ students", "85% course completion rate", "Mobile-first design"],
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "AI & Machine Learning", "Cloud Solutions"];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development": return Globe;
      case "Mobile Development": return Smartphone;
      case "AI & Machine Learning": return Zap;
      case "Cloud Solutions": return Code;
      default: return Code;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 animate-bounce-in" style={{animationDelay: "0.2s"}}>
              💼 Our Success Stories
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-up" style={{animationDelay: "0.4s"}}>
              Portfolio of
              <span className="block text-accent">Outstanding Projects</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-in-up" style={{animationDelay: "0.6s"}}>
              Explore our collection of successful projects that have transformed businesses
              and delivered exceptional results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{animationDelay: "0.8s"}}>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                  View Services
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

      {/* Filter Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category) => (
              <Button 
                key={category}
                variant="outline" 
                className="rounded-full hover:bg-primary hover:text-white transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="hero-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our most impactful projects that showcase our expertise and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card 
                key={project.title}
                className="service-card group overflow-hidden animate-scale-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        {getCategoryIcon(project.category)({ className: "w-8 h-8 text-primary" })}
                      </div>
                      <Badge className="bg-primary/10 text-primary">{project.category}</Badge>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-white">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.team}
                      </div>
                    </div>

                    <div className="pt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 group">
                        View Details
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gradient-to-b from-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              All <span className="hero-text">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card 
                key={project.title}
                className="service-card group animate-slide-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {getCategoryIcon(project.category)({ className: "w-6 h-6 text-primary" })}
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="mt-1">{project.category}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        {project.client} • {project.duration}
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        View
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help you achieve similar outstanding results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="group animate-bounce-in">
                  Start Your Project
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

export default Portfolio;