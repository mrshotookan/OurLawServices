# OurLawServices.com - Professional Law Firm Website

## Overview

OurLawServices.com is a modern, professional law firm website built with React, TypeScript, and Express.js. The application provides a comprehensive platform for legal services, featuring practice area information, client contact forms, appointment booking, blog content, and specialized work permit guidance. The system emphasizes SEO optimization, responsive design, and user experience with smooth animations and interactive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Component-based architecture using React 18 with full TypeScript support
- **Routing**: Wouter for lightweight client-side routing with dynamic route parameters
- **State Management**: TanStack Query for server state management and caching
- **UI Framework**: Shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system including law firm color palette (navy, gold, white)
- **Typography**: Custom font system using Merriweather/Playfair Display for headings and Inter/Open Sans for body text
- **Animations**: Framer Motion for smooth transitions and interactive animations
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Express.js Server**: RESTful API with TypeScript support
- **Route Structure**: Modular route registration with dedicated endpoints for contact and appointment management
- **Middleware**: Request logging, JSON parsing, and error handling
- **Development Setup**: Vite integration for hot module replacement and development tooling

### Data Storage Solutions
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory for consistency
- **Storage Interface**: Abstract storage interface with in-memory implementation for development
- **Data Models**: Structured entities for users, contacts, appointments, and blog posts

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **User System**: Basic user authentication structure with username/password approach
- **Security**: Environment-based configuration for sensitive credentials

### SEO and Analytics Integration
- **Meta Management**: Dynamic SEO head component for page-specific optimization
- **Google Analytics**: GA4 integration with custom event tracking
- **Structured Data**: Professional service schema markup for search engine optimization
- **Performance**: Optimized bundle splitting and lazy loading strategies

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Database Configuration**: Environment-based connection string management

### UI and Design Systems
- **Radix UI**: Comprehensive primitive components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with custom law firm design tokens
- **Lucide React**: Consistent icon library for professional appearance

### Development and Build Tools
- **Vite**: Modern build tool with TypeScript and React plugin support
- **ESBuild**: Fast bundling for production server builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins

### Third-Party Integrations
- **Google Analytics**: Website traffic and user behavior tracking
- **WhatsApp Business**: Live chat integration for client communication
- **Font Services**: Google Fonts integration for typography system

### Specialized Content Management
- **Work Permit Pages**: Structured content system for immigration law services
- **Blog System**: Content management for legal articles and updates
- **Practice Area Templates**: Reusable components for different legal specializations

### Communication Services
- **Contact Forms**: Structured data collection for client inquiries
- **Appointment Booking**: Scheduling system with practice area categorization
- **Email Integration**: Backend preparation for notification systems