import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, Scale, Home as HomeIcon, Gavel, FileText, Briefcase, GraduationCap } from "lucide-react";
import { practiceAreas } from "@shared/workPermits";

interface MegaMenuProps {
  onClose?: () => void;
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const getIcon = (title: string) => {
    switch (title) {
      case "Immigration Law":
        return <Scale className="w-5 h-5" />;
      case "Real Estate Law":
        return <HomeIcon className="w-5 h-5" />;
      case "Criminal Law":
        return <Gavel className="w-5 h-5" />;
      case "Wills & Power of Attorney":
        return <FileText className="w-5 h-5" />;
      case "Work Permits":
        return <Briefcase className="w-5 h-5" />;
      case "Study":
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Scale className="w-5 h-5" />;
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="mega-menu-practice-areas"
    >
      <button
        className="flex items-center space-x-1 px-3 py-2 text-foreground hover:text-primary transition-colors"
        data-testid="mega-menu-trigger"
      >
        <span>Practice Areas</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-screen max-w-5xl z-50 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-xl"
             data-testid="mega-menu-dropdown">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {practiceAreas.map((area) => (
              <div key={area.title} className="space-y-3">
                <Link
                  href={area.href}
                  className="flex items-center space-x-3 group bg-secondary/40 hover:bg-secondary hover:shadow-sm p-4 rounded-lg transition-all duration-200 border border-border/20 hover:border-border/40"
                  onClick={handleLinkClick}
                  data-testid={`mega-menu-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-primary dark:text-primary">
                    {getIcon(area.title)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {area.description}
                    </p>
                  </div>
                </Link>

              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="border-t border-border bg-secondary/50 p-6 rounded-b-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">
                  Need Legal Consultation?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Get professional legal advice tailored to your specific situation.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md font-medium transition-all duration-200 hover:shadow-sm whitespace-nowrap"
                onClick={handleLinkClick}
                data-testid="mega-menu-cta-contact"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Mobile version for accordion-style navigation
export function MobilePracticeAreasMenu({ onClose }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = (title: string) => {
    switch (title) {
      case "Immigration Law":
        return <Scale className="w-5 h-5" />;
      case "Real Estate Law":
        return <HomeIcon className="w-5 h-5" />;
      case "Criminal Law":
        return <Gavel className="w-5 h-5" />;
      case "Wills & Power of Attorney":
        return <FileText className="w-5 h-5" />;
      case "Work Permits":
        return <Briefcase className="w-5 h-5" />;
      case "Study":
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Scale className="w-5 h-5" />;
    }
  };

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div className="border-b border-border dark:border-border" data-testid="mobile-practice-areas-menu">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left hover:bg-secondary/50 dark:hover:bg-secondary/50"
        data-testid="mobile-mega-menu-trigger"
      >
        <span className="font-medium">Practice Areas</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="bg-secondary/20" data-testid="mobile-mega-menu-content">
          {practiceAreas.map((area) => (
            <div key={area.title} className="border-b border-border/30 last:border-b-0">
              <Link
                href={area.href}
                className="flex items-center space-x-3 p-4 bg-background/40 hover:bg-secondary/60 transition-colors duration-200 m-2 rounded-lg border border-border/20 hover:border-border/40"
                onClick={handleLinkClick}
                data-testid={`mobile-mega-menu-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-primary dark:text-primary">
                  {getIcon(area.title)}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground">
                    {area.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {area.description}
                  </div>
                </div>
              </Link>

            </div>
          ))}

          {/* Mobile CTA */}
          <div className="p-4 bg-secondary/30 m-2 rounded-lg border border-border/20">
            <Link
              href="/contact"
              className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center px-6 py-3 rounded-md font-medium transition-all duration-200 hover:shadow-sm"
              onClick={handleLinkClick}
              data-testid="mobile-mega-menu-cta-contact"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}