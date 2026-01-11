export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  bullets: string[];
}

export interface Profile {
  name: string;
  headline: string;
  introduction: string[];
  education: {
    institution: string;
    year: string;
    qualification: string;
  }[];
  skills: string[];
  experience: ExperienceItem[];
  advantage: string[];
  expertise: {
    title: string;
    description: string;
    icon: string;
  }[];
  contact: {
    phone: string;
    email: string;
    linkedin?: string;
  };
}
