export interface WorkPermitPage {
  id: string;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    title: string;
    description: string;
  };
  overview: {
    title: string;
    content: string[];
  };
  eligibility: {
    title: string;
    requirements: string[];
  };
  process: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  processingTime: string;
  fees: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface StudyPage {
  id: string;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    title: string;
    description: string;
  };
  overview: {
    title: string;
    content: string[];
  };
  eligibility: {
    title: string;
    requirements: string[];
  };
  process: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  processingTime: string;
  fees: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface VisitPage {
  id: string;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    title: string;
    description: string;
  };
  overview: {
    title: string;
    content: string[];
  };
  eligibility: {
    title: string;
    requirements: string[];
  };
  process: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  processingTime: string;
  fees: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BusinessPage {
  id: string;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    title: string;
    description: string;
  };
  overview: {
    title: string;
    content: string[];
  };
  eligibility: {
    title: string;
    requirements: string[];
  };
  process: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  processingTime: string;
  fees: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const workPermitPages: WorkPermitPage[] = [
  {
    id: "lmia-work-permits",
    title: "LMIA Work Permits",
    slug: "lmia",
    metaTitle: "LMIA Work Permits Canada - Labour Market Impact Assessment | Expert Immigration Lawyers",
    metaDescription: "Get expert help with LMIA work permits in Canada. Our immigration lawyers provide comprehensive support for Labour Market Impact Assessment applications with 95% success rate.",
    keywords: ["LMIA work permit", "Labour Market Impact Assessment", "Canada work permit", "LMIA application", "temporary foreign worker"],
    hero: {
      title: "LMIA Work Permits in Canada",
      description: "Navigate the Labour Market Impact Assessment process with expert legal guidance. We help employers and workers secure LMIA work permits efficiently and successfully."
    },
    overview: {
      title: "What is an LMIA Work Permit?",
      content: [
        "A Labour Market Impact Assessment (LMIA) is a document that Canadian employers may need to obtain before hiring a foreign worker. It demonstrates that there is a genuine need for a foreign worker and that no Canadian worker is available to fill the position.",
        "LMIA work permits are tied to a specific employer and job position. They provide temporary authorization to work in Canada for a designated period and can serve as a pathway to permanent residence through various immigration programs.",
        "The LMIA process involves demonstrating that hiring a foreign worker will have a positive or neutral impact on the Canadian labour market."
      ]
    },
    eligibility: {
      title: "Eligibility Requirements",
      requirements: [
        "Valid job offer from a Canadian employer with positive LMIA",
        "Employer must demonstrate recruitment efforts for Canadian workers",
        "Job offer must meet prevailing wage rates",
        "Worker must meet job requirements and qualifications",
        "No criminal record or security concerns",
        "Medical examination may be required",
        "Sufficient funds to support yourself and family members"
      ]
    },
    process: {
      title: "Application Process",
      steps: [
        {
          step: 1,
          title: "Employer Obtains LMIA",
          description: "Canadian employer applies to Employment and Social Development Canada (ESDC) for a positive LMIA determination."
        },
        {
          step: 2,
          title: "Prepare Work Permit Application",
          description: "Gather required documents including passport, job offer letter, LMIA copy, and supporting documents."
        },
        {
          step: 3,
          title: "Submit Application",
          description: "Apply for work permit online or at visa office with complete documentation package."
        },
        {
          step: 4,
          title: "Biometrics and Interview",
          description: "Provide biometrics and attend interview if requested by immigration officials."
        },
        {
          step: 5,
          title: "Receive Decision",
          description: "Receive work permit decision and travel documents if approved."
        },
        {
          step: 6,
          title: "Enter Canada",
          description: "Present documents at port of entry to receive work permit and begin employment."
        }
      ]
    },
    processingTime: "4-6 months (including LMIA processing time)",
    fees: "$155 CAD work permit fee + biometrics fee if applicable",
    faqs: [
      {
        question: "How long does the LMIA process take?",
        answer: "LMIA processing typically takes 2-4 months, but can vary depending on the type of position and location. High-wage positions generally process faster than low-wage positions."
      },
      {
        question: "Can I change employers with an LMIA work permit?",
        answer: "LMIA work permits are employer-specific. To change employers, you would need a new LMIA from the new employer and apply for a new work permit."
      },
      {
        question: "Does an LMIA work permit lead to permanent residence?",
        answer: "Yes, LMIA work permits can help you qualify for various permanent residence programs including Provincial Nominee Programs and the Canadian Experience Class."
      }
    ]
  },
  {
    id: "lmia-exempt-work-permits",
    title: "LMIA Exempt Work Permits",
    slug: "lmia-exempt",
    metaTitle: "LMIA Exempt Work Permits Canada - No Labour Market Test Required | Immigration Lawyers",
    metaDescription: "Secure LMIA exempt work permits in Canada without labour market testing. Expert immigration lawyers help with NAFTA, ICT, and other exempt categories with proven success.",
    keywords: ["LMIA exempt work permit", "no labour market test", "NAFTA work permit", "intra-company transfer", "international agreement"],
    hero: {
      title: "LMIA Exempt Work Permits",
      description: "Obtain work authorization in Canada without requiring a Labour Market Impact Assessment. We specialize in LMIA exempt categories under international agreements and specific programs."
    },
    overview: {
      title: "Understanding LMIA Exempt Work Permits",
      content: [
        "LMIA exempt work permits allow foreign nationals to work in Canada without requiring their employer to obtain a Labour Market Impact Assessment. These permits are available under specific categories defined by international trade agreements, Canadian interests, or reciprocal employment arrangements.",
        "Common LMIA exempt categories include positions under NAFTA/CUSMA, intra-company transfers, spouses of skilled workers, and positions that provide significant benefit to Canada.",
        "These permits often have faster processing times and may offer more flexibility compared to LMIA-required work permits."
      ]
    },
    eligibility: {
      title: "Common LMIA Exempt Categories",
      requirements: [
        "NAFTA/CUSMA professionals, traders, and investors",
        "Intra-company transferees (executives, managers, specialized knowledge)",
        "Spouses of skilled workers and international students",
        "Post-graduation work permit holders",
        "Positions providing significant benefit to Canada",
        "Reciprocal employment arrangements",
        "International agreements (CETA, CPTPP, etc.)",
        "Charitable or religious work"
      ]
    },
    process: {
      title: "Application Process",
      steps: [
        {
          step: 1,
          title: "Determine Exemption Category",
          description: "Identify the specific LMIA exemption category that applies to your situation and gather supporting documentation."
        },
        {
          step: 2,
          title: "Employer Compliance",
          description: "Ensure employer meets requirements for the exemption category and obtains necessary documentation."
        },
        {
          step: 3,
          title: "Prepare Application",
          description: "Compile application package with job offer, exemption documentation, and personal documents."
        },
        {
          step: 4,
          title: "Submit Application",
          description: "Submit work permit application online or at appropriate visa office."
        },
        {
          step: 5,
          title: "Processing and Decision",
          description: "Application reviewed and decision rendered by immigration officials."
        },
        {
          step: 6,
          title: "Receive Work Permit",
          description: "Upon approval, receive work permit at port of entry or through mail."
        }
      ]
    },
    processingTime: "2-8 weeks (varies by category and application location)",
    fees: "$155 CAD work permit fee + biometrics fee if applicable",
    faqs: [
      {
        question: "Which is faster - LMIA exempt or LMIA required work permits?",
        answer: "LMIA exempt work permits typically process much faster (2-8 weeks) compared to LMIA required permits (4-6 months) since no labour market assessment is needed."
      },
      {
        question: "Can I apply for permanent residence with an LMIA exempt work permit?",
        answer: "Yes, many LMIA exempt work permit holders are eligible for permanent residence programs, though some categories may provide additional points or advantages."
      },
      {
        question: "Do I need a job offer for an LMIA exempt work permit?",
        answer: "Most LMIA exempt categories require a job offer, but some categories like open work permits for spouses do not require a specific employer."
      }
    ]
  },
  {
    id: "global-talent-stream",
    title: "Global Talent Stream",
    slug: "global-talent-stream",
    metaTitle: "Global Talent Stream Canada - Fast-Track Work Permits for Tech Workers | Immigration Experts",
    metaDescription: "Get Global Talent Stream work permits in Canada with expedited processing in 2 weeks. Expert immigration lawyers help tech professionals and skilled workers access fast-track LMIA.",
    keywords: ["Global Talent Stream", "GTS work permit", "tech worker Canada", "fast track LMIA", "skilled worker immigration"],
    hero: {
      title: "Global Talent Stream Work Permits",
      description: "Access Canada's fastest work permit stream for highly skilled workers and unique talent. Get expedited processing in as little as 2 weeks for qualified positions."
    },
    overview: {
      title: "What is the Global Talent Stream?",
      content: [
        "The Global Talent Stream (GTS) is part of Canada's Temporary Foreign Worker Program designed to help innovative companies access highly skilled talent quickly. It offers expedited processing for both LMIA applications and work permits.",
        "The GTS has two categories: Category A for positions referred by designated partners, and Category B for high-demand occupations on the Global Talent Occupations List.",
        "This stream enables companies to recruit top global talent while creating jobs for Canadians through labour market benefits plans."
      ]
    },
    eligibility: {
      title: "Eligibility Requirements",
      requirements: [
        "Position must be in an eligible occupation under Category A or B",
        "Category A: Position referred by designated partner organization",
        "Category B: High-demand occupation on Global Talent Occupations List",
        "Employer must demonstrate labour market benefits plan",
        "Minimum wage requirements must be met",
        "Worker must meet education and experience requirements",
        "Company must be eligible to participate in GTS program"
      ]
    },
    process: {
      title: "Application Process",
      steps: [
        {
          step: 1,
          title: "Employer Eligibility Check",
          description: "Verify employer eligibility and position qualification under GTS categories."
        },
        {
          step: 2,
          title: "Labour Market Benefits Plan",
          description: "Develop and submit labour market benefits plan showing positive impact on Canadian workers."
        },
        {
          step: 3,
          title: "Expedited LMIA Application",
          description: "Submit LMIA application under Global Talent Stream with supporting documentation."
        },
        {
          step: 4,
          title: "Work Permit Application",
          description: "Upon positive LMIA, immediately apply for work permit with expedited processing."
        },
        {
          step: 5,
          title: "Fast-Track Processing",
          description: "Benefit from service standard of 10 business days for LMIA and 2 weeks for work permit."
        },
        {
          step: 6,
          title: "Begin Employment",
          description: "Receive work permit and begin employment in Canada with designated employer."
        }
      ]
    },
    processingTime: "10 business days for LMIA + 2 weeks for work permit",
    fees: "$1,000 CAD LMIA fee + $155 CAD work permit fee",
    faqs: [
      {
        question: "What occupations are eligible for Global Talent Stream?",
        answer: "Eligible occupations include software engineers, data scientists, digital media designers, and other high-demand tech positions listed on the Global Talent Occupations List."
      },
      {
        question: "Can startups use the Global Talent Stream?",
        answer: "Yes, startups referred by designated partners or incubators can access Category A, while established companies typically use Category B for listed occupations."
      },
      {
        question: "Is the Global Talent Stream a pathway to permanent residence?",
        answer: "Yes, GTS work permit holders often qualify for permanent residence through Express Entry, particularly the Canadian Experience Class after gaining Canadian work experience."
      }
    ]
  },
  {
    id: "nafta-work-permits",
    title: "NAFTA Work Permits",
    slug: "nafta-work-permits",
    metaTitle: "NAFTA Work Permits Canada - CUSMA Professional Work Authorization | Immigration Lawyers",
    metaDescription: "Secure NAFTA/CUSMA work permits in Canada for US and Mexican professionals. Expert immigration lawyers provide comprehensive support for trade agreement work permits.",
    keywords: ["NAFTA work permit", "CUSMA work permit", "professional work permit", "US Mexico Canada Agreement", "trade professional"],
    hero: {
      title: "NAFTA/CUSMA Work Permits",
      description: "Leverage the Canada-United States-Mexico Agreement (CUSMA) for streamlined work authorization. We help US and Mexican professionals access Canada's market through trade agreements."
    },
    overview: {
      title: "NAFTA/CUSMA Work Permits Explained",
      content: [
        "The Canada-United States-Mexico Agreement (CUSMA), formerly NAFTA, facilitates temporary entry for business persons between the three countries. This includes professionals, traders, investors, and intra-company transferees.",
        "NAFTA/CUSMA work permits are LMIA-exempt and offer streamlined processing for qualified individuals. They support free trade by enabling the movement of skilled professionals across borders.",
        "These permits are available to citizens of Canada, United States, and Mexico for specific professional occupations and business activities."
      ]
    },
    eligibility: {
      title: "Eligible Categories",
      requirements: [
        "Professionals: Specific occupations requiring university degree",
        "Traders: Substantial trade between Canada and home country",
        "Investors: Substantial investment in Canadian enterprise",
        "Intra-company transferees: Executives, managers, specialized knowledge",
        "Must be citizen of US, Mexico, or Canada",
        "Meet education and experience requirements for category",
        "Job offer for professional category (if applicable)"
      ]
    },
    process: {
      title: "Application Process",
      steps: [
        {
          step: 1,
          title: "Determine Eligibility Category",
          description: "Identify whether you qualify as professional, trader, investor, or intra-company transferee."
        },
        {
          step: 2,
          title: "Gather Documentation",
          description: "Collect citizenship proof, credentials, job offer (if applicable), and supporting documents."
        },
        {
          step: 3,
          title: "Prepare Application",
          description: "Complete work permit application with NAFTA/CUSMA exemption code and documentation."
        },
        {
          step: 4,
          title: "Submit Application",
          description: "Apply at port of entry, visa office, or online depending on circumstances."
        },
        {
          step: 5,
          title: "Processing and Interview",
          description: "Application reviewed and interview conducted if required."
        },
        {
          step: 6,
          title: "Receive Authorization",
          description: "Upon approval, receive work authorization to begin employment in Canada."
        }
      ]
    },
    processingTime: "At port of entry: immediate; Online applications: 2-4 weeks",
    fees: "$155 CAD work permit fee",
    faqs: [
      {
        question: "Can I apply for a NAFTA work permit at the border?",
        answer: "Yes, US and Mexican citizens can often apply for NAFTA professional work permits directly at the port of entry with proper documentation."
      },
      {
        question: "What professions are covered under NAFTA/CUSMA?",
        answer: "Covered professions include engineers, accountants, lawyers, teachers, scientists, and many other university-level occupations listed in the agreement appendix."
      },
      {
        question: "How long can I work in Canada with a NAFTA permit?",
        answer: "NAFTA work permits are typically issued for up to 3 years and can be renewed indefinitely as long as you continue to meet the requirements."
      }
    ]
  },
  {
    id: "work-without-permit",
    title: "Work without a Permit",
    slug: "work-without-permit",
    metaTitle: "Work in Canada Without a Permit - Exemptions and Legal Requirements | Immigration Experts",
    metaDescription: "Understand when you can legally work in Canada without a work permit. Expert immigration lawyers explain exemptions, visitor work rules, and compliance requirements.",
    keywords: ["work without permit Canada", "visitor work exemption", "emergency work Canada", "short term work", "work permit exemption"],
    hero: {
      title: "Working in Canada Without a Permit",
      description: "Understand the limited circumstances when foreign nationals can legally work in Canada without a work permit. Ensure compliance with immigration regulations."
    },
    overview: {
      title: "When Can You Work Without a Permit?",
      content: [
        "Generally, foreign nationals require a work permit to work in Canada. However, there are specific exemptions that allow certain types of work without a permit under strict conditions.",
        "These exemptions are limited in scope and duration, designed for emergency situations, very short-term work, or specific types of business activities that don't constitute employment in the traditional sense.",
        "It's crucial to understand these exemptions thoroughly, as working illegally in Canada can result in removal and future immigration difficulties."
      ]
    },
    eligibility: {
      title: "Work Permit Exemptions",
      requirements: [
        "Business visitors conducting international business",
        "Emergency repairs to industrial equipment (up to 30 days)",
        "After-sales service technicians (limited duration)",
        "Crew members on foreign vessels",
        "Military personnel under visiting forces agreements",
        "Diplomatic and consular staff",
        "News reporters covering events in Canada",
        "Performing artists for specific short engagements"
      ]
    },
    process: {
      title: "Compliance Requirements",
      steps: [
        {
          step: 1,
          title: "Verify Exemption Eligibility",
          description: "Carefully review exemption criteria to ensure your situation qualifies for work without a permit."
        },
        {
          step: 2,
          title: "Prepare Documentation",
          description: "Gather evidence supporting your exemption claim, including business documentation and purpose of visit."
        },
        {
          step: 3,
          title: "Port of Entry Declaration",
          description: "Declare your intention to work under exemption to border officials upon entry to Canada."
        },
        {
          step: 4,
          title: "Maintain Compliance",
          description: "Ensure all work activities remain within exemption parameters and time limits."
        },
        {
          step: 5,
          title: "Document Activities",
          description: "Keep detailed records of work performed and duration to demonstrate compliance."
        },
        {
          step: 6,
          title: "Exit Before Expiry",
          description: "Leave Canada or obtain proper work authorization before exemption period expires."
        }
      ]
    },
    processingTime: "No processing - determined at port of entry",
    fees: "No fees for exemptions",
    faqs: [
      {
        question: "Can tourists work in Canada without a permit?",
        answer: "No, tourists cannot work in Canada. Only very specific exemptions allow work without a permit, and these don't include general tourist activities or employment."
      },
      {
        question: "How long can I work without a permit in Canada?",
        answer: "Exemption periods vary by category. Emergency repairs allow up to 30 days, while business visitors can conduct business meetings but cannot be employed by Canadian companies."
      },
      {
        question: "What happens if I work illegally in Canada?",
        answer: "Working without proper authorization can result in removal from Canada, bans on future entry, and difficulty obtaining future visas or permits."
      }
    ]
  },
  {
    id: "iec-work-permits",
    title: "IEC Work Permits",
    slug: "iec",
    metaTitle: "International Experience Canada (IEC) Work Permits - Working Holiday Visa | Immigration Lawyers",
    metaDescription: "Get IEC work permits through International Experience Canada program. Expert immigration lawyers help with working holiday, young professionals, and co-op programs.",
    keywords: ["IEC work permit", "International Experience Canada", "working holiday visa", "young professionals Canada", "youth mobility"],
    hero: {
      title: "International Experience Canada (IEC) Work Permits",
      description: "Gain valuable Canadian work experience through IEC programs. We help young adults from partner countries access working holiday, young professionals, and international co-op opportunities."
    },
    overview: {
      title: "About International Experience Canada",
      content: [
        "International Experience Canada (IEC) enables young people aged 18-35 (varies by country) from partner countries to work and travel in Canada. The program includes three categories: Working Holiday, Young Professionals, and International Co-op.",
        "IEC permits are country-specific with annual quotas and are issued through invitation rounds. Participants can gain Canadian work experience, improve language skills, and explore the country.",
        "This program often serves as a stepping stone to permanent residence through various immigration pathways."
      ]
    },
    eligibility: {
      title: "Eligibility Requirements",
      requirements: [
        "Citizen of IEC partner country",
        "Age 18-35 (varies by country - some countries 18-30)",
        "Valid passport for duration of intended stay",
        "Proof of funds ($2,500 CAD minimum)",
        "Medical exam (if required)",
        "No dependent children accompanying",
        "Meet category-specific requirements",
        "Purchase mandatory insurance coverage"
      ]
    },
    process: {
      title: "Application Process",
      steps: [
        {
          step: 1,
          title: "Check Eligibility",
          description: "Verify your country's participation in IEC and specific age/eligibility requirements."
        },
        {
          step: 2,
          title: "Create Online Profile",
          description: "Register in the IEC pool and complete your candidate profile."
        },
        {
          step: 3,
          title: "Receive Invitation",
          description: "Wait for invitation to apply during invitation rounds (if selected)."
        },
        {
          step: 4,
          title: "Submit Application",
          description: "Complete work permit application within 20 days of invitation with all required documents."
        },
        {
          step: 5,
          title: "Provide Biometrics",
          description: "Attend biometrics appointment if required for your country."
        },
        {
          step: 6,
          title: "Receive Work Permit",
          description: "Upon approval, receive port of entry letter and activate permit at Canadian border."
        }
      ]
    },
    processingTime: "4-8 weeks after invitation acceptance",
    fees: "$161 CAD work permit fee + $100 CAD program participation fee",
    faqs: [
      {
        question: "Which countries participate in IEC?",
        answer: "Over 30 countries participate including UK, Australia, Germany, France, Japan, South Korea, and many others. Each country has specific quotas and requirements."
      },
      {
        question: "Can I extend my IEC work permit?",
        answer: "IEC work permits cannot be extended. However, you may be eligible to transition to other work permits or apply for permanent residence."
      },
      {
        question: "Can IEC help me get permanent residence in Canada?",
        answer: "Yes, IEC work experience can help you qualify for permanent residence through Express Entry, Provincial Nominee Programs, or Canadian Experience Class."
      }
    ]
  },
  {
    id: "open-work-permit",
    title: "Open Work Permit (OWP)",
    slug: "open-work-permit",
    metaTitle: "Open Work Permit Canada - Work for Any Employer | Immigration Lawyers",
    metaDescription: "Secure open work permits in Canada allowing employment with any employer. Expert immigration lawyers help spouses, protected persons, and other eligible applicants.",
    keywords: ["open work permit", "OWP Canada", "spouse work permit", "work any employer", "flexible work authorization"],
    hero: {
      title: "Open Work Permits in Canada",
      description: "Gain the flexibility to work for any employer in Canada with an open work permit. We help eligible applicants navigate the requirements and application process."
    },
    overview: {
      title: "Understanding Open Work Permits",
      content: [
        "An Open Work Permit (OWP) allows the holder to work for any employer in Canada without requiring a specific job offer or Labour Market Impact Assessment (LMIA). This provides maximum flexibility in the Canadian job market.",
        "Open work permits are available to specific categories of people, including spouses of skilled workers, protected persons, refugee claimants, and certain international graduates.",
        "Unlike employer-specific work permits, OWPs are not tied to a particular employer, job, or location, offering greater employment opportunities and career flexibility."
      ]
    },
    eligibility: {
      title: "Who Can Apply for Open Work Permits",
      requirements: [
        "Spouses/partners of skilled workers, international students, or certain work permit holders",
        "Protected persons and convention refugees",
        "Refugee claimants whose claims have been referred to Immigration and Refugee Board",
        "Spouses experiencing abuse in relationship with Canadian citizen/PR",
        "Young people under International Experience Canada",
        "Participants in specific pilot programs",
        "Individuals under removal order who cannot be removed",
        "Holders of temporary resident permits valid for 6+ months"
      ]
    },
    process: {
      title: "Application Process",
      steps: [
        {
          step: 1,
          title: "Determine Eligibility Category",
          description: "Identify which open work permit category applies to your specific situation."
        },
        {
          step: 2,
          title: "Gather Required Documents",
          description: "Collect supporting documentation for your eligibility category and personal documents."
        },
        {
          step: 3,
          title: "Complete Application Forms",
          description: "Fill out work permit application forms with appropriate exemption codes."
        },
        {
          step: 4,
          title: "Pay Fees and Submit",
          description: "Pay applicable fees and submit complete application package."
        },
        {
          step: 5,
          title: "Provide Biometrics",
          description: "Attend biometrics appointment if required for your situation."
        },
        {
          step: 6,
          title: "Receive Decision",
          description: "Wait for processing and receive open work permit upon approval."
        }
      ]
    },
    processingTime: "4-6 months (varies by category and location)",
    fees: "$155 CAD work permit fee + biometrics fee if applicable",
    faqs: [
      {
        question: "Can I study while on an open work permit?",
        answer: "You may be able to study part-time, but for full-time studies exceeding 6 months, you typically need a study permit in addition to your work permit."
      },
      {
        question: "Can spouses of international students get open work permits?",
        answer: "Spouses of international students in certain programs (master's, PhD, or other eligible programs) may qualify for open work permits."
      },
      {
        question: "How long are open work permits valid?",
        answer: "Validity depends on your category and circumstances, typically ranging from the duration of your spouse's permit to several years for protected persons."
      }
    ]
  },
  {
    id: "bridging-open-work-permit",
    title: "Bridging Open Work Permit (BOWP)",
    slug: "bridging-open-work-permit",
    metaTitle: "Bridging Open Work Permit (BOWP) Canada - Maintain Work Authorization | Immigration Lawyers",
    metaDescription: "Get Bridging Open Work Permit (BOWP) to maintain work authorization while permanent residence application is processed. Expert immigration lawyers ensure continuous employment.",
    keywords: ["bridging open work permit", "BOWP Canada", "maintain work status", "permanent residence processing", "work permit extension"],
    hero: {
      title: "Bridging Open Work Permit (BOWP)",
      description: "Maintain your work authorization in Canada while your permanent residence application is being processed. Bridge the gap between permits with expert legal guidance."
    },
    overview: {
      title: "What is a Bridging Open Work Permit?",
      content: [
        "A Bridging Open Work Permit (BOWP) is designed to maintain work authorization for individuals whose permanent residence applications are being processed and whose current work permits are expiring.",
        "BOWPs provide temporary work authorization that allows individuals to continue working for any employer while waiting for their permanent residence application decision.",
        "This permit type prevents gaps in work authorization and ensures continuous employment during the permanent residence processing period."
      ]
    },
    eligibility: {
      title: "Eligibility Requirements",
      requirements: [
        "Current work permit holder in Canada",
        "Submitted application for permanent residence under specific programs",
        "Received positive eligibility assessment (AOR) for PR application",
        "Work permit expires within 4 months or has expired within last 4 months",
        "Not subject to unresolved conditions in Canada",
        "Eligible PR programs include Express Entry, PNP, Quebec programs, and certain others",
        "Must maintain legal status in Canada"
      ]
    },
    process: {
      title: "Application Process",
      steps: [
        {
          step: 1,
          title: "Verify Eligibility",
          description: "Confirm you have a valid PR application and meet BOWP eligibility requirements."
        },
        {
          step: 2,
          title: "Gather Documentation",
          description: "Collect PR application acknowledgment, current work permit, and supporting documents."
        },
        {
          step: 3,
          title: "Submit Application",
          description: "Apply online with complete documentation and pay required fees."
        },
        {
          step: 4,
          title: "Maintain Status",
          description: "Continue working under implied status if application submitted before permit expiry."
        },
        {
          step: 5,
          title: "Receive Decision",
          description: "Wait for BOWP decision while maintaining work authorization."
        },
        {
          step: 6,
          title: "Continue Working",
          description: "Upon approval, continue working with any employer until PR decision or permit expiry."
        }
      ]
    },
    processingTime: "4-6 months",
    fees: "$255 CAD (includes $100 open work permit holder fee)",
    faqs: [
      {
        question: "When should I apply for a BOWP?",
        answer: "Apply when your current work permit expires within 4 months and you have a pending PR application with positive eligibility assessment."
      },
      {
        question: "Can I travel outside Canada with a BOWP?",
        answer: "Yes, but ensure you have proper documentation including valid passport and any required visitor visa to re-enter Canada."
      },
      {
        question: "What if my PR application is refused while on BOWP?",
        answer: "If your PR application is refused, your BOWP becomes invalid. You must either leave Canada, apply for restoration of status, or submit a new application."
      }
    ]
  },
  {
    id: "work-while-studying",
    title: "Work while Studying",
    slug: "work-while-studying",
    metaTitle: "Work While Studying in Canada - Student Work Authorization | Immigration Lawyers",
    metaDescription: "Understand work authorization for international students in Canada. Expert immigration lawyers explain on-campus, off-campus, and co-op work permissions for students.",
    keywords: ["work while studying Canada", "international student work", "on-campus work", "off-campus work", "student work permit"],
    hero: {
      title: "Working While Studying in Canada",
      description: "Maximize your Canadian education experience by understanding student work opportunities. Learn about on-campus, off-campus, and co-op work authorization for international students."
    },
    overview: {
      title: "Student Work Authorization",
      content: [
        "International students in Canada have various opportunities to work while pursuing their studies. Work authorization depends on the type of study permit, program of study, and specific work location.",
        "Students can typically work on-campus without additional authorization, while off-campus work requires meeting specific conditions. Co-op and internship work may require separate work permits.",
        "Working while studying provides valuable Canadian experience, helps with living expenses, and can contribute to future permanent residence applications."
      ]
    },
    eligibility: {
      title: "Types of Student Work Authorization",
      requirements: [
        "On-campus work: Available to all full-time students with valid study permits",
        "Off-campus work: 20 hours/week during studies, full-time during breaks",
        "Must be enrolled at Designated Learning Institution (DLI)",
        "Must maintain full-time student status (except final semester)",
        "Must have Social Insurance Number (SIN)",
        "Co-op/internship work may require separate work permit",
        "Work must not be essential part of program (for off-campus work)"
      ]
    },
    process: {
      title: "Getting Started with Student Work",
      steps: [
        {
          step: 1,
          title: "Verify Study Permit Conditions",
          description: "Check your study permit for work authorization conditions and restrictions."
        },
        {
          step: 2,
          title: "Apply for Social Insurance Number",
          description: "Obtain SIN from Service Canada to legally work in Canada."
        },
        {
          step: 3,
          title: "Choose Work Type",
          description: "Decide between on-campus or off-campus work based on your situation and preferences."
        },
        {
          step: 4,
          title: "Find Employment",
          description: "Search for suitable employment opportunities while respecting work hour limitations."
        },
        {
          step: 5,
          title: "Maintain Student Status",
          description: "Ensure you maintain full-time enrollment and academic standing."
        },
        {
          step: 6,
          title: "Track Work Hours",
          description: "Monitor work hours to ensure compliance with permit conditions."
        }
      ]
    },
    processingTime: "No additional processing for authorized work",
    fees: "No fees for authorized student work",
    faqs: [
      {
        question: "How many hours can international students work in Canada?",
        answer: "Students can work up to 20 hours per week during regular academic sessions and full-time during scheduled breaks like summer and winter holidays."
      },
      {
        question: "Can students work without a study permit condition allowing work?",
        answer: "No, students must have work authorization on their study permit. Older permits may not include this condition and may require renewal."
      },
      {
        question: "Does student work experience count for permanent residence?",
        answer: "Yes, qualifying work experience gained while studying can count toward permanent residence applications through various programs like Canadian Experience Class."
      }
    ]
  },
  {
    id: "post-graduation-work-permit",
    title: "Post Graduation Work Permit (PGWP)",
    slug: "post-graduation-work-permit",
    metaTitle: "Post-Graduation Work Permit (PGWP) Canada - After Studies Work Authorization | Immigration Lawyers",
    metaDescription: "Secure Post-Graduation Work Permit (PGWP) in Canada after completing studies. Expert immigration lawyers help graduates obtain open work permits for Canadian experience.",
    keywords: ["post graduation work permit", "PGWP Canada", "after studies work permit", "graduate work authorization", "international graduate"],
    hero: {
      title: "Post-Graduation Work Permit (PGWP)",
      description: "Transform your Canadian education into valuable work experience. Get expert guidance on obtaining your PGWP and building a pathway to permanent residence."
    },
    overview: {
      title: "About Post-Graduation Work Permits",
      content: [
        "The Post-Graduation Work Permit (PGWP) allows international students who have graduated from eligible Canadian institutions to work in Canada for up to three years, depending on the length of their study program.",
        "PGWPs are open work permits, meaning graduates can work for any employer in Canada without requiring a job offer or Labour Market Impact Assessment (LMIA).",
        "This permit provides an excellent opportunity to gain Canadian work experience, which is valuable for permanent residence applications through various immigration programs."
      ]
    },
    eligibility: {
      title: "PGWP Eligibility Requirements",
      requirements: [
        "Graduated from eligible Designated Learning Institution (DLI)",
        "Completed program of study at least 8 months in length",
        "Maintained full-time student status throughout program",
        "Applied within 180 days of receiving final grades or graduation",
        "Had valid study permit when applying",
        "Program must be academic, vocational, or professional training",
        "Completed program in Canada (with limited exceptions for online learning)"
      ]
    },
    process: {
      title: "PGWP Application Process",
      steps: [
        {
          step: 1,
          title: "Verify Eligibility",
          description: "Confirm your program and institution are eligible for PGWP and you meet all requirements."
        },
        {
          step: 2,
          title: "Obtain Final Transcripts",
          description: "Get official final transcripts or completion letter from your institution."
        },
        {
          step: 3,
          title: "Prepare Application",
          description: "Complete application forms and gather all required supporting documents."
        },
        {
          step: 4,
          title: "Submit Application",
          description: "Apply online within 180 days of program completion with all required documentation."
        },
        {
          step: 5,
          title: "Provide Biometrics",
          description: "Attend biometrics appointment if required for your application."
        },
        {
          step: 6,
          title: "Receive PGWP",
          description: "Upon approval, receive your open work permit and begin employment in Canada."
        }
      ]
    },
    processingTime: "2-4 months",
    fees: "$255 CAD (includes open work permit holder fee)",
    faqs: [
      {
        question: "How long is a PGWP valid for?",
        answer: "PGWP validity depends on program length: 8 months to 2 years = same length as program; 2+ years = 3-year permit. Maximum one PGWP per person."
      },
      {
        question: "Can I apply for PGWP if I studied online due to COVID-19?",
        answer: "Yes, special measures allowed online study during COVID-19 to count toward PGWP eligibility, with specific conditions and timeframes."
      },
      {
        question: "Can I include my spouse on my PGWP application?",
        answer: "No, but your spouse may be eligible for their own open work permit as the spouse of a PGWP holder, depending on your program level."
      }
    ]
  },
  {
    id: "pgwp-eligibility",
    title: "PGWP Eligibility",
    slug: "pgwp-eligibility",
    metaTitle: "PGWP Eligibility Requirements Canada - Post-Graduation Work Permit Qualification | Immigration Experts",
    metaDescription: "Understand PGWP eligibility requirements in Canada. Expert immigration lawyers explain qualification criteria, eligible institutions, and program requirements for graduates.",
    keywords: ["PGWP eligibility", "post graduation work permit requirements", "eligible institutions Canada", "DLI eligibility", "graduate work permit qualification"],
    hero: {
      title: "PGWP Eligibility Requirements",
      description: "Understand the detailed requirements for Post-Graduation Work Permit eligibility. Ensure you qualify before completing your studies to maximize your opportunities."
    },
    overview: {
      title: "Understanding PGWP Eligibility",
      content: [
        "PGWP eligibility is determined by multiple factors including the institution attended, program characteristics, study duration, and personal circumstances. Not all programs or institutions qualify for PGWP.",
        "It's crucial to verify eligibility before starting or completing your studies, as PGWP is a one-time opportunity that cannot be repeated for subsequent programs.",
        "Recent changes to PGWP eligibility have introduced additional requirements for certain fields of study and institution types."
      ]
    },
    eligibility: {
      title: "Detailed Eligibility Criteria",
      requirements: [
        "Institution: Must be a Designated Learning Institution (DLI) eligible for PGWP",
        "Program Duration: Minimum 8 months of full-time study",
        "Program Type: Academic, vocational, or professional training programs",
        "Study Completion: Must have completed the program, not just attended",
        "Study Permit Status: Must have had valid study permit throughout studies",
        "Full-time Enrollment: Maintained full-time status (with limited exceptions)",
        "Application Timing: Apply within 180 days of final grades/graduation",
        "Previous PGWP: Must not have received PGWP before"
      ]
    },
    process: {
      title: "Verifying Your Eligibility",
      steps: [
        {
          step: 1,
          title: "Check Institution Status",
          description: "Verify your institution is DLI-designated and PGWP-eligible on government website."
        },
        {
          step: 2,
          title: "Review Program Requirements",
          description: "Confirm your program meets duration, type, and field-of-study requirements."
        },
        {
          step: 3,
          title: "Assess Study Period",
          description: "Review your study permit history and enrollment records for full-time status."
        },
        {
          step: 4,
          title: "Calculate Program Length",
          description: "Determine program duration to understand PGWP validity period you'll receive."
        },
        {
          step: 5,
          title: "Plan Application Timeline",
          description: "Prepare to apply within 180-day window after receiving final grades."
        },
        {
          step: 6,
          title: "Consult Expert if Unsure",
          description: "Seek professional advice if any aspect of eligibility is unclear or complex."
        }
      ]
    },
    processingTime: "Eligibility verification: immediate; PGWP processing: 2-4 months",
    fees: "No fees for eligibility verification; $255 CAD for PGWP application",
    faqs: [
      {
        question: "Are all Canadian colleges eligible for PGWP?",
        answer: "No, not all institutions are PGWP-eligible. Only certain Designated Learning Institutions qualify. Private institutions have limited eligibility."
      },
      {
        question: "Can I get PGWP for a certificate program?",
        answer: "Certificate programs may qualify if they meet the 8-month minimum duration and are offered by eligible institutions, but this varies by program type."
      },
      {
        question: "What if I had part-time status during my final semester?",
        answer: "Part-time status in the final semester may be acceptable if it was necessary to complete your program and you were full-time throughout other semesters."
      }
    ]
  }
];

export const studyPages: StudyPage[] = [
  {
    id: "student-visa",
    title: "Student Visa",
    slug: "student-visa",
    metaTitle: "Student Visa Canada - Study Permit Application | Expert Immigration Lawyers",
    metaDescription: "Get comprehensive help with Canadian student visa applications. Our immigration lawyers provide expert guidance on study permits with high success rates for international students.",
    keywords: ["student visa Canada", "study permit application", "Canadian student visa", "international student visa", "study in Canada"],
    hero: {
      title: "Student Visa (Study Permit) Canada",
      description: "Transform your educational dreams into reality with expert guidance on Canadian student visa applications. We help international students secure study permits efficiently and successfully."
    },
    overview: {
      title: "What is a Canadian Student Visa?",
      content: [
        "A Canadian student visa, officially called a study permit, is a document issued by Immigration, Refugees and Citizenship Canada (IRCC) that allows foreign nationals to study at designated learning institutions in Canada.",
        "The study permit serves as your authorization to remain in Canada as a student for the duration of your program. Most international students also need a temporary resident visa (visitor visa) or electronic travel authorization (eTA) to enter Canada.",
        "With a study permit, you may be eligible to work part-time while studying and full-time during scheduled breaks. After graduation, you may qualify for a Post-Graduation Work Permit (PGWP)."
      ]
    },
    eligibility: {
      title: "Student Visa Eligibility Requirements",
      requirements: [
        "Acceptance letter from designated learning institution (DLI)",
        "Proof of financial support for tuition and living expenses",
        "No criminal record and provide police certificates if required",
        "Medical examination (if required based on country of origin)",
        "Letter of explanation outlining study plans and career goals",
        "Proof of ties to home country (intention to return after studies)",
        "Language proficiency scores if required by institution",
        "Payment of application fees and biometrics"
      ]
    },
    process: {
      title: "Student Visa Application Process",
      steps: [
        {
          step: 1,
          title: "Get Acceptance from DLI",
          description: "Apply and receive acceptance letter from a designated learning institution approved by the Canadian government."
        },
        {
          step: 2,
          title: "Gather Required Documents",
          description: "Collect all necessary documents including financial proof, academic transcripts, and identity documents."
        },
        {
          step: 3,
          title: "Complete Online Application",
          description: "Submit study permit application online through IRCC portal with all supporting documents."
        },
        {
          step: 4,
          title: "Pay Fees and Provide Biometrics",
          description: "Pay application fees and attend biometrics appointment at designated service location."
        },
        {
          step: 5,
          title: "Medical Exam (if required)",
          description: "Complete medical examination by panel physician if required based on your country of residence."
        },
        {
          step: 6,
          title: "Receive Decision and Travel",
          description: "Upon approval, receive study permit and make travel arrangements to Canada."
        }
      ]
    },
    processingTime: "4-12 weeks (varies by country of residence)",
    fees: "$150 CAD study permit fee + $85 CAD biometrics fee",
    faqs: [
      {
        question: "How much money do I need to show for a Canadian student visa?",
        answer: "You need to show proof of funds covering tuition fees plus $10,000 CAD per year for living expenses ($11,000 CAD for Quebec residents). Additional funds required for accompanying family members."
      },
      {
        question: "Can I work while studying in Canada?",
        answer: "Yes, most international students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks without needing a separate work permit."
      },
      {
        question: "How long is a study permit valid?",
        answer: "Study permits are typically valid for the length of your program plus 90 days. The permit allows you to remain in Canada until you apply for another permit or leave the country."
      }
    ]
  },
  {
    id: "student-visa-refusal",
    title: "Student Visa Refusal",
    slug: "student-visa-refusal",
    metaTitle: "Student Visa Refusal Canada - Reasons and Solutions | Immigration Appeal Lawyers",
    metaDescription: "Overcome Canadian student visa refusal with expert legal help. Our immigration lawyers analyze refusal reasons and develop successful reapplication strategies for international students.",
    keywords: ["student visa refusal Canada", "study permit denied", "visa refusal reasons", "student visa appeal", "reapplication strategy"],
    hero: {
      title: "Student Visa Refusal - Expert Solutions",
      description: "Don't let a student visa refusal end your Canadian education dreams. Our experienced immigration lawyers analyze refusal reasons and develop winning reapplication strategies."
    },
    overview: {
      title: "Understanding Student Visa Refusals",
      content: [
        "Student visa refusals are unfortunately common, with various factors contributing to negative decisions. Understanding the specific reasons for refusal is crucial for developing an effective response strategy.",
        "Common refusal reasons include insufficient financial proof, weak ties to home country, unconvincing study plans, or concerns about the applicant's intention to leave Canada after studies.",
        "A refusal is not permanent, and with proper analysis and preparation, many applicants successfully obtain approval on subsequent applications."
      ]
    },
    eligibility: {
      title: "Common Student Visa Refusal Reasons",
      requirements: [
        "Insufficient financial resources or proof of funding",
        "Weak ties to home country - concern about returning",
        "Unconvincing letter of explanation or study plan",
        "Academic background not aligned with chosen program",
        "Previous immigration violations or overstay",
        "Incomplete or inconsistent documentation",
        "Medical inadmissibility or failure to complete medical exam",
        "Security concerns or criminal background issues"
      ]
    },
    process: {
      title: "Addressing Student Visa Refusal",
      steps: [
        {
          step: 1,
          title: "Analyze Refusal Letter",
          description: "Carefully review the refusal letter to understand specific concerns raised by the visa officer."
        },
        {
          step: 2,
          title: "Assess Your Situation",
          description: "Evaluate your circumstances and documentation to identify weaknesses in the original application."
        },
        {
          step: 3,
          title: "Strengthen Documentation",
          description: "Address identified weaknesses by gathering additional evidence and improving supporting documents."
        },
        {
          step: 4,
          title: "Develop New Strategy",
          description: "Create comprehensive reapplication strategy addressing all refusal concerns with stronger evidence."
        },
        {
          step: 5,
          title: "Resubmit Application",
          description: "Submit new application with improved documentation and compelling responses to previous concerns."
        },
        {
          step: 6,
          title: "Consider Professional Help",
          description: "Consult immigration lawyer for complex cases or multiple refusals to maximize approval chances."
        }
      ]
    },
    processingTime: "Reapplication: 4-12 weeks (same as initial application)",
    fees: "Full application fees apply for reapplication",
    faqs: [
      {
        question: "Can I reapply immediately after a student visa refusal?",
        answer: "Yes, you can reapply immediately. However, it's advisable to address the refusal reasons first and strengthen your application before resubmitting."
      },
      {
        question: "Will a student visa refusal affect future applications?",
        answer: "A refusal doesn't automatically affect future applications, but you must declare it. Properly addressing refusal reasons actually strengthens subsequent applications."
      },
      {
        question: "Should I change my program or school after a refusal?",
        answer: "Not necessarily. The issue is usually with the application presentation rather than program choice. However, if the program doesn't align with your background, consider adjustments."
      }
    ]
  },
  {
    id: "appeal-refused-study-permit",
    title: "Can I Appeal my Refused Study Permit?",
    slug: "appeal-refused-study-permit",
    metaTitle: "Appeal Refused Study Permit Canada - Legal Options and Process | Immigration Appeal Lawyers",
    metaDescription: "Learn about options after study permit refusal in Canada. Expert immigration lawyers explain appeal processes, judicial review, and alternative strategies for international students.",
    keywords: ["appeal study permit refusal", "judicial review study permit", "immigration appeal Canada", "study permit refusal options", "visa appeal process"],
    hero: {
      title: "Appealing a Refused Study Permit",
      description: "Explore your legal options after a study permit refusal. Understanding appeal processes and alternative strategies can help you achieve your Canadian education goals."
    },
    overview: {
      title: "Study Permit Refusal Appeal Options",
      content: [
        "Unlike some immigration programs, there is no traditional 'appeal' process for refused study permit applications. However, several options exist to challenge a negative decision or pursue alternative paths.",
        "The primary legal remedy is judicial review through the Federal Court of Canada, which reviews whether the decision was made according to law and procedural fairness.",
        "Most commonly, applicants choose to reapply with strengthened documentation rather than pursuing costly and time-consuming legal proceedings."
      ]
    },
    eligibility: {
      title: "Options After Study Permit Refusal",
      requirements: [
        "Judicial Review: Challenge decision-making process in Federal Court",
        "Reapplication: Submit new application with improved documentation",
        "Reconsideration request: Limited circumstances only",
        "Access to Information request: Obtain detailed case notes",
        "Ministerial intervention: Exceptional humanitarian cases",
        "Legal consultation: Assess viability of different options",
        "Alternative programs: Consider different institutions or programs",
        "Temporary resident permit: Special circumstances"
      ]
    },
    process: {
      title: "Judicial Review Process",
      steps: [
        {
          step: 1,
          title: "Assess Grounds for Review",
          description: "Determine if there are legal grounds such as procedural unfairness or unreasonable decision-making."
        },
        {
          step: 2,
          title: "File Application Promptly",
          description: "Submit Federal Court application within strict 15-day deadline from refusal decision."
        },
        {
          step: 3,
          title: "Obtain Case Documentation",
          description: "Request certified tribunal record and detailed case notes from IRCC through court process."
        },
        {
          step: 4,
          title: "Legal Arguments Preparation",
          description: "Develop legal arguments challenging the decision-making process and evidence consideration."
        },
        {
          step: 5,
          title: "Court Proceedings",
          description: "Participate in court hearings where judge reviews the administrative decision for legal errors."
        },
        {
          step: 6,
          title: "Court Decision",
          description: "Receive court judgment which may uphold refusal or order new decision by different officer."
        }
      ]
    },
    processingTime: "Judicial review: 6-18 months; Reapplication: 4-12 weeks",
    fees: "Federal Court filing fee: $50 CAD; Legal costs: $3,000-$10,000+",
    faqs: [
      {
        question: "What is the success rate for study permit judicial reviews?",
        answer: "Success rates are relatively low (15-25%) as courts only review legal process, not the merits of the decision. Most cases are better served by reapplication."
      },
      {
        question: "Can I continue studying while pursuing judicial review?",
        answer: "No, judicial review doesn't provide legal status in Canada. You cannot study without a valid study permit regardless of pending legal proceedings."
      },
      {
        question: "Should I appeal or reapply after study permit refusal?",
        answer: "Generally, reapplication is faster, less expensive, and more likely to succeed. Judicial review should only be considered when there are clear legal errors in the decision-making process."
      }
    ]
  },
  {
    id: "visa-refusal-rates",
    title: "Visa Refusal Rates",
    slug: "visa-refusal-rates",
    metaTitle: "Canada Visa Refusal Rates by Country - Student and Visitor Visa Statistics | Immigration Data",
    metaDescription: "Understand Canada visa refusal rates by country and visa type. Expert analysis of student visa, visitor visa, and work permit approval statistics to improve application success.",
    keywords: ["Canada visa refusal rates", "student visa approval rates", "visitor visa statistics", "immigration refusal rates by country", "visa success rates"],
    hero: {
      title: "Canadian Visa Refusal Rates Analysis",
      description: "Understanding visa refusal rates by country and application type helps you prepare stronger applications. Get expert insights into approval trends and success factors."
    },
    overview: {
      title: "Understanding Visa Refusal Statistics",
      content: [
        "Canadian visa refusal rates vary significantly by country of origin, visa type, and application quality. These statistics provide valuable insights for prospective applicants planning their immigration strategy.",
        "Student visa refusal rates have historically ranged from 15% to 60% depending on the applicant's country, with higher refusal rates often correlating with economic factors and previous overstay patterns.",
        "Understanding these patterns helps applicants prepare more comprehensive applications and address common concerns that lead to refusals."
      ]
    },
    eligibility: {
      title: "Factors Affecting Refusal Rates",
      requirements: [
        "Country of origin and economic stability",
        "Previous visa compliance history (country-specific)",
        "Application completeness and documentation quality",
        "Financial proof adequacy and source verification",
        "Ties to home country strength",
        "Educational background alignment with program choice",
        "Age and profile consistency with study/visit plans",
        "Immigration history and previous refusals"
      ]
    },
    process: {
      title: "Using Refusal Rate Data Effectively",
      steps: [
        {
          step: 1,
          title: "Research Your Country's Rates",
          description: "Review official statistics for your country's approval rates for your specific visa category."
        },
        {
          step: 2,
          title: "Identify Common Refusal Reasons",
          description: "Study typical refusal patterns for applicants from your region and demographic."
        },
        {
          step: 3,
          title: "Strengthen Weak Areas",
          description: "Address common concerns proactively in your application preparation."
        },
        {
          step: 4,
          title: "Document Everything Thoroughly",
          description: "Provide comprehensive documentation exceeding minimum requirements to overcome statistical biases."
        },
        {
          step: 5,
          title: "Consider Professional Help",
          description: "If from high-refusal rate country, consider expert assistance to navigate additional scrutiny."
        },
        {
          step: 6,
          title: "Plan Alternative Strategies",
          description: "Develop backup plans including different programs or delayed applications if initial attempt fails."
        }
      ]
    },
    processingTime: "Research phase: 1-2 weeks; Application improvement: varies",
    fees: "No fees for research; application fees vary by visa type",
    faqs: [
      {
        question: "Which countries have the highest student visa refusal rates for Canada?",
        answer: "Historically, countries with higher refusal rates include those with economic challenges or high overstay patterns. However, well-prepared applications from any country can succeed."
      },
      {
        question: "Do refusal rates change over time?",
        answer: "Yes, refusal rates fluctuate based on economic conditions, policy changes, and bilateral relationships. Recent statistics are more relevant than historical data."
      },
      {
        question: "Can I overcome high refusal rates from my country?",
        answer: "Absolutely. Strong applications with comprehensive documentation, clear ties to home country, and compelling study/visit plans succeed regardless of country-specific statistics."
      }
    ]
  },
  {
    id: "refused-pgwp",
    title: "Refused PGWP",
    slug: "refused-pgwp",
    metaTitle: "Refused PGWP Canada - Post-Graduation Work Permit Refusal Solutions | Immigration Lawyers",
    metaDescription: "Overcome refused PGWP applications in Canada. Expert immigration lawyers analyze refusal reasons and develop strategies for post-graduation work permit success.",
    keywords: ["refused PGWP", "post graduation work permit refusal", "PGWP denial reasons", "PGWP appeal", "graduate work permit refusal"],
    hero: {
      title: "Refused PGWP - Expert Solutions",
      description: "A refused Post-Graduation Work Permit doesn't end your career prospects in Canada. Our immigration experts help analyze refusal reasons and explore available options."
    },
    overview: {
      title: "Understanding PGWP Refusals",
      content: [
        "Post-Graduation Work Permit (PGWP) refusals can be devastating for international graduates who have invested significantly in Canadian education. Understanding refusal reasons is crucial for determining next steps.",
        "Common PGWP refusal reasons include eligibility issues, documentation problems, timing concerns, or changes in immigration policies affecting specific programs or institutions.",
        "While PGWP is typically a one-time opportunity, certain circumstances may allow for reconsideration or alternative pathways to work authorization in Canada."
      ]
    },
    eligibility: {
      title: "Common PGWP Refusal Reasons",
      requirements: [
        "Institution not eligible for PGWP at time of study",
        "Program duration less than 8 months",
        "Applied more than 180 days after graduation",
        "Study permit expired before graduation",
        "Part-time studies or unauthorized absence from studies",
        "Previously received PGWP (one per lifetime rule)",
        "Incomplete documentation or missing transcripts",
        "Online studies exceeding permitted limits"
      ]
    },
    process: {
      title: "Options After PGWP Refusal",
      steps: [
        {
          step: 1,
          title: "Analyze Refusal Letter",
          description: "Carefully review refusal reasons to understand specific grounds for denial."
        },
        {
          step: 2,
          title: "Verify Eligibility Requirements",
          description: "Cross-reference your situation against PGWP eligibility criteria to identify discrepancies."
        },
        {
          step: 3,
          title: "Gather Additional Evidence",
          description: "Collect any missing documentation that might support your eligibility claim."
        },
        {
          step: 4,
          title: "Consider Reconsideration",
          description: "If eligibility error occurred, submit reconsideration request with additional evidence."
        },
        {
          step: 5,
          title: "Explore Alternative Options",
          description: "Research other work permit categories or pathways if PGWP is not available."
        },
        {
          step: 6,
          title: "Legal Consultation",
          description: "Consult immigration lawyer for complex cases or potential judicial review options."
        }
      ]
    },
    processingTime: "Reconsideration: 2-4 months; Alternative permits: varies",
    fees: "No fees for reconsideration; other permit fees apply",
    faqs: [
      {
        question: "Can I reapply for PGWP after refusal?",
        answer: "Generally no, as PGWP is a one-time opportunity. However, if the refusal was due to officer error and you're still within eligibility timeframes, reconsideration may be possible."
      },
      {
        question: "What work permit options exist after PGWP refusal?",
        answer: "Alternatives include employer-specific work permits with LMIA, spouse work permits (if applicable), or bridging open work permits for pending permanent residence applications."
      },
      {
        question: "Can I challenge a PGWP refusal in court?",
        answer: "Judicial review is possible within 15 days of refusal, but success rates are low unless there are clear procedural errors or unreasonable decision-making."
      }
    ]
  }
];

export const visitPages: VisitPage[] = [
  {
    id: "visitor-visa-refusal",
    title: "Visitor Visa Refusal: eTA and TRV",
    slug: "visitor-visa-refusal",
    metaTitle: "Visitor Visa Refusal Canada - eTA and TRV Refusal Solutions | Immigration Lawyers",
    metaDescription: "Expert help with visitor visa refusal appeals in Canada. Our immigration lawyers provide comprehensive support for eTA and TRV refusal cases with proven success strategies.",
    keywords: ["visitor visa refusal", "TRV refusal", "eTA refusal", "Canada visitor visa", "visa refusal appeal", "temporary resident visa"],
    hero: {
      title: "Visitor Visa Refusal: eTA and TRV Solutions",
      description: "Overcome visitor visa refusal with expert legal guidance. We help navigate eTA and TRV refusal challenges to secure your entry to Canada."
    },
    overview: {
      title: "Understanding Visitor Visa Refusal",
      content: [
        "Visitor visa refusal affects thousands of applicants annually seeking to visit Canada for tourism, business, or family visits. Both electronic Travel Authorization (eTA) and Temporary Resident Visa (TRV) applications can face rejection for various reasons.",
        "Common refusal grounds include insufficient financial support, lack of ties to home country, unclear travel purpose, or concerns about returning after the visit. Understanding specific refusal reasons is crucial for successful reapplication or appeal strategies.",
        "Professional legal assistance significantly improves success rates for overturning refusal decisions or preparing stronger subsequent applications with proper documentation and evidence."
      ]
    },
    eligibility: {
      title: "Common Refusal Reasons",
      requirements: [
        "Insufficient funds to support visit and return journey",
        "Lack of strong ties to home country (employment, property, family)",
        "Unclear or inconsistent travel purpose and itinerary",
        "Previous immigration violations or overstaying in Canada",
        "Criminal record or security concerns",
        "Medical inadmissibility issues",
        "Incomplete or fraudulent documentation",
        "Officer concerns about intention to return home"
      ]
    },
    process: {
      title: "Overcoming Refusal Process",
      steps: [
        {
          step: 1,
          title: "Analyze Refusal Letter",
          description: "Carefully review the refusal letter to understand specific grounds and officer concerns."
        },
        {
          step: 2,
          title: "Gather Additional Evidence",
          description: "Collect stronger documentation addressing each refusal reason with compelling evidence."
        },
        {
          step: 3,
          title: "Address Officer Concerns",
          description: "Prepare detailed explanations and supporting documents for each concern raised."
        },
        {
          step: 4,
          title: "Submit New Application",
          description: "File a comprehensive new application with enhanced documentation and explanations."
        },
        {
          step: 5,
          title: "Follow Up and Monitor",
          description: "Track application progress and respond promptly to any additional requests."
        }
      ]
    },
    processingTime: "New application: 2-8 weeks depending on country",
    fees: "eTA: $7 CAD; TRV: $100 CAD per person",
    faqs: [
      {
        question: "Can I reapply immediately after refusal?",
        answer: "Yes, you can reapply immediately, but it's crucial to address the refusal reasons with stronger evidence and documentation to avoid repeated rejections."
      },
      {
        question: "How long should I wait before reapplying?",
        answer: "There's no mandatory waiting period, but taking time to gather proper documentation and address refusal reasons significantly improves success chances."
      },
      {
        question: "Will previous refusal affect future applications?",
        answer: "Previous refusals must be disclosed in future applications, but addressing the refusal reasons properly can lead to approval despite prior rejections."
      }
    ]
  },
  {
    id: "appeal-refused-trv",
    title: "Can I Appeal my Refused TRV?",
    slug: "appeal-refused-trv",
    metaTitle: "Appeal Refused TRV Canada - Temporary Resident Visa Appeal Process | Immigration Lawyers",
    metaDescription: "Learn about TRV appeal options in Canada. Our immigration lawyers explain judicial review processes and alternative strategies for refused temporary resident visa applications.",
    keywords: ["TRV appeal", "temporary resident visa appeal", "judicial review", "visa refusal appeal", "Federal Court appeal", "immigration appeal"],
    hero: {
      title: "Can I Appeal my Refused TRV?",
      description: "Understand your options after TRV refusal. Explore judicial review processes and alternative strategies to challenge refused temporary resident visa decisions."
    },
    overview: {
      title: "TRV Appeal Options in Canada",
      content: [
        "Unlike some immigration applications, there is no formal appeal process for refused Temporary Resident Visa (TRV) applications. However, several legal avenues exist to challenge negative decisions through judicial review at the Federal Court.",
        "Judicial review is available for cases involving procedural fairness violations, unreasonable decision-making, or legal errors by visa officers. This process examines whether the officer followed proper procedures and made reasonable conclusions based on evidence.",
        "Alternative strategies include submitting new applications with enhanced documentation, requesting reconsideration with additional evidence, or addressing specific officer concerns identified in refusal letters."
      ]
    },
    eligibility: {
      title: "Judicial Review Grounds",
      requirements: [
        "Procedural fairness violations during application review",
        "Unreasonable decision-making by the visa officer",
        "Legal errors in interpreting immigration law or policy",
        "Bias or appearance of bias in decision-making process",
        "Failure to consider relevant evidence or factors",
        "Reliance on irrelevant or incorrect information",
        "Inadequate reasons provided for refusal decision",
        "Violation of Charter rights or human rights"
      ]
    },
    process: {
      title: "Judicial Review Process",
      steps: [
        {
          step: 1,
          title: "Legal Assessment",
          description: "Obtain legal review of refusal decision to identify potential grounds for judicial review."
        },
        {
          step: 2,
          title: "File Leave Application",
          description: "Submit application for leave (permission) to Federal Court within 15 days of refusal."
        },
        {
          step: 3,
          title: "Prepare Court Materials",
          description: "Compile court record, legal arguments, and supporting affidavits for the case."
        },
        {
          step: 4,
          title: "Leave Decision",
          description: "Await Federal Court decision on whether to grant leave to proceed with judicial review."
        },
        {
          step: 5,
          title: "Judicial Review Hearing",
          description: "If leave is granted, proceed with judicial review hearing before Federal Court judge."
        },
        {
          step: 6,
          title: "Court Decision",
          description: "Receive court decision which may quash refusal and order new decision by different officer."
        }
      ]
    },
    processingTime: "Leave application: 3-6 months; Full judicial review: 12-18 months",
    fees: "Federal Court fees: $50-$400 CAD; Legal representation varies",
    faqs: [
      {
        question: "What is the time limit for judicial review?",
        answer: "You must file for leave within 15 days of receiving the refusal decision. This deadline is strictly enforced with very limited exceptions."
      },
      {
        question: "What happens if judicial review is successful?",
        answer: "The court may quash the refusal decision and order a new decision by a different visa officer, but it doesn't guarantee visa approval."
      },
      {
        question: "Is legal representation necessary?",
        answer: "While not mandatory, legal representation is highly recommended given the complexity of Federal Court procedures and technical legal requirements."
      }
    ]
  },
  {
    id: "visa-refusal-rates",
    title: "Visa Refusal Rates",
    slug: "visa-refusal-rates",
    metaTitle: "Canada Visa Refusal Rates by Country - Immigration Statistics | Expert Analysis",
    metaDescription: "Comprehensive analysis of Canada visa refusal rates by country and visa type. Get expert insights on improving application success rates with detailed statistics.",
    keywords: ["visa refusal rates", "Canada visa statistics", "TRV refusal rates", "visitor visa approval rates", "immigration statistics", "visa success rates"],
    hero: {
      title: "Canada Visa Refusal Rates Analysis",
      description: "Understand visa refusal statistics across countries and visa types. Get insights to improve your application success rate with comprehensive data analysis."
    },
    overview: {
      title: "Understanding Visa Refusal Statistics",
      content: [
        "Canada's visa refusal rates vary significantly by country, visa type, and applicant circumstances. Global refusal rates for temporary resident visas average 20-40%, but can range from under 5% for low-risk countries to over 80% for high-risk regions.",
        "Refusal rates are influenced by factors including economic conditions in applicant's home country, historical compliance rates, bilateral relations with Canada, and individual applicant profiles. Understanding these patterns helps in application preparation.",
        "Statistics show significant variations between visa categories, with visitor visas typically having different approval rates than study permits or work permits. Professional guidance can help navigate these statistical realities."
      ]
    },
    eligibility: {
      title: "Factors Affecting Refusal Rates",
      requirements: [
        "Applicant's country of residence and citizenship",
        "Purpose of visit (tourism, business, family visit)",
        "Previous travel history to Canada and other countries",
        "Economic conditions in home country",
        "Individual financial circumstances and documentation",
        "Strength of ties to home country",
        "Application completeness and quality",
        "Seasonal and processing center variations"
      ]
    },
    process: {
      title: "Improving Application Success",
      steps: [
        {
          step: 1,
          title: "Research Country-Specific Rates",
          description: "Review refusal rates for your country and understand common refusal reasons."
        },
        {
          step: 2,
          title: "Strengthen Application Profile",
          description: "Address high-risk factors with strong documentation and compelling evidence."
        },
        {
          step: 3,
          title: "Professional Assessment",
          description: "Obtain expert evaluation of application strength before submission."
        },
        {
          step: 4,
          title: "Enhanced Documentation",
          description: "Provide comprehensive supporting documents addressing all potential concerns."
        },
        {
          step: 5,
          title: "Strategic Timing",
          description: "Consider optimal timing based on processing trends and personal circumstances."
        }
      ]
    },
    processingTime: "Statistical analysis: Updated annually; Application improvements: Immediate",
    fees: "No fees for accessing statistics; Professional consultation varies",
    faqs: [
      {
        question: "Which countries have the highest refusal rates?",
        answer: "Countries with challenging economic conditions or limited travel history typically show higher refusal rates, often exceeding 60-80% for temporary resident visas."
      },
      {
        question: "Do refusal rates change over time?",
        answer: "Yes, refusal rates fluctuate based on economic conditions, policy changes, and global events. Annual statistics show these variations clearly."
      },
      {
        question: "How can I check my country's specific rates?",
        answer: "Immigration, Refugees and Citizenship Canada publishes annual statistics showing approval and refusal rates by country and visa category."
      }
    ]
  },
  {
    id: "super-visa",
    title: "Super Visa for Parents and Grandparents",
    slug: "super-visa",
    metaTitle: "Super Visa Canada - Parents and Grandparents Visa | Complete Application Guide",
    metaDescription: "Complete guide to Canada Super Visa for parents and grandparents. Expert assistance with applications, requirements, and medical insurance for 10-year multi-entry visas.",
    keywords: ["Super Visa Canada", "parents grandparents visa", "multi-entry visa", "family visit Canada", "Super Visa requirements", "parent visa Canada"],
    hero: {
      title: "Super Visa for Parents and Grandparents",
      description: "Bring your parents and grandparents to Canada with Super Visa. Get expert help with applications, medical insurance, and documentation for 10-year multi-entry access."
    },
    overview: {
      title: "What is the Super Visa?",
      content: [
        "The Super Visa is a multi-entry visa allowing parents and grandparents of Canadian citizens and permanent residents to visit Canada for up to 2 years per visit over a 10-year period without needing to renew their status.",
        "Unlike regular visitor visas, Super Visa has specific requirements including mandatory medical insurance, higher income thresholds for sponsors, and medical examinations. It provides greater flexibility for extended family visits.",
        "This program recognizes the importance of family reunification while maintaining temporary status, offering a pathway for parents and grandparents to spend significant time with their Canadian families."
      ]
    },
    eligibility: {
      title: "Super Visa Requirements",
      requirements: [
        "Parent or grandparent of Canadian citizen or permanent resident",
        "Valid medical insurance from approved Canadian insurer ($100,000 minimum)",
        "Medical examination completed by designated panel physician",
        "Letter of invitation from child or grandchild in Canada",
        "Proof of sponsor's income meeting minimum threshold",
        "Proof of strong ties to home country",
        "No criminal record and pass security clearance",
        "Demonstrate intent to return to home country"
      ]
    },
    process: {
      title: "Super Visa Application Process",
      steps: [
        {
          step: 1,
          title: "Verify Eligibility",
          description: "Confirm relationship to Canadian citizen/PR and review income requirements for sponsor."
        },
        {
          step: 2,
          title: "Obtain Medical Insurance",
          description: "Purchase eligible medical insurance coverage from Canadian insurer for minimum $100,000."
        },
        {
          step: 3,
          title: "Complete Medical Examination",
          description: "Undergo medical examination with designated panel physician in your country."
        },
        {
          step: 4,
          title: "Gather Documentation",
          description: "Compile invitation letter, financial documents, relationship proof, and all supporting materials."
        },
        {
          step: 5,
          title: "Submit Application",
          description: "Apply online or at visa application center with complete documentation package."
        },
        {
          step: 6,
          title: "Interview and Decision",
          description: "Attend interview if requested and await decision on Super Visa application."
        }
      ]
    },
    processingTime: "8-20 weeks depending on country and completeness",
    fees: "$100 CAD per person plus biometrics fees",
    faqs: [
      {
        question: "How long can I stay in Canada with Super Visa?",
        answer: "Super Visa allows stays up to 2 years per entry. You can leave and re-enter Canada multiple times within the 10-year validity period."
      },
      {
        question: "What income level must my sponsor meet?",
        answer: "Sponsors must meet Low Income Cut-Off (LICO) plus 30% for their family size including sponsored parents/grandparents. Amounts vary by family size and location."
      },
      {
        question: "Can I work in Canada with Super Visa?",
        answer: "No, Super Visa is for visiting purposes only. You cannot work or study in Canada with this visa type."
      }
    ]
  },
  {
    id: "super-visa-refusal",
    title: "Super Visa Refusal",
    slug: "super-visa-refusal",
    metaTitle: "Super Visa Refusal Canada - Appeal and Reapplication Strategies | Immigration Lawyers",
    metaDescription: "Expert help with Super Visa refusal cases. Our immigration lawyers provide comprehensive strategies for appeals, reapplications, and addressing refusal reasons.",
    keywords: ["Super Visa refusal", "parent visa refusal", "grandparent visa refusal", "Super Visa appeal", "family visa refusal", "visa refusal solutions"],
    hero: {
      title: "Super Visa Refusal Solutions",
      description: "Overcome Super Visa refusal with expert legal strategies. Get comprehensive assistance for appeals, reapplications, and addressing officer concerns."
    },
    overview: {
      title: "Understanding Super Visa Refusal",
      content: [
        "Super Visa refusal can occur for various reasons including inadequate medical insurance, insufficient sponsor income, concerns about returning home, or medical inadmissibility. Understanding specific refusal grounds is essential for successful reapplication.",
        "Common refusal reasons include failure to meet LICO+30% income requirements, inadequate insurance coverage, incomplete medical examinations, or officer concerns about applicant's ties to home country and intention to return.",
        "Professional legal assistance significantly improves chances of overcoming refusal through proper documentation, addressing officer concerns, and presenting compelling evidence for reapplication or judicial review processes."
      ]
    },
    eligibility: {
      title: "Common Super Visa Refusal Reasons",
      requirements: [
        "Sponsor income below LICO+30% threshold",
        "Inadequate or non-qualifying medical insurance coverage",
        "Incomplete or failed medical examination",
        "Insufficient ties to home country",
        "Concerns about intention to leave Canada",
        "Previous immigration violations or overstaying",
        "Criminal record or security concerns",
        "Relationship to sponsor not adequately proven"
      ]
    },
    process: {
      title: "Addressing Super Visa Refusal",
      steps: [
        {
          step: 1,
          title: "Analyze Refusal Reasons",
          description: "Carefully review refusal letter and identify specific grounds and officer concerns."
        },
        {
          step: 2,
          title: "Address Income Requirements",
          description: "Ensure sponsor meets LICO+30% with proper documentation and evidence."
        },
        {
          step: 3,
          title: "Strengthen Insurance Coverage",
          description: "Obtain qualifying insurance policy meeting all Super Visa requirements."
        },
        {
          step: 4,
          title: "Enhance Supporting Evidence",
          description: "Gather additional documentation addressing ties to home country and visit purpose."
        },
        {
          step: 5,
          title: "Legal Assessment",
          description: "Obtain professional evaluation for reapplication strategy or judicial review options."
        },
        {
          step: 6,
          title: "Submit New Application",
          description: "File comprehensive new application addressing all refusal reasons with enhanced documentation."
        }
      ]
    },
    processingTime: "New application: 8-20 weeks; Judicial review: 12-18 months",
    fees: "New application: $100 CAD; Legal consultation and judicial review fees vary",
    faqs: [
      {
        question: "Can I appeal Super Visa refusal?",
        answer: "There's no formal appeal process, but judicial review may be available for cases involving procedural errors or unreasonable decisions. New applications are also possible."
      },
      {
        question: "How soon can I reapply after refusal?",
        answer: "You can reapply immediately, but it's important to address all refusal reasons with stronger documentation to avoid repeated rejection."
      },
      {
        question: "What if my sponsor's income is borderline?",
        answer: "Include additional income sources, co-signers if permitted, or wait until income increases. Proper documentation of stable, ongoing income is crucial."
      }
    ]
  },
  {
    id: "visit-on-business",
    title: "Visit on Business",
    slug: "visit-on-business",
    metaTitle: "Canada Business Visitor Visa - Temporary Business Entry Requirements | Expert Guide",
    metaDescription: "Complete guide to visiting Canada on business. Expert assistance with business visitor requirements, documentation, and application process for temporary business entry.",
    keywords: ["Canada business visitor", "business visa Canada", "temporary business entry", "business visit requirements", "B-1 equivalent Canada", "business visitor permit"],
    hero: {
      title: "Visit Canada on Business",
      description: "Navigate Canada's business visitor requirements with expert guidance. Get comprehensive assistance for temporary business entry and commercial activities."
    },
    overview: {
      title: "Business Visitor Program",
      content: [
        "Canada's Business Visitor Program allows foreign nationals to enter temporarily for specific business activities without requiring a work permit. This includes meetings, conferences, training, and commercial activities that don't involve entering the Canadian labor market.",
        "Business visitors must demonstrate their primary employment and income source remains outside Canada, with activities limited to specific permitted business functions. The visit must be temporary with clear intention to return home.",
        "Eligible activities include attending meetings, conferences, or training sessions; conducting market research; negotiating contracts; providing after-sales service; and participating in trade shows or professional conferences."
      ]
    },
    eligibility: {
      title: "Business Visitor Requirements",
      requirements: [
        "Primary employment and income source outside Canada",
        "Business activities that don't compete with Canadian workers",
        "Clear temporary purpose for business visit",
        "Sufficient funds for stay and return journey",
        "Valid passport and travel documents",
        "No criminal record or security concerns",
        "Strong ties to home country ensuring return",
        "Invitation letter from Canadian business partner (if applicable)"
      ]
    },
    process: {
      title: "Business Visitor Application Process",
      steps: [
        {
          step: 1,
          title: "Determine Visitor Status Need",
          description: "Assess whether activities require business visitor status or work permit based on nature of work."
        },
        {
          step: 2,
          title: "Gather Business Documentation",
          description: "Collect letters of invitation, business registration, employment verification, and activity details."
        },
        {
          step: 3,
          title: "Apply for TRV/eTA",
          description: "Submit visitor visa or eTA application indicating business purpose and providing supporting documents."
        },
        {
          step: 4,
          title: "Prepare for Interview",
          description: "Be ready to explain business activities, duration, and ties to home country if interview required."
        },
        {
          step: 5,
          title: "Enter Canada",
          description: "Present documents at port of entry and explain business visit purpose to border services officer."
        }
      ]
    },
    processingTime: "TRV: 2-8 weeks; eTA: Minutes to hours; Border decision: At entry",
    fees: "TRV: $100 CAD; eTA: $7 CAD; No additional business visitor fees",
    faqs: [
      {
        question: "What business activities are permitted?",
        answer: "Permitted activities include meetings, conferences, training, market research, contract negotiations, after-sales service, and trade show participation without competing with Canadian workers."
      },
      {
        question: "Do I need a work permit for business visits?",
        answer: "No work permit is needed for qualifying business visitor activities, but the distinction between business visiting and working must be clearly established."
      },
      {
        question: "How long can I stay as a business visitor?",
        answer: "Business visitor status is typically granted for up to 6 months, but the specific duration depends on the nature of business activities and officer assessment."
      }
    ]
  },
  {
    id: "visit-and-work",
    title: "Visit and Work (ages 18-35)",
    slug: "visit-and-work",
    metaTitle: "Canada Working Holiday Visa - IEC Program for Ages 18-35 | Youth Mobility",
    metaDescription: "Complete guide to Canada's International Experience Canada (IEC) working holiday program. Expert assistance for youth aged 18-35 seeking work and travel opportunities.",
    keywords: ["working holiday Canada", "IEC program", "youth mobility", "work and travel Canada", "working holiday visa", "International Experience Canada"],
    hero: {
      title: "Visit and Work in Canada (Ages 18-35)",
      description: "Explore Canada through the International Experience Canada program. Get expert guidance for working holiday opportunities combining travel and work experience."
    },
    overview: {
      title: "International Experience Canada (IEC)",
      content: [
        "The International Experience Canada (IEC) program offers young adults aged 18-35 the opportunity to work and travel in Canada through three categories: Working Holiday, Young Professionals, and International Co-op (Internship).",
        "Working Holiday visas allow eligible youth to work for any employer while exploring Canada, typically for 12-24 months depending on country agreements. This program promotes cultural exchange and provides valuable international work experience.",
        "Participation depends on bilateral youth mobility agreements between Canada and eligible countries, with specific quotas and requirements varying by nationality and program category."
      ]
    },
    eligibility: {
      title: "IEC Program Requirements",
      requirements: [
        "Age 18-35 at time of application (varies by country)",
        "Citizen of country with IEC agreement with Canada",
        "Valid passport from eligible country",
        "Sufficient funds for initial stay (typically $2,500 CAD)",
        "Health insurance coverage for duration of stay",
        "No criminal record and pass security clearance",
        "Meet medical examination requirements if required",
        "Intent to primarily travel with work as secondary purpose"
      ]
    },
    process: {
      title: "IEC Application Process",
      steps: [
        {
          step: 1,
          title: "Check Eligibility",
          description: "Verify country participation, age requirements, and available quotas for your nationality."
        },
        {
          step: 2,
          title: "Create Profile",
          description: "Submit initial profile in IEC system during intake periods when pools are open."
        },
        {
          step: 3,
          title: "Invitation to Apply",
          description: "Wait for invitation to apply if selected from pool system (random selection process)."
        },
        {
          step: 4,
          title: "Complete Application",
          description: "Submit complete application within 20 days of receiving invitation with all required documents."
        },
        {
          step: 5,
          title: "Port of Entry Letter",
          description: "Receive port of entry letter and activate work permit upon arrival in Canada."
        }
      ]
    },
    processingTime: "Profile creation: Immediate; Invitation wait: Varies; Application processing: 8-12 weeks",
    fees: "$161 CAD participation fee plus biometrics fees if required",
    faqs: [
      {
        question: "Which countries participate in IEC?",
        answer: "Over 35 countries participate including UK, Australia, France, Germany, Japan, South Korea, and many others. Each has specific agreements and quotas."
      },
      {
        question: "Can I bring my spouse or children?",
        answer: "IEC is for individuals only. Spouses and children would need separate applications and aren't automatically included in IEC work permits."
      },
      {
        question: "What if I'm not selected from the pool?",
        answer: "You can resubmit your profile in subsequent intake rounds if eligible, but there's no guarantee of selection due to limited quotas."
      }
    ]
  },
  {
    id: "temporary-resident-visa",
    title: "Temporary Resident Visa",
    slug: "temporary-resident-visa",
    metaTitle: "Temporary Resident Visa Canada (TRV) - Complete Application Guide | Immigration Lawyers",
    metaDescription: "Complete guide to Canada Temporary Resident Visa (TRV) applications. Expert assistance with visitor visa requirements, documentation, and application process.",
    keywords: ["Temporary Resident Visa", "TRV Canada", "visitor visa Canada", "tourist visa", "Canada TRV application", "visitor permit Canada"],
    hero: {
      title: "Temporary Resident Visa (TRV) Canada",
      description: "Secure your Temporary Resident Visa for Canada with expert guidance. Comprehensive assistance for visitor visa applications and documentation requirements."
    },
    overview: {
      title: "Understanding Temporary Resident Visa",
      content: [
        "A Temporary Resident Visa (TRV) is an official document placed in your passport by a Canadian visa office, allowing foreign nationals to enter Canada temporarily as visitors, students, or workers. It serves as evidence that you've met admission requirements.",
        "TRVs are required for citizens of countries that don't have visa-exempt status with Canada. The visa shows you're authorized to travel to Canada, but final entry decision remains with border services officers upon arrival.",
        "Temporary Resident Visas can be single-entry or multiple-entry, with validity periods varying based on individual circumstances, passport validity, and officer discretion typically ranging from 6 months to 10 years."
      ]
    },
    eligibility: {
      title: "TRV Requirements",
      requirements: [
        "Valid passport or travel document",
        "Sufficient funds for stay and return journey",
        "Strong ties to home country ensuring return",
        "Clear purpose for visit to Canada",
        "No criminal record or security concerns",
        "Medical examination if required",
        "Intention to leave Canada at end of authorized stay",
        "Meet any additional requirements specific to visit purpose"
      ]
    },
    process: {
      title: "TRV Application Process",
      steps: [
        {
          step: 1,
          title: "Determine Need for TRV",
          description: "Check if your country requires TRV or if you're eligible for eTA or visa-exempt travel."
        },
        {
          step: 2,
          title: "Gather Documents",
          description: "Collect passport, photos, financial documents, invitation letters, and supporting materials."
        },
        {
          step: 3,
          title: "Complete Application",
          description: "Fill out application forms online or on paper with accurate and complete information."
        },
        {
          step: 4,
          title: "Pay Fees and Submit",
          description: "Pay processing fees and submit application online or at visa application center."
        },
        {
          step: 5,
          title: "Biometrics and Interview",
          description: "Provide biometrics if required and attend interview if requested by visa office."
        },
        {
          step: 6,
          title: "Decision and Travel",
          description: "Receive decision and if approved, travel to Canada with valid TRV in passport."
        }
      ]
    },
    processingTime: "2-8 weeks depending on country and application complexity",
    fees: "$100 CAD per person plus biometrics fees if required",
    faqs: [
      {
        question: "How long is a TRV valid?",
        answer: "TRV validity varies but typically ranges from 6 months to 10 years or until passport expires. Multiple-entry visas allow repeated travel during validity period."
      },
      {
        question: "Can I extend my stay in Canada?",
        answer: "Yes, you can apply to extend your stay as a visitor from within Canada before your current status expires, though approval isn't guaranteed."
      },
      {
        question: "What's the difference between TRV and visitor record?",
        answer: "A TRV allows entry to Canada, while a visitor record is issued at the border or when extending stay, showing your authorized period of stay."
      }
    ]
  },
  {
    id: "eta-electronic-travel-authorization",
    title: "eTA (electronic Travel Authorization)",
    slug: "eta-electronic-travel-authorization",
    metaTitle: "eTA Canada - Electronic Travel Authorization Application | Complete Guide",
    metaDescription: "Complete guide to Canada eTA (electronic Travel Authorization) application. Quick and easy eTA application process for visa-exempt country citizens visiting Canada.",
    keywords: ["eTA Canada", "electronic Travel Authorization", "Canada eTA application", "visa exempt travel", "eTA requirements", "Canada travel authorization"],
    hero: {
      title: "eTA (electronic Travel Authorization)",
      description: "Apply for your Canada eTA quickly and easily. Get expert guidance for electronic Travel Authorization requirements and application process for visa-exempt visitors."
    },
    overview: {
      title: "What is eTA?",
      content: [
        "Electronic Travel Authorization (eTA) is a digital travel authorization for visa-exempt foreign nationals flying to Canada. It's linked electronically to your passport and is valid for up to five years or until passport expires, whichever comes first.",
        "eTA allows multiple short-term visits to Canada, typically up to 6 months per visit for tourism, business, or transit purposes. It's required for most visa-exempt travelers arriving by air, but not for land or sea border crossings.",
        "The application process is simple, conducted entirely online, and most applications are approved within minutes. However, some applications may require additional documentation and take longer to process."
      ]
    },
    eligibility: {
      title: "eTA Requirements",
      requirements: [
        "Citizen of visa-exempt country (except USA)",
        "Valid passport from eligible country",
        "Arriving in Canada by air",
        "Valid email address for confirmation",
        "Credit or debit card for payment",
        "No criminal record or immigration violations",
        "Not planning to work or study in Canada",
        "Visiting for tourism, business, or transit purposes"
      ]
    },
    process: {
      title: "eTA Application Process",
      steps: [
        {
          step: 1,
          title: "Check Eligibility",
          description: "Verify your country's visa-exempt status and eTA requirements for air travel to Canada."
        },
        {
          step: 2,
          title: "Gather Information",
          description: "Have passport, contact details, employment information, and credit card ready for application."
        },
        {
          step: 3,
          title: "Complete Online Form",
          description: "Fill out eTA application form on official IRCC website with accurate information."
        },
        {
          step: 4,
          title: "Pay Application Fee",
          description: "Pay $7 CAD processing fee using credit or debit card through secure payment system."
        },
        {
          step: 5,
          title: "Receive Confirmation",
          description: "Get email confirmation with eTA approval status and travel authorization details."
        }
      ]
    },
    processingTime: "Most applications: Minutes to hours; Complex cases: Several days",
    fees: "$7 CAD per application",
    faqs: [
      {
        question: "Do I need eTA if I'm just transiting through Canada?",
        answer: "Yes, most visa-exempt travelers need eTA even for transit flights through Canadian airports, unless you qualify for specific transit exemptions."
      },
      {
        question: "Can I work or study with eTA?",
        answer: "No, eTA is for temporary visits only. You cannot work or study in Canada with eTA authorization - separate permits are required."
      },
      {
        question: "What if my eTA application is denied?",
        answer: "If eTA is denied, you may need to apply for a visitor visa instead. The refusal email will provide information about alternative options."
      }
    ]
  }
];

export const businessPages: BusinessPage[] = [
  {
    id: "business-visitor",
    title: "Business Visitor",
    slug: "business-visitor",
    metaTitle: "Canada Business Visitor Visa - Temporary Business Entry Requirements | Immigration Lawyers",
    metaDescription: "Complete guide to Canada business visitor visa requirements. Expert assistance with temporary business entry, documentation, and application process for commercial activities.",
    keywords: ["Canada business visitor", "business visa Canada", "temporary business entry", "business visitor permit", "commercial activities Canada", "business meetings Canada"],
    hero: {
      title: "Canada Business Visitor Program",
      description: "Enter Canada temporarily for business activities without a work permit. Get expert guidance for business visitor applications and commercial entry requirements."
    },
    overview: {
      title: "Understanding Business Visitor Status",
      content: [
        "Canada's Business Visitor Program allows foreign nationals to enter temporarily for specific business activities without requiring a work permit. This includes attending meetings, conferences, training sessions, conducting market research, negotiating contracts, and participating in trade shows.",
        "Business visitors must demonstrate that their primary source of remuneration and employment remains outside Canada, with activities limited to permitted business functions. The visit must be temporary with clear intention to return to their home country upon completion of business activities.",
        "Eligible activities include international business meetings, conferences, conventions, trade fairs, research activities, after-sales service, independent research, and certain training programs that don't involve entering the Canadian labor market."
      ]
    },
    eligibility: {
      title: "Business Visitor Requirements",
      requirements: [
        "Primary employment and income source remains outside Canada",
        "Business activities don't compete with Canadian workers or enter Canadian labor market",
        "Clear temporary purpose for business visit with defined duration",
        "Sufficient funds to support stay and return journey to home country",
        "Valid passport and required travel documents (TRV or eTA)",
        "No criminal record or security concerns affecting admissibility",
        "Strong ties to home country ensuring return after business activities",
        "Invitation letter from Canadian business partner or organization (if applicable)",
        "Documentation proving business relationship or commercial purpose"
      ]
    },
    process: {
      title: "Business Visitor Application Process",
      steps: [
        {
          step: 1,
          title: "Assess Business Activity Eligibility",
          description: "Determine if your business activities qualify for business visitor status rather than requiring a work permit."
        },
        {
          step: 2,
          title: "Gather Business Documentation",
          description: "Collect invitation letters, business registration, employment verification, and detailed activity descriptions."
        },
        {
          step: 3,
          title: "Apply for Entry Document",
          description: "Submit visitor visa (TRV) or electronic travel authorization (eTA) application indicating business purpose."
        },
        {
          step: 4,
          title: "Prepare for Entry Interview",
          description: "Be ready to explain business activities, duration, funding source, and ties to home country at port of entry."
        },
        {
          step: 5,
          title: "Enter Canada and Conduct Business",
          description: "Present all documentation at border and explain business visit purpose to immigration officer."
        },
        {
          step: 6,
          title: "Maintain Status and Depart",
          description: "Conduct only permitted business activities and depart Canada within authorized timeframe."
        }
      ]
    },
    processingTime: "TRV: 2-8 weeks; eTA: Minutes to hours; Entry decision at border",
    fees: "TRV: $100 CAD; eTA: $7 CAD; No additional business visitor fees",
    faqs: [
      {
        question: "What business activities are permitted without work permit?",
        answer: "Permitted activities include meetings, conferences, training, market research, contract negotiations, after-sales service, trade shows, and research that doesn't involve productive work for Canadian employers."
      },
      {
        question: "Can I receive payment from Canadian companies as business visitor?",
        answer: "Generally no. Business visitors cannot receive payment from Canadian sources or engage in productive work. Reimbursement of reasonable expenses may be acceptable in specific circumstances."
      },
      {
        question: "How long can I stay as business visitor?",
        answer: "Business visitor status is typically granted for up to 6 months, but the specific duration depends on the nature of business activities and immigration officer's assessment at entry."
      },
      {
        question: "Do I need invitation letter for business visitor entry?",
        answer: "While not always mandatory, invitation letters from Canadian businesses significantly strengthen applications and help explain the commercial purpose and relationship."
      }
    ]
  },
  {
    id: "investor-immigrant",
    title: "Investor Immigrant",
    slug: "investor-immigrant",
    metaTitle: "Canada Investor Immigration Program - Investment-Based Permanent Residency | Immigration Lawyers",
    metaDescription: "Comprehensive guide to Canada investor immigration programs. Expert assistance with investment-based permanent residency, Quebec Investor Program, and startup visa applications.",
    keywords: ["Canada investor immigration", "investor visa Canada", "Quebec Investor Program", "startup visa Canada", "investment immigration", "business immigration Canada"],
    hero: {
      title: "Canada Investor Immigration Programs",
      description: "Achieve permanent residency through investment in Canada. Get expert guidance for investor immigration pathways including Quebec Investor Program and federal startup visa."
    },
    overview: {
      title: "Investment-Based Immigration to Canada",
      content: [
        "Canada offers several investor immigration programs designed to attract experienced business investors and entrepreneurs who can contribute to economic growth. These programs provide pathways to permanent residency for individuals with significant business experience, investment capital, and intent to establish or invest in Canadian businesses.",
        "The Quebec Investor Program (QIP) is currently the most established passive investment program, requiring a significant net worth and investment commitment. Federal programs like the Start-up Visa Program target innovative entrepreneurs with support from designated organizations.",
        "Provincial Nominee Programs (PNPs) also offer various business and investor streams with different investment thresholds, business experience requirements, and regional focuses. Each program has specific eligibility criteria, investment amounts, and application processes tailored to different investor profiles."
      ]
    },
    eligibility: {
      title: "General Investor Immigration Requirements",
      requirements: [
        "Minimum net worth requirements (varies by program: $2M - $10M CAD)",
        "Proven business or investment management experience (typically 2-5 years)",
        "Investment commitment in approved instruments or businesses",
        "Language proficiency in English and/or French (program dependent)",
        "Education credentials assessment (may be required)",
        "Clean criminal record and security clearance",
        "Medical examinations for applicant and family members",
        "Intent to reside in Canada (or specific province for PNP programs)",
        "Proof of legal source of funds and wealth accumulation"
      ]
    },
    process: {
      title: "Investor Immigration Application Process",
      steps: [
        {
          step: 1,
          title: "Program Selection and Assessment",
          description: "Evaluate different investor programs based on investment capacity, business experience, and residency preferences."
        },
        {
          step: 2,
          title: "Document Preparation and Due Diligence",
          description: "Gather extensive financial documentation, business records, and undergo third-party verification of net worth."
        },
        {
          step: 3,
          title: "Submit Expression of Interest or Application",
          description: "File initial application with required documents and fees to appropriate program authority."
        },
        {
          step: 4,
          title: "Interview and Additional Documentation",
          description: "Attend interview if required and provide additional documentation or clarification as requested."
        },
        {
          step: 5,
          title: "Investment Commitment and Approval",
          description: "Make required investment upon program approval and receive confirmation of investment placement."
        },
        {
          step: 6,
          title: "Permanent Residence Application",
          description: "Complete federal permanent residence application with medical exams and security clearances."
        },
        {
          step: 7,
          title: "Landing and Investment Fulfillment",
          description: "Land in Canada as permanent resident and fulfill ongoing investment and residency obligations."
        }
      ]
    },
    processingTime: "Quebec Investor: 4-6 years; Start-up Visa: 12-16 months; PNP Business: 18-24 months",
    fees: "Application fees: $1,500-$15,000 CAD; Investment amounts: $200K-$10M CAD; Professional fees vary",
    faqs: [
      {
        question: "What is the minimum investment for Canada investor immigration?",
        answer: "Investment requirements vary by program: Start-up Visa requires $200K-$1M from designated investors; Quebec Investor Program requires $1.2M investment; PNP programs range from $200K-$1M depending on province."
      },
      {
        question: "Can I get my investment back in investor immigration?",
        answer: "Quebec Investor Program investments are returned after 5 years without interest. Start-up Visa investments are at risk as business equity. PNP programs vary - some require loans, others equity investments."
      },
      {
        question: "Do I need to actively manage the business as investor immigrant?",
        answer: "Requirements vary: Quebec Investor Program is passive investment; Start-up Visa requires active business management; PNP programs typically require active participation in business operations."
      },
      {
        question: "Can my family be included in investor immigration application?",
        answer: "Yes, spouse and dependent children under 22 can be included in most investor immigration applications and receive permanent residency simultaneously with principal applicant."
      }
    ]
  },
  {
    id: "business-pnp",
    title: "Business PNP",
    slug: "business-pnp",
    metaTitle: "Business PNP Canada - Provincial Nominee Program for Entrepreneurs | Immigration Lawyers",
    metaDescription: "Complete guide to Canada Business PNP programs. Expert assistance with provincial entrepreneur and investor streams for permanent residency through business investment.",
    keywords: ["Business PNP Canada", "provincial nominee program business", "entrepreneur PNP", "business investment PNP", "provincial business immigration", "PNP entrepreneur stream"],
    hero: {
      title: "Business Provincial Nominee Program (PNP)",
      description: "Achieve permanent residency through provincial business programs. Get expert guidance for entrepreneur and investor streams across Canadian provinces."
    },
    overview: {
      title: "Provincial Business Immigration Programs",
      content: [
        "Provincial Nominee Programs (PNPs) offer diverse business and entrepreneur streams designed to attract investment and entrepreneurial talent to specific provinces and territories. Each province has tailored programs reflecting local economic priorities, labor market needs, and investment opportunities.",
        "Business PNP streams typically require active business ownership or management, with investment thresholds ranging from $100,000 to over $1 million depending on the province and business type. Most programs involve a temporary work permit phase followed by permanent residence nomination upon meeting business performance criteria.",
        "Popular business PNP programs include British Columbia Entrepreneur Immigration, Ontario Entrepreneur Stream, Saskatchewan Entrepreneur Program, and Alberta Investor Program. Each has unique eligibility criteria, investment requirements, business experience thresholds, and performance agreements."
      ]
    },
    eligibility: {
      title: "Business PNP General Requirements",
      requirements: [
        "Minimum net worth requirement (typically $300K - $1.5M CAD)",
        "Business ownership or senior management experience (usually 3-5 years)",
        "Investment commitment in eligible business activities",
        "Language proficiency requirements (varies by province)",
        "Educational qualifications (high school minimum, often higher)",
        "Age preferences (typically 21-59 years old)",
        "Intent to reside in nominating province",
        "Business plan demonstrating economic benefit to province",
        "Clean criminal record and medical clearance"
      ]
    },
    process: {
      title: "Business PNP Application Process",
      steps: [
        {
          step: 1,
          title: "Province Selection and Research",
          description: "Research provincial business programs and select province aligning with business goals and personal preferences."
        },
        {
          step: 2,
          title: "Eligibility Assessment and Planning",
          description: "Assess eligibility for chosen program and develop comprehensive business plan meeting provincial requirements."
        },
        {
          step: 3,
          title: "Submit PNP Application",
          description: "File complete application with business plan, financial documentation, and required fees to provincial authorities."
        },
        {
          step: 4,
          title: "Interview and Due Diligence",
          description: "Attend interview with provincial officials and undergo verification of business experience and financial capacity."
        },
        {
          step: 5,
          title: "Work Permit and Business Establishment",
          description: "Receive temporary work permit to establish business and begin operations meeting performance agreement terms."
        },
        {
          step: 6,
          title: "Business Performance Monitoring",
          description: "Operate business meeting agreed performance criteria while reporting progress to provincial authorities."
        },
        {
          step: 7,
          title: "Provincial Nomination and PR Application",
          description: "Receive provincial nomination upon meeting performance criteria and apply for permanent residence federally."
        }
      ]
    },
    processingTime: "PNP application: 6-12 months; Work permit: 2-4 months; PR after nomination: 6-8 months",
    fees: "PNP fees: $2,500-$15,000 CAD; Investment: $100K-$1M+ CAD; Professional fees vary by complexity",
    faqs: [
      {
        question: "Which provinces have the best business PNP programs?",
        answer: "Popular programs include BC Entrepreneur Immigration ($200K investment), Saskatchewan Entrepreneur ($200K), Prince Edward Island ($150K), and New Brunswick Entrepreneur ($250K). Best choice depends on business type, investment capacity, and personal preferences."
      },
      {
        question: "Do I need to live in the province that nominates me?",
        answer: "Yes, business PNP programs require intent to reside in the nominating province. Most have specific residency requirements and ongoing business operation obligations in that province."
      },
      {
        question: "What happens if my business fails during PNP process?",
        answer: "Business failure can jeopardize provincial nomination and permanent residence. Most provinces have performance agreements with specific criteria. Professional guidance helps structure businesses to meet requirements and minimize risks."
      },
      {
        question: "Can I buy an existing business for PNP programs?",
        answer: "Many PNP programs allow purchase of existing businesses, but there are often restrictions on business type, age, and seller relationships. Some programs prefer new business creation or significant expansion of existing businesses."
      }
    ]
  }
];

export const practiceAreas = [
  {
    title: "Immigration Law",
    href: "/immigration-law",
    description: "Comprehensive immigration services"
  },
  {
    title: "Real Estate Law", 
    href: "/real-estate-law",
    description: "Property transactions and real estate matters"
  },
  {
    title: "Criminal Law",
    href: "/criminal-law", 
    description: "Criminal defense and legal representation"
  },
  {
    title: "Wills & Power of Attorney",
    href: "/wills-power-of-attorney",
    description: "Estate planning and legal documentation"
  }
];

// Work Permits navigation data
export const workPermitsNav = {
  title: "Work Permits",
  href: "/work-permits",
  description: "All types of Canadian work permits",
  subItems: workPermitPages.map(page => ({
    title: page.title,
    href: `/work-permits/${page.slug}`,
    description: page.hero.description
  }))
};

// Study navigation data
export const studyNav = {
  title: "Study",
  href: "/study",
  description: "Student visas and study permits in Canada",
  subItems: [
    ...studyPages.map(page => ({
      title: page.title,
      href: `/study/${page.slug}`,
      description: page.hero.description
    })),
    {
      title: "Work while Studying",
      href: "/work-permits/work-while-studying",
      description: "Work authorization for international students in Canada"
    },
    {
      title: "Post Graduate Work Permit (PGWP)",
      href: "/work-permits/post-graduation-work-permit",
      description: "Open work permits for international graduates"
    },
    {
      title: "PGWP Eligibility",
      href: "/work-permits/pgwp-eligibility", 
      description: "Detailed requirements for Post-Graduation Work Permit qualification"
    }
  ]
};

// Visit Canada navigation data
export const visitNav = {
  title: "Visit Canada",
  href: "/visit",
  description: "Visitor visas and travel authorization for Canada",
  subItems: visitPages.map(page => ({
    title: page.title,
    href: `/visit/${page.slug}`,
    description: page.hero.description
  }))
};

// Business navigation data
export const businessNav = {
  title: "Business",
  href: "/business",
  description: "Business immigration and commercial entry to Canada",
  subItems: businessPages.map(page => ({
    title: page.title,
    href: `/business/${page.slug}`,
    description: page.hero.description
  }))
};