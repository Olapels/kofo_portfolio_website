import { Profile } from "@/components/types/profile";

export const profile: Profile = {
  name: "My name is Kofoworola Omowale!",
  headline: "Impact-Driven Analyst",

  introduction: [
    "I am an impact-driven analyst with experience across private equity, venture capital, and capital markets.",
    "Skilled in fund structuring, investment analysis, and impact measurement, with a track record supporting blended finance vehicles and gender-lens initiatives across Africa.",
    "My experience includes roles at investment funds with over $700 million in AUM and working on projects in partnership with the Ford Foundation and Mastercard Foundation.",
    "I am passionate about leveraging finance as a tool for sustainable growth, particularly at the intersection of gender equality, infrastructure, climate resilience, and economic inclusion.",
  ],

  education: [
    {
      institution: "Nigerian Law School",
      year: "2025",
      qualification: "Qualifying Certificate to the Nigerian Bar (Awaiting Result)",
    },
    {
      institution: "Lagos Business School",
      year: "2024",
      qualification: "Venture in Management Program",
    },
    {
      institution: "EduBridge Academy School of Finance",
      year: "2024",
      qualification: "Global Financial Analyst Program",
    },
    {
      institution: "University of Ibadan",
      year: "2024",
      qualification: "Bachelor of Laws (LL.B), Second Class Upper Division",
    },
  ],

  skills: [
    "Investment Analysis & Research",
    "Fund Operations",
    "Risk & Compliance",
    "ESG & Impact",
    "Gender-Lens Investing",
    "Portfolio Support & Monitoring & Evaluation (M&E)",
    "Financial Modeling",
    "Project Management",
  ],

  experience: [
  {
    role: "Investment Analyst",
    company: "Impact Investment Fund",
    logo: "/logos/impact-fund.png",
    period: "2022 – Present",
    bullets: [
      "Structuring of a $1 billion wholesale impact investment fund",
      "Monitoring compliance of investment vehicles across multiple jurisdictions",
      "Conducted due diligence on early-stage companies across African markets",
    ],
  },
  {
    role: "Program & Investment Support",
    company: "Ford Foundation (Partner Projects)",
    logo: "/logos/ford-foundation.png",
    period: "2023",
    bullets: [
      "Technical assistance on fund structuring, ESG integration, and impact frameworks",
      "Supported blended finance vehicles and gender-lens initiatives",
    ],
  },
  {
    role: "Accelerator Program Associate",
    company: "Mastercard Foundation (Partner Projects)",
    logo: "/logos/mastercard-foundation.png",
    period: "2022",
    bullets: [
      "Implemented accelerator supporting 40 female fund managers across 12 African countries",
      "Helped unlock over $300 million in deployable capital",
    ],
  },
],

  advantage: [
    "Combined background in law and investment management",
    "Comfortable across fund operations, compliance, reporting, and stakeholder engagement",
    "Strong exposure to impact investing, ESG, and gender-lens frameworks",
  ],

  expertise: [
    {
      title: "Investment Analysis",
      description:
        "Rigorous due diligence, financial modeling, and market research across early-stage and growth investments.",
      icon: "analytics",
    },
    {
      title: "Fund Operations",
      description:
        "Support across fund structuring, governance, reporting, and compliance for blended finance vehicles.",
      icon: "account_balance_wallet",
    },
    {
      title: "ESG & Impact",
      description:
        "Design and implementation of ESG frameworks, impact metrics, and gender-lens investment strategies.",
      icon: "diversity_3",
    },
    {
      title: "Portfolio Support",
      description:
        "Hands-on portfolio monitoring, M&E systems, and technical assistance.",
      icon: "public",
    },
  ],

  contact: {
    phone: "+234 808 365 9509",
    email: "kofoworola.omowale@gmail.com",
    linkedin: {
      url: "https://www.linkedin.com/in/kofoworola-omowale/",
      label: "LinkedIn",
    },
  },
};
