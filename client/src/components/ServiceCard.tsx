import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
  href: string;
  index: number;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  services, 
  href, 
  index 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="service-card bg-white rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
        <div className="text-2xl text-primary-foreground">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-serif font-semibold text-primary mb-4" data-testid={`service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6" data-testid={`service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>
      
      <ul className="text-sm text-muted-foreground space-y-2 mb-6">
        {services.map((service, serviceIndex) => (
          <li key={serviceIndex} data-testid={`service-item-${serviceIndex}`}>
            • {service}
          </li>
        ))}
      </ul>
      
      <Button 
        asChild 
        variant="ghost" 
        className="text-accent hover:text-primary p-0 h-auto font-semibold"
        data-testid={`service-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <Link href={href}>
          Learn More →
        </Link>
      </Button>
    </motion.div>
  );
}
