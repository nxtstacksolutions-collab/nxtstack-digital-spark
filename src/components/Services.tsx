import { Code, Smartphone, Globe, Database, Palette, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
      features: ["React & Next.js", "Node.js & Python", "Custom APIs"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      features: ["React Native", "Flutter", "iOS & Android"]
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Modern, responsive websites and web applications that drive engagement and business growth.",
      features: ["Responsive Design", "E-commerce", "CMS Integration"]
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Robust backend systems and RESTful APIs that power your applications with reliability and scale.",
      features: ["Database Design", "API Development", "Cloud Integration"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and reflect your brand identity.",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user satisfaction with our optimization expertise.",
      features: ["Code Optimization", "Performance Audits", "SEO Enhancement"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-primary-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="hero-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card bg-card p-8 rounded-xl border border-border/50 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;