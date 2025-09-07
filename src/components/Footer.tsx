import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Real Estate Projects", href: "#projects" },
    { name: "IT Services", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Contact Us", href: "#contact" },
    { name: "Career", href: "#" }
  ];

  const services = [
    { name: "Residential Colonies", href: "#" },
    { name: "Commercial Projects", href: "#" },
    { name: "Plot Development", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "Software Solutions", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "RERA Compliance", href: "#" },
    { name: "Refund Policy", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Kolonizer</h3>
                <p className="text-primary-foreground/80">Real Business Solutions</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 leading-relaxed max-w-md">
              Leading real estate developer and IT solutions provider in Madhya Pradesh. 
              We create premium residential colonies and cutting-edge technology solutions 
              that transform businesses.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/90">Bhopal, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/90">+91 755 490 2000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/90">contact@kolonizer.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-secondary">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-secondary">Our Services</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-secondary">Stay Updated</h4>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to our newsletter for the latest updates on projects and services.
            </p>
            
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full group">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>✓ Project Updates</p>
              <p>✓ Technology Insights</p>
              <p>✓ Market Trends</p>
              <p>✓ Exclusive Offers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links & Copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-secondary text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-primary-foreground/70 text-sm">
              <span>© 2024 Kolonizer Real Business Solutions. Made with</span>
              <Heart className="w-4 h-4 text-secondary fill-current" />
              <span>in India. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications/Badges */}
      <div className="bg-primary-dark py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/60 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>RERA Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>NASSCOM Member</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>15+ Years Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;