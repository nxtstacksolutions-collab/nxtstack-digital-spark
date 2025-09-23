import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageSquare,
  Calendar,
  CheckCircle,
  ArrowRight,
  Globe,
  Linkedin,
  Twitter
} from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@nxtstacksolutions.com",
      link: "mailto:hello@nxtstacksolutions.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Remote & Global",
      link: "#",
      description: "We work with clients worldwide"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri 9AM-6PM EST", 
      link: "#",
      description: "Available for urgent matters 24/7"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Globe, name: "Website", href: "#" }
  ];

  const services = [
    "Web Development",
    "Mobile Development", 
    "Cloud Solutions",
    "AI & Machine Learning",
    "Cybersecurity",
    "Consulting"
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most projects range from 2-6 months."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages."
    },
    {
      question: "What's your development process?",
      answer: "We follow an agile methodology with regular client feedback and iterative development."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We can seamlessly integrate with your existing development team."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 animate-bounce-in" style={{animationDelay: "0.2s"}}>
              💬 Let's Talk
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-up" style={{animationDelay: "0.4s"}}>
              Ready to Start
              <span className="block text-accent">Your Next Project?</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-in-up" style={{animationDelay: "0.6s"}}>
              Get in touch with our team of experts. We'd love to hear about your project
              and discuss how we can help bring your vision to life.
            </p>
            <div className="animate-slide-in-up" style={{animationDelay: "0.8s"}}>
              <Button variant="secondary" size="lg" className="group">
                Schedule Free Consultation
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
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

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="service-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Send us a message</CardTitle>
                      <CardDescription>We'll get back to you within 24 hours</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input 
                          id="name" 
                          placeholder="John Doe" 
                          required 
                          className="animate-fade-in"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@company.com" 
                          required 
                          className="animate-fade-in"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <Input 
                          id="company" 
                          placeholder="Your Company" 
                          className="animate-fade-in"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Project Budget
                        </label>
                        <select className="w-full p-3 border border-border rounded-md bg-background animate-fade-in">
                          <option value="">Select budget range</option>
                          <option value="5k-10k">$5K - $10K</option>
                          <option value="10k-25k">$10K - $25K</option>
                          <option value="25k-50k">$25K - $50K</option>
                          <option value="50k+">$50K+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="services" className="block text-sm font-medium mb-2">
                        Services Interested In
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service) => (
                          <label key={service} className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-border" />
                            <span className="text-sm">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..." 
                        rows={6}
                        required 
                        className="animate-fade-in"
                      />
                    </div>

                    <Button variant="hero" size="lg" type="submit" className="w-full group animate-bounce-in">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Ready to transform your business with cutting-edge technology? 
                  We're here to help you succeed. Choose the best way to reach us:
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="service-card group cursor-pointer animate-scale-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {info.title}
                          </h4>
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors font-medium"
                          >
                            {info.details}
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            {info.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors group"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="pt-8">
                <h4 className="font-semibold mb-4">Why Choose NxtStack Solutions?</h4>
                <ul className="space-y-3">
                  {[
                    "Free consultation and project estimation",
                    "Agile development with regular updates", 
                    "Post-launch support and maintenance",
                    "Competitive pricing with no hidden costs",
                    "Expert team with 5+ years experience",
                    "100% satisfaction guarantee"
                  ].map((item, index) => (
                    <li 
                      key={item}
                      className="flex items-center animate-slide-in-left"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked <span className="hero-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card 
                key={faq.question}
                className="mb-4 service-card animate-slide-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Urgent Support?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              For existing clients with urgent technical issues, we're available 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group animate-bounce-in">
                Emergency Hotline: +1 (555) 999-HELP
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;