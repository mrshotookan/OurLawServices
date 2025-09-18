import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              OurLawServices
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Providing expert legal representation and comprehensive legal services 
              to individuals and businesses across Canada.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors"
                data-testid="social-facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors"
                data-testid="social-twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/practice-areas" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-link-practice-areas"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-link-blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/immigration-law" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-link-immigration"
                >
                  Immigration Law
                </Link>
              </li>
              <li>
                <Link 
                  href="/real-estate-law" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-link-real-estate"
                >
                  Real Estate Law
                </Link>
              </li>
              <li>
                <Link 
                  href="/wills-power-of-attorney" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-link-wills"
                >
                  Wills & Power of Attorney
                </Link>
              </li>
              <li>
                <Link 
                  href="/criminal-law" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-link-criminal"
                >
                  Criminal Law
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-accent mt-1 mr-3" size={16} />
                <div className="text-muted-foreground" data-testid="footer-address">
                  123 Legal District<br/>
                  Toronto, ON M5H 2N2<br/>
                  Canada
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-accent mr-3" size={16} />
                <a 
                  href="tel:+15555555555" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-phone"
                >
                  (555) LAW-FIRM
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-accent mr-3" size={16} />
                <a 
                  href="mailto:info@ourlawservices.com" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  data-testid="footer-email"
                >
                  info@ourlawservices.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold text-primary mb-4">Find Us</h4>
          <div className="bg-muted rounded-xl overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.824049111947!2d-79.38318068450231!3d43.64751637912173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2s123%20Front%20St%20W%2C%20Toronto%2C%20ON%20M5J%202M2%2C%20Canada!5e0!3m2!1sen!2sus!4v1635959715982!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="google-maps-embed"
            />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground" data-testid="copyright">
            © 2024 OurLawServices. All rights reserved. | 
            <a href="#" className="hover:text-accent transition-colors ml-1 mr-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-accent transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
