import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Briefcase, GraduationCap, Plane, Building, Scale } from "lucide-react";
import { workPermitsNav, studyNav, visitNav, businessNav, practiceAreas } from "@shared/workPermits";

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
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const [workPermitsOpen, setWorkPermitsOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);
  const [visitOpen, setVisitOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);
  
  // Timeout refs for delayed closing
  const workPermitsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const studyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const visitTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const businessTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const practiceAreasTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (workPermitsTimeoutRef.current) clearTimeout(workPermitsTimeoutRef.current);
      if (studyTimeoutRef.current) clearTimeout(studyTimeoutRef.current);
      if (visitTimeoutRef.current) clearTimeout(visitTimeoutRef.current);
      if (businessTimeoutRef.current) clearTimeout(businessTimeoutRef.current);
      if (practiceAreasTimeoutRef.current) clearTimeout(practiceAreasTimeoutRef.current);
    };
  }, []);
  const [workPermitsMobileOpen, setWorkPermitsMobileOpen] = useState(false);
  const [studyMobileOpen, setStudyMobileOpen] = useState(false);
  const [visitMobileOpen, setVisitMobileOpen] = useState(false);
  const [businessMobileOpen, setBusinessMobileOpen] = useState(false);
  const [practiceAreasMobileOpen, setPracticeAreasMobileOpen] = useState(false);

  const WorkPermitsDropdown = ({ isMobile = false }) => {
    const isOpen = isMobile ? workPermitsMobileOpen : workPermitsOpen;
    const setIsOpen = isMobile ? setWorkPermitsMobileOpen : setWorkPermitsOpen;
    
    const handleLinkClick = () => {
      setIsOpen(false);
      if (isMobile) setIsMobileMenuOpen(false);
    };

    if (isMobile) {
      return (
        <div className="border-b border-border/30 last:border-b-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full p-4 text-left hover:bg-secondary/50 transition-colors"
            data-testid="mobile-work-permits-trigger"
          >
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Work Permits</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <ul className="bg-accent mx-2 mb-2 rounded-lg border border-border/20">
              {workPermitsNav.subItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-3 mx-2 my-1 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200"
                    onClick={handleLinkClick}
                    data-testid={`mobile-work-permit-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-3"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    const handleMouseEnter = () => {
      if (workPermitsTimeoutRef.current) {
        clearTimeout(workPermitsTimeoutRef.current);
        workPermitsTimeoutRef.current = null;
      }
      setIsOpen(true);
    };
    
    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 150); // 150ms delay before closing
      workPermitsTimeoutRef.current = timeout;
    };

    return (
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="work-permits-dropdown"
      >
        <Link
          href={workPermitsNav.href}
          className="flex items-center space-x-1 px-2 lg:px-3 py-2 text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
          data-testid="work-permits-link"
        >
          <span>Work Permits</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Link>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-80 z-50 bg-accent backdrop-blur-sm border border-border rounded-lg shadow-xl"
               data-testid="work-permits-dropdown-menu"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
            <ul className="p-4 space-y-1">
              {workPermitsNav.subItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200 hover:shadow-sm leading-tight"
                    onClick={handleLinkClick}
                    data-testid={`work-permit-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-2"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const StudyDropdown = ({ isMobile = false }) => {
    const isOpen = isMobile ? studyMobileOpen : studyOpen;
    const setIsOpen = isMobile ? setStudyMobileOpen : setStudyOpen;
    
    const handleLinkClick = () => {
      setIsOpen(false);
      if (isMobile) setIsMobileMenuOpen(false);
    };

    if (isMobile) {
      return (
        <div className="border-b border-border/30 last:border-b-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full p-4 text-left hover:bg-secondary/50 transition-colors"
            data-testid="mobile-study-trigger"
          >
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Study</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <ul className="bg-accent mx-2 mb-2 rounded-lg border border-border/20">
              {studyNav.subItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-3 mx-2 my-1 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200"
                    onClick={handleLinkClick}
                    data-testid={`mobile-study-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-3"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    const handleMouseEnter = () => {
      if (studyTimeoutRef.current) {
        clearTimeout(studyTimeoutRef.current);
        studyTimeoutRef.current = null;
      }
      setIsOpen(true);
    };
    
    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 150);
      studyTimeoutRef.current = timeout;
    };

    return (
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="study-dropdown"
      >
        <Link
          href={studyNav.href}
          className="flex items-center space-x-1 px-2 lg:px-3 py-2 text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
          data-testid="study-link"
        >
          <span>Study</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Link>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-80 z-50 bg-accent backdrop-blur-sm border border-border rounded-lg shadow-xl"
               data-testid="study-dropdown-menu"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
            <ul className="p-4 space-y-1">
              {studyNav.subItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200 hover:shadow-sm leading-tight"
                    onClick={handleLinkClick}
                    data-testid={`study-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-2"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const VisitDropdown = ({ isMobile = false }) => {
    const isOpen = isMobile ? visitMobileOpen : visitOpen;
    const setIsOpen = isMobile ? setVisitMobileOpen : setVisitOpen;
    
    const handleLinkClick = () => {
      setIsOpen(false);
      if (isMobile) setIsMobileMenuOpen(false);
    };

    if (isMobile) {
      return (
        <div className="border-b border-border/30 last:border-b-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full p-4 text-left hover:bg-secondary/50 transition-colors"
            data-testid="mobile-visit-trigger"
          >
            <div className="flex items-center space-x-3">
              <Plane className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Visit Canada</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <ul className="bg-accent mx-2 mb-2 rounded-lg border border-border/20">
              {visitNav.subItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-3 mx-2 my-1 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200"
                    onClick={handleLinkClick}
                    data-testid={`mobile-visit-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-3"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    const handleMouseEnter = () => {
      if (visitTimeoutRef.current) {
        clearTimeout(visitTimeoutRef.current);
        visitTimeoutRef.current = null;
      }
      setIsOpen(true);
    };
    
    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 150);
      visitTimeoutRef.current = timeout;
    };

    return (
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="visit-dropdown"
      >
        <Link
          href={visitNav.href}
          className="flex items-center space-x-1 px-2 lg:px-3 py-2 text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
          data-testid="visit-link"
        >
          <span>Visit Canada</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Link>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-80 z-50 bg-accent backdrop-blur-sm border border-border rounded-lg shadow-xl"
               data-testid="visit-dropdown-menu"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
            <ul className="p-4 space-y-1">
              {visitNav.subItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200 hover:shadow-sm leading-tight"
                    onClick={handleLinkClick}
                    data-testid={`visit-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-2"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const BusinessDropdown = ({ isMobile = false }) => {
    const isOpen = isMobile ? businessMobileOpen : businessOpen;
    const setIsOpen = isMobile ? setBusinessMobileOpen : setBusinessOpen;
    
    const handleLinkClick = () => {
      setIsOpen(false);
      if (isMobile) setIsMobileMenuOpen(false);
    };

    if (isMobile) {
      return (
        <div className="border-b border-border/30 last:border-b-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full p-4 text-left hover:bg-secondary/50 transition-colors"
            data-testid="mobile-business-trigger"
          >
            <div className="flex items-center space-x-3">
              <Building className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Business</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <ul className="bg-accent mx-2 mb-2 rounded-lg border border-border/20">
              {businessNav.subItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-3 mx-2 my-1 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200"
                    onClick={handleLinkClick}
                    data-testid={`mobile-business-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-3"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    const handleMouseEnter = () => {
      if (businessTimeoutRef.current) {
        clearTimeout(businessTimeoutRef.current);
        businessTimeoutRef.current = null;
      }
      setIsOpen(true);
    };
    
    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 150);
      businessTimeoutRef.current = timeout;
    };

    return (
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="business-dropdown"
      >
        <Link
          href={businessNav.href}
          className="flex items-center space-x-1 px-2 lg:px-3 py-2 text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
          data-testid="business-link"
        >
          <span>Business</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </Link>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-80 z-50 bg-accent backdrop-blur-sm border border-border rounded-lg shadow-xl"
               data-testid="business-dropdown-menu"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
            <ul className="p-4 space-y-1">
              {businessNav.subItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200 hover:shadow-sm leading-tight"
                    onClick={handleLinkClick}
                    data-testid={`business-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-2"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const PracticeAreasDropdown = ({ isMobile = false }) => {
    const isOpen = isMobile ? practiceAreasMobileOpen : practiceAreasOpen;
    const setIsOpen = isMobile ? setPracticeAreasMobileOpen : setPracticeAreasOpen;
    
    const handleLinkClick = () => {
      setIsOpen(false);
      if (isMobile) setIsMobileMenuOpen(false);
    };

    if (isMobile) {
      return (
        <div className="border-b border-border/30 last:border-b-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full p-4 text-left hover:bg-secondary/50 transition-colors"
            data-testid="mobile-practice-areas-trigger"
          >
            <div className="flex items-center space-x-3">
              <Scale className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Practice Areas</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <ul className="bg-accent mx-2 mb-2 rounded-lg border border-border/20">
              {practiceAreas.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-3 mx-2 my-1 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200"
                    onClick={handleLinkClick}
                    data-testid={`mobile-practice-area-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-3"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    const handleMouseEnter = () => {
      if (practiceAreasTimeoutRef.current) {
        clearTimeout(practiceAreasTimeoutRef.current);
        practiceAreasTimeoutRef.current = null;
      }
      setIsOpen(true);
    };
    
    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 150);
      practiceAreasTimeoutRef.current = timeout;
    };

    return (
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="practice-areas-dropdown"
      >
        <button
          className="flex items-center space-x-1 px-2 lg:px-3 py-2 text-sm lg:text-base text-foreground hover:text-primary transition-colors whitespace-nowrap"
          data-testid="practice-areas-link"
        >
          <span>Practice Areas</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-80 z-50 bg-accent backdrop-blur-sm border border-border rounded-lg shadow-xl"
               data-testid="practice-areas-dropdown-menu"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
            <ul className="p-4 space-y-1">
              {practiceAreas.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground hover:text-accent-foreground border border-accent-foreground/30 hover:border-accent-foreground/60 rounded-md transition-all duration-200 hover:shadow-sm leading-tight"
                    onClick={handleLinkClick}
                    data-testid={`practice-area-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-foreground/80 rounded-full mr-2"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-sticky shadow-lg" : "bg-background/95 backdrop-blur-sm"
      }`}
      data-testid="main-navigation"
    >
      {/* Top Bar */}
      <div className={`border-b border-border/30 ${isScrolled ? "bg-background/95" : "bg-background/80"} backdrop-blur-sm`}>
        <div className="container mx-auto px-6 py-2">
          <div className="hidden md:flex items-center justify-end space-x-4 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-accent text-xs lg:text-sm whitespace-nowrap ${
                  location === item.href ? "text-accent" : "text-foreground"
                }`}
                data-testid={`top-nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs lg:text-sm px-3 py-1.5 whitespace-nowrap"
              data-testid="top-book-consultation-button"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <img 
              src="/logo.png" 
              alt="Our Law Services Logo" 
              className="h-12 sm:h-14 lg:h-16 w-auto transition-all duration-300"
              data-testid="logo-image"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
            <WorkPermitsDropdown />
            <StudyDropdown />
            <VisitDropdown />
            <BusinessDropdown />
            <PracticeAreasDropdown />
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border dark:border-border">
            <div className="flex flex-col space-y-0 pt-4">
              {/* Top Bar Items in Mobile Menu */}
              <div className="border-b border-border/20 mb-2 pb-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors hover:text-accent p-4 block ${
                      location === item.href ? "text-accent" : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-top-nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.name}
                  </Link>
                ))}
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
              
              {/* Practice Areas Dropdowns */}
              <WorkPermitsDropdown isMobile={true} />
              <StudyDropdown isMobile={true} />
              <VisitDropdown isMobile={true} />
              <BusinessDropdown isMobile={true} />
              <PracticeAreasDropdown isMobile={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
