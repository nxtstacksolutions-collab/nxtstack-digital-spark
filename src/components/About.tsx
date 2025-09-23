import { Button } from "@/components/ui/button-variants";
import { Users, Target, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We focus on turning your ideas into real, meaningful outcomes that drive business success."
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our success. We collaborate closely to understand and exceed your expectations."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest standards in everything we deliver, ensuring excellence in every project."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                About <span className="hero-text">NxtStack Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are a dynamic startup dedicated to solving business challenges with creative, 
                cost-effective solutions and high-quality deliverables. Our team of experienced 
                developers and designers works tirelessly to bring your vision to life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence ensures we earn your trust and collaborate effectively 
                to achieve success. We believe in building long-term partnerships that drive 
                continuous growth and innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6 animate-slide-up">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="flex items-start space-x-4 p-6 rounded-xl bg-card border border-border/50 service-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold hero-text mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold hero-text mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold hero-text mb-2">25+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold hero-text mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;