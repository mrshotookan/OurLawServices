import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Search, Calendar, User, ArrowRight, Scale, Home as HomeIcon, FileText, Gavel } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  published: boolean;
  createdAt: string;
}

// Sample blog posts data (in a real application, this would come from the API)
const samplePosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Canada's New Immigration Pathways in 2024",
    slug: "canada-immigration-pathways-2024",
    excerpt: "Explore the latest changes to Canada's immigration system and discover new pathways to permanent residency that could benefit you.",
    category: "Immigration Law",
    tags: ["Immigration", "Permanent Residency", "Canada", "2024"],
    published: true,
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    title: "First-Time Home Buyer's Guide to Real Estate Law",
    slug: "first-time-home-buyer-guide-real-estate-law",
    excerpt: "Essential legal considerations for first-time home buyers, from purchase agreements to closing day preparations.",
    category: "Real Estate Law",
    tags: ["Real Estate", "Home Buying", "Legal Guide"],
    published: true,
    createdAt: "2024-01-10"
  },
  {
    id: "3",
    title: "Estate Planning Essentials: Protecting Your Family's Future",
    slug: "estate-planning-essentials-protecting-family-future",
    excerpt: "Learn why estate planning is crucial and discover the key documents every family needs to secure their financial future.",
    category: "Wills & Power of Attorney",
    tags: ["Estate Planning", "Wills", "Power of Attorney", "Family"],
    published: true,
    createdAt: "2024-01-05"
  },
  {
    id: "4",
    title: "Your Rights During a Police Investigation: What You Need to Know",
    slug: "rights-during-police-investigation",
    excerpt: "Understanding your constitutional rights during police investigations and how to protect yourself when facing criminal charges.",
    category: "Criminal Law",
    tags: ["Criminal Defense", "Rights", "Police Investigation"],
    published: true,
    createdAt: "2023-12-28"
  },
  {
    id: "5",
    title: "Express Entry Draw Results: What the Latest Changes Mean",
    slug: "express-entry-draw-results-latest-changes",
    excerpt: "Analysis of recent Express Entry draws and how the new selection criteria affect your immigration prospects.",
    category: "Immigration Law",
    tags: ["Express Entry", "Immigration", "Canada"],
    published: true,
    createdAt: "2023-12-20"
  },
  {
    id: "6",
    title: "Common Real Estate Transaction Pitfalls to Avoid",
    slug: "common-real-estate-transaction-pitfalls",
    excerpt: "Protect your investment by avoiding these common mistakes in residential and commercial real estate transactions.",
    category: "Real Estate Law",
    tags: ["Real Estate", "Transaction Tips", "Legal Advice"],
    published: true,
    createdAt: "2023-12-15"
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // In a real application, this would fetch from /api/blog
  const { data: posts = samplePosts, isLoading } = useQuery({
    queryKey: ['/api/blog'],
    enabled: false // Disabled since we're using sample data
  });

  const categories = ["All", "Immigration Law", "Real Estate Law", "Wills & Power of Attorney", "Criminal Law"];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Immigration Law":
        return <Scale className="h-4 w-4" />;
      case "Real Estate Law":
        return <HomeIcon className="h-4 w-4" />;
      case "Wills & Power of Attorney":
        return <FileText className="h-4 w-4" />;
      case "Criminal Law":
        return <Gavel className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEOHead
        title="Legal Blog & Insights - Professional Legal Advice and Updates"
        description="Stay informed with professional legal insights, updates on Canadian law changes, and practical advice from our experienced legal team. Immigration, real estate, criminal law, and estate planning."
        keywords="legal blog, law insights, Canadian law updates, legal advice, immigration news, real estate law, criminal defense, estate planning"
        canonicalUrl={`${window.location.origin}/blog`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary" data-testid="blog-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-serif font-bold text-primary mb-6" data-testid="blog-headline">
              Legal Insights & Updates
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stay informed with professional legal advice, law updates, and practical insights 
              from our experienced legal team. Knowledge is your best legal defense.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  className="pl-10 py-3 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="blog-search-input"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-accent text-accent-foreground" : ""}
                    data-testid={`category-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20" data-testid="blog-posts">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Loading articles...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-4" data-testid="articles-title">
                  {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
                </h2>
                <p className="text-muted-foreground">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group" data-testid={`blog-post-${post.id}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          {getCategoryIcon(post.category)}
                          <span className="text-sm text-accent font-medium" data-testid={`post-category-${post.id}`}>
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-serif font-semibold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors" data-testid={`post-title-${post.id}`}>
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`post-excerpt-${post.id}`}>
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span data-testid={`post-date-${post.id}`}>{formatDate(post.createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>OurLawServices</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-secondary text-xs rounded text-muted-foreground"
                              data-testid={`post-tag-${tag.toLowerCase()}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Button 
                          asChild 
                          variant="ghost" 
                          className="text-accent hover:text-primary p-0 h-auto group-hover:gap-2 transition-all"
                          data-testid={`read-more-${post.id}`}
                        >
                          <Link href={`/blog/${post.slug}`}>
                            Read More 
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-2">No Articles Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or selecting a different category.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                data-testid="clear-filters-button"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="newsletter-signup">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6" data-testid="newsletter-title">
              Stay Updated with Legal Insights
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest legal updates, case studies, 
              and professional advice delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-black"
                data-testid="newsletter-email-input"
              />
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap"
                data-testid="newsletter-subscribe-button"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
