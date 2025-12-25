import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-4 md:px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="footer-col">
            <div className="text-2xl font-bold gradient-text mb-4">
              TechAgency
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building automated systems that transform businesses. From websites to AI agents, we've got you covered.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@techagency.com" className="hover:text-primary transition-colors">
                  hello@techagency.com
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 group">
                <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-col pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TechAgency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
