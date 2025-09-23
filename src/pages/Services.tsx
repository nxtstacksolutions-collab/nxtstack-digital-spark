import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
      price: "Starting at $2,999",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      price: "Starting at $4,999",
      popular: true
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["AWS/Azure/GCP", "DevOps Setup", "CI/CD Pipelines", "Monitoring"],
      price: "Starting at $1,999",
      popular: false
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits and implementation",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Training"],
      price: "Starting at $3,499",
      popular: false
    },
    {
      icon: Zap,
      title: "AI & Automation",
      description: "Intelligent automation and AI-powered solutions",
      features: ["Machine Learning", "Process Automation", "Chatbots", "Data Analytics"],
      price: "Starting at $5,999",
      popular: false
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic technology consulting and digital transformation",
      features: ["Tech Strategy", "Digital Transformation", "Team Training", "Architecture Review"],
      price: "Starting at $199/hour",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your requirements and create a detailed project plan"
    },
    {
      step: "02", 
      title: "Design",
      description: "Our team creates wireframes and prototypes for your approval"
    },
    {
      step: "03",
      title: "Development",
      description: "We build your solution using cutting-edge technologies"
    },
    {
      step: "04",
      title: "Testing",
      description: "Rigorous testing ensures quality and performance"
    },
    {
      step: "05",
      title: "Launch",
      description: "We deploy your solution and provide ongoing support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 animate-bounce-in" style={{animationDelay: "0.2s"}}>
              🚀 Full-Stack Technology Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-up" style={{animationDelay: "0.4s"}}>
              Transform Your Business with
              <span className="block text-accent"> Cutting-Edge Technology</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-in-up" style={{animationDelay: "0.6s"}}>
              From web development to AI solutions, we provide comprehensive technology services
              that drive growth and innovation for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{animationDelay: "0.8s"}}>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="hero-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`service-card animate-scale-in relative ${service.popular ? 'border-primary' : ''}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="hero-text">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.step}
                className="text-center animate-slide-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 animate-pulse-slow">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block mt-8">
                    <ArrowRight className="w-6 h-6 text-primary mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help transform your business with technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="group animate-bounce-in">
                  Get Free Consultation
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default Services;