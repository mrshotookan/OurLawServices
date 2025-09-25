import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    position: "Software Engineer",
    content: "The team at OurLawServices made our immigration process seamless. Their professional expertise and dedication helped us secure our permanent residency much faster than we expected. Highly recommend their services!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Business Owner",
    content: "Excellent service for our real estate transaction. They handled everything professionally and kept us informed throughout the entire process. We couldn't be happier with the outcome.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b52a3e85?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    name: "David Rodriguez",
    position: "Marketing Director",
    content: "During a difficult time, their professional criminal law knowledge provided us with the strong defense we needed. Professional, compassionate, and results-oriented. Thank you for everything.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto" data-testid="testimonials-carousel">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="px-4"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
              <div className="flex items-center mb-6">
                <div className="flex text-accent">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" data-testid={`star-${i}`} />
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="testimonial-content">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={`${testimonials[currentIndex].name} testimonial photo`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  data-testid="testimonial-avatar"
                />
                <div>
                  <div className="font-semibold text-primary" data-testid="testimonial-name">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid="testimonial-position">
                    {testimonials[currentIndex].position}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg border border-border hover:bg-secondary"
        onClick={previousTestimonial}
        data-testid="testimonial-prev-button"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg border border-border hover:bg-secondary"
        onClick={nextTestimonial}
        data-testid="testimonial-next-button"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-accent" : "bg-border"
            }`}
            onClick={() => goToTestimonial(index)}
            data-testid={`testimonial-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
