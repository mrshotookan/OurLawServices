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
  },
  {
    title: "Work Permits",
    href: "/work-permits",
    description: "All types of Canadian work permits",
    subItems: workPermitPages.map(page => ({
      title: page.title,
      href: `/work-permits/${page.slug}`,
      description: page.hero.description
    }))
  }
];