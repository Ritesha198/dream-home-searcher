import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">PropertyHub</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. We connect dreams with reality through our comprehensive real estate solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-background hover:text-primary hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-background hover:text-primary hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-background hover:text-primary hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Buy Property
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Rent Property
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Sell Property
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Commercial
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Plot & Land
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Property Valuation
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Home Loans
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Legal Services
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Property Management
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Investment Advisory
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  123 Real Estate Plaza, SG Highway, Ahmedabad, Gujarat 380015
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">info@propertyhub.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 PropertyHub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;