import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import nxtStackLogo from "@/assets/nxtstack-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@nxtstacksolutions.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={nxtStackLogo} 
                alt="NxtStack Solutions Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold hero-text">NxtStack Solutions</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Innovative solutions and trusted partnerships. We solve business challenges 
              with creative, cost-effective solutions and high-quality deliverables.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>hello@nxtstacksolutions.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Remote & Global</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} NxtStack Solutions. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 text-primary mx-1" /> by NxtStack Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;