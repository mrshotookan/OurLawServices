import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Award, Users, Scale, Heart } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      position: "Managing Partner",
      specialization: "Immigration & Corporate Law",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b52a3e85?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Sarah leads our immigration practice with extensive experience in complex visa applications and corporate immigration matters."
    },
    {
      name: "Michael Chen",
      position: "Senior Partner",
      specialization: "Real Estate & Commercial Law",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Michael specializes in complex real estate transactions and commercial law, helping clients navigate high-value property deals."
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Senior Associate",
      specialization: "Criminal Defense & Family Law",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Emily brings compassionate expertise to criminal defense and family law matters, with a focus on protecting client rights."
    }
  ];

  const values = [
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards and maintain transparent communication with our clients."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion",
      description: "We understand that legal issues can be stressful and approach each case with empathy and understanding."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for outstanding results in every case, combining legal expertise with strategic thinking."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-First",
      description: "Our clients' needs and goals are at the center of everything we do, ensuring personalized service."
    }
  ];

  return (
    <>
      <SEOHead
        title="About Us - Meet Our Expert Legal Team"
        description="Learn about OurLawServices' experienced legal team, our mission, values, and commitment to providing exceptional legal representation across multiple practice areas."
        keywords="about us, legal team, law firm Toronto, experienced lawyers, legal expertise"
        canonicalUrl={`${window.location.origin}/about`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary" data-testid="about-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-serif font-bold text-primary mb-6" data-testid="about-headline">
              About OurLawServices
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded on the principles of integrity, excellence, and client service, 
              OurLawServices has been providing trusted legal representation for over 
              two decades. Our team combines deep legal expertise with a commitment 
              to achieving the best possible outcomes for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20" data-testid="mission-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="mission-title">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To provide exceptional legal services that protect our clients' interests, 
                rights, and futures. We believe that everyone deserves access to quality 
                legal representation, and we're committed to making the legal process 
                as clear and stress-free as possible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach combines traditional legal excellence with modern client 
                service standards, ensuring that you receive both expert representation 
                and the personal attention you deserve.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Legal consultation meeting"
                className="rounded-lg shadow-lg w-full"
                data-testid="mission-image"
              />
            </motion.div>
          </div>

          {/* Values */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-serif font-bold text-primary mb-4" data-testid="values-title">
                Our Values
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide every interaction and decision we make
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg bg-white shadow-sm border border-border"
                  data-testid={`value-${value.title.toLowerCase()}`}
                >
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-accent-foreground">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3" data-testid={`value-title-${value.title.toLowerCase()}`}>
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground" data-testid={`value-description-${value.title.toLowerCase()}`}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary" data-testid="team-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="team-title">
              Meet Our Expert Team
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced attorneys bring decades of combined expertise across 
              multiple practice areas, ensuring comprehensive legal representation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-border text-center"
                data-testid={`team-member-${member.name.toLowerCase().replace(' ', '-')}`}
              >
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  data-testid={`team-photo-${member.name.toLowerCase().replace(' ', '-')}`}
                />
                <h4 className="text-xl font-serif font-semibold text-primary mb-2" data-testid={`team-name-${member.name.toLowerCase().replace(' ', '-')}`}>
                  {member.name}
                </h4>
                <p className="text-accent font-medium mb-2" data-testid={`team-position-${member.name.toLowerCase().replace(' ', '-')}`}>
                  {member.position}
                </p>
                <p className="text-sm text-muted-foreground mb-2" data-testid={`team-specialization-${member.name.toLowerCase().replace(' ', '-')}`}>
                  {member.specialization}
                </p>
                <p className="text-sm text-primary font-medium mb-4" data-testid={`team-experience-${member.name.toLowerCase().replace(' ', '-')}`}>
                  {member.experience} Experience
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`team-bio-${member.name.toLowerCase().replace(' ', '-')}`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" data-testid="why-choose-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-4xl font-serif font-bold text-primary mb-6" data-testid="why-choose-title">
              Why Choose OurLawServices?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2" data-testid="stat-clients">1000+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2" data-testid="stat-cases">500+</div>
                <div className="text-muted-foreground">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2" data-testid="stat-success">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3" data-testid="trust-title">
                  Trust & Reliability
                </h4>
                <p className="text-muted-foreground">
                  Our clients trust us with their most important legal matters because 
                  we consistently deliver results and maintain the highest professional standards.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3" data-testid="approach-title">
                  Client-First Approach
                </h4>
                <p className="text-muted-foreground">
                  We believe in building long-term relationships with our clients, 
                  providing personalized attention and keeping you informed every step of the way.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90" 
                asChild
                data-testid="contact-cta-button"
              >
                <Link href="/contact">Schedule Your Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
