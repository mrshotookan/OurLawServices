import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import MegaMenu, { MobilePracticeAreasMenu } from "./MegaMenu";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-sticky shadow-lg" : "bg-transparent"
      }`}
      data-testid="main-navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <h1 className="text-2xl font-serif font-bold text-primary">
              OurLawServices
            </h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-accent ${
                  location === item.href ? "text-accent" : "text-foreground"
                }`}
                data-testid={`nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
            <MegaMenu />
            <Button 
              asChild 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              data-testid="book-consultation-button"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border dark:border-border">
            <div className="flex flex-col space-y-0 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors hover:text-accent p-4 block ${
                    location === item.href ? "text-accent" : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Link>
              ))}
              <MobilePracticeAreasMenu onClose={() => setIsMobileMenuOpen(false)} />
              <div className="p-4">
                <Button 
                  asChild 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                  data-testid="mobile-book-consultation-button"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
