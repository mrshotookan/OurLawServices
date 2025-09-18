import { type User, type InsertUser, type Contact, type InsertContact, type Appointment, type InsertAppointment, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private appointments: Map<string, Appointment>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.appointments = new Map();
    this.blogPosts = new Map();
    
    // Initialize with some sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: BlogPost[] = [
      {
        id: "1",
        title: "Understanding Canada's New Immigration Pathways in 2024",
        slug: "canada-immigration-pathways-2024",
        excerpt: "Explore the latest changes to Canada's immigration system and discover new pathways to permanent residency that could benefit you.",
        content: "Full article content would go here...",
        category: "Immigration Law",
        tags: ["Immigration", "Permanent Residency", "Canada", "2024"],
        published: true,
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date("2024-01-15")
      },
      {
        id: "2",
        title: "First-Time Home Buyer's Guide to Real Estate Law",
        slug: "first-time-home-buyer-guide-real-estate-law",
        excerpt: "Essential legal considerations for first-time home buyers, from purchase agreements to closing day preparations.",
        content: "Full article content would go here...",
        category: "Real Estate Law",
        tags: ["Real Estate", "Home Buying", "Legal Guide"],
        published: true,
        createdAt: new Date("2024-01-10"),
        updatedAt: new Date("2024-01-10")
      },
      {
        id: "3",
        title: "Estate Planning Essentials: Protecting Your Family's Future",
        slug: "estate-planning-essentials-protecting-family-future",
        excerpt: "Learn why estate planning is crucial and discover the key documents every family needs to secure their financial future.",
        content: "Full article content would go here...",
        category: "Wills & Power of Attorney",
        tags: ["Estate Planning", "Wills", "Power of Attorney", "Family"],
        published: true,
        createdAt: new Date("2024-01-05"),
        updatedAt: new Date("2024-01-05")
      }
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      phone: insertContact.phone ?? null,
      practiceArea: insertContact.practiceArea ?? null,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = {
      ...insertAppointment,
      id,
      description: insertAppointment.description ?? null,
      createdAt: new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      post => post.slug === slug && post.published
    );
  }
}

export const storage = new MemStorage();
