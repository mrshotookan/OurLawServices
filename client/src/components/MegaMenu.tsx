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
        <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl z-50 bg-white dark:bg-black border border-border dark:border-border rounded-lg shadow-xl"
             data-testid="mega-menu-dropdown">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {practiceAreas.map((area) => (
              <div key={area.title} className="space-y-3">
                <Link
                  href={area.href}
                  className="flex items-center space-x-3 group hover:bg-secondary/50 dark:hover:bg-secondary/50 p-3 rounded-lg transition-colors"
                  onClick={handleLinkClick}
                  data-testid={`mega-menu-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-primary dark:text-primary">
                    {getIcon(area.title)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary dark:text-primary group-hover:text-accent dark:group-hover:text-accent">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </Link>

                {area.subItems && (
                  <div className="ml-8 space-y-2">
                    {area.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-primary dark:hover:text-primary hover:bg-secondary/30 dark:hover:bg-secondary/30 rounded transition-colors"
                        onClick={handleLinkClick}
                        data-testid={`mega-menu-${subItem.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="border-t border-border dark:border-border bg-secondary/30 dark:bg-secondary/30 p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-primary dark:text-primary mb-1">
                  Need Legal Consultation?
                </h4>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                  Get expert legal advice tailored to your specific situation.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-primary dark:bg-primary hover:bg-accent dark:hover:bg-accent text-white dark:text-white px-6 py-2 rounded-lg font-semibold transition-colors"
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
        <div className="bg-secondary/30 dark:bg-secondary/30" data-testid="mobile-mega-menu-content">
          {practiceAreas.map((area) => (
            <div key={area.title} className="border-b border-border/50 dark:border-border/50 last:border-b-0">
              <Link
                href={area.href}
                className="flex items-center space-x-3 p-4 hover:bg-secondary/50 dark:hover:bg-secondary/50"
                onClick={handleLinkClick}
                data-testid={`mobile-mega-menu-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-primary dark:text-primary">
                  {getIcon(area.title)}
                </div>
                <div>
                  <div className="font-medium text-primary dark:text-primary">
                    {area.title}
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground">
                    {area.description}
                  </div>
                </div>
              </Link>

              {area.subItems && (
                <div className="bg-background/50 dark:bg-background/50">
                  {area.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-12 py-3 text-sm text-muted-foreground dark:text-muted-foreground hover:text-primary dark:hover:text-primary hover:bg-secondary/30 dark:hover:bg-secondary/30"
                      onClick={handleLinkClick}
                      data-testid={`mobile-mega-menu-${subItem.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="p-4">
            <Link
              href="/contact"
              className="block w-full bg-primary dark:bg-primary hover:bg-accent dark:hover:bg-accent text-white dark:text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
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