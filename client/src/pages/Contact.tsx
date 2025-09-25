import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { insertContactSchema, insertAppointmentSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { trackEvent } from "@/lib/analytics";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { z } from "zod";

// Extended schemas for form validation
const contactFormSchema = insertContactSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  practiceArea: z.string().optional()
});

const appointmentFormSchema = insertAppointmentSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  practiceArea: z.string().min(1, "Please select a practice area"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  description: z.string().optional()
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'contact' | 'appointment'>('contact');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      practiceArea: ""
    }
  });

  const appointmentForm = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      practiceArea: "",
      preferredDate: "",
      preferredTime: "",
      description: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      contactForm.reset();
      trackEvent('contact_form_submit', 'engagement', 'contact_page');
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive"
      });
    }
  });

  const appointmentMutation = useMutation({
    mutationFn: (data: AppointmentFormData) => apiRequest("POST", "/api/appointments", data),
    onSuccess: () => {
      toast({
        title: "Appointment Booked Successfully",
        description: "We'll confirm your appointment within 2 business hours.",
      });
      appointmentForm.reset();
      trackEvent('appointment_booking', 'engagement', 'contact_page');
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Book Appointment",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive"
      });
    }
  });

  const onContactSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const onAppointmentSubmit = (data: AppointmentFormData) => {
    appointmentMutation.mutate(data);
  };

  const practiceAreas = [
    "Immigration Law",
    "Real Estate Law", 
    "Wills & Power of Attorney",
    "Criminal Law",
    "General Legal Consultation"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
    "4:00 PM", "4:30 PM"
  ];

  return (
    <>
      <SEOHead
        title="Contact Us - Schedule Your Free Legal Consultation"
        description="Contact OurLawServices for professional legal representation. Schedule a free consultation, get directions to our Toronto office, or reach us by phone for immediate assistance."
        keywords="contact law firm Toronto, legal consultation, law office Toronto, immigration lawyer contact, real estate lawyer Toronto"
        canonicalUrl={`${window.location.origin}/contact`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary" data-testid="contact-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-serif font-bold text-primary mb-6" data-testid="contact-headline">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your legal needs? Contact us today for a free consultation. 
              We're here to help you navigate your legal challenges with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20" data-testid="contact-info">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-8" data-testid="contact-info-title">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Office Location</h3>
                        <p className="text-muted-foreground" data-testid="office-address">
                          123 Legal District<br />
                          Toronto, ON M5H 2N2<br />
                          Canada
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Phone Number</h3>
                        <a 
                          href="tel:+15555555555" 
                          className="text-lg text-accent hover:text-primary transition-colors font-medium"
                          data-testid="phone-number"
                        >
                          (555) LAW-FIRM
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">24/7 Emergency Line</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Email Address</h3>
                        <a 
                          href="mailto:info@ourlawservices.com" 
                          className="text-lg text-accent hover:text-primary transition-colors"
                          data-testid="email-address"
                        >
                          info@ourlawservices.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">We respond within 2 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Office Hours</h3>
                        <div className="text-muted-foreground" data-testid="office-hours">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 2:00 PM</p>
                          <p>Sunday: By Appointment</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Forms */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-border p-8">
                {/* Tab Navigation */}
                <div className="flex mb-8 bg-secondary rounded-lg p-1">
                  <button
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'contact' 
                        ? 'bg-white text-primary shadow-sm' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setActiveTab('contact')}
                    data-testid="contact-tab-button"
                  >
                    <MessageCircle className="h-4 w-4 inline mr-2" />
                    Send Message
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'appointment' 
                        ? 'bg-white text-primary shadow-sm' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setActiveTab('appointment')}
                    data-testid="appointment-tab-button"
                  >
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Book Appointment
                  </button>
                </div>

                {/* Contact Form */}
                {activeTab === 'contact' && (
                  <Form {...contactForm}>
                    <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6" data-testid="contact-form">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={contactForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-first-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-last-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={contactForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={contactForm.control}
                          name="practiceArea"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Practice Area</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-practice-area">
                                    <SelectValue placeholder="Select practice area" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {practiceAreas.map((area) => (
                                    <SelectItem key={area} value={area}>
                                      {area}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject *</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-subject" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={contactForm.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                rows={5}
                                placeholder="Please describe your legal needs or questions..."
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90" 
                        size="lg"
                        disabled={contactMutation.isPending}
                        data-testid="submit-contact-form"
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                )}

                {/* Appointment Form */}
                {activeTab === 'appointment' && (
                  <Form {...appointmentForm}>
                    <form onSubmit={appointmentForm.handleSubmit(onAppointmentSubmit)} className="space-y-6" data-testid="appointment-form">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={appointmentForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-appointment-first-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={appointmentForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-appointment-last-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={appointmentForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} data-testid="input-appointment-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={appointmentForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} data-testid="input-appointment-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={appointmentForm.control}
                        name="practiceArea"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Practice Area *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-appointment-practice-area">
                                  <SelectValue placeholder="Select practice area" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {practiceAreas.map((area) => (
                                  <SelectItem key={area} value={area}>
                                    {area}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={appointmentForm.control}
                          name="preferredDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Date *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="date" 
                                  {...field} 
                                  min={new Date().toISOString().split('T')[0]}
                                  data-testid="input-preferred-date"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={appointmentForm.control}
                          name="preferredTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-preferred-time">
                                    <SelectValue placeholder="Select time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={appointmentForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Brief Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                rows={4}
                                placeholder="Briefly describe your legal matter (optional)..."
                                data-testid="textarea-appointment-description"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90" 
                        size="lg"
                        disabled={appointmentMutation.isPending}
                        data-testid="submit-appointment-form"
                      >
                        {appointmentMutation.isPending ? "Booking..." : "Book Appointment"}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-secondary" data-testid="map-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-4" data-testid="map-title">
              Find Our Office
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of Toronto's legal district, we're easily accessible by public transport and offer parking nearby.
            </p>
          </motion.div>

          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.824049111947!2d-79.38318068450231!3d43.64751637912173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2s123%20Front%20St%20W%2C%20Toronto%2C%20ON%20M5J%202M2%2C%20Canada!5e0!3m2!1sen!2sus!4v1635959715982!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="google-maps-iframe"
              title="Our Law Services Office Location Map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
