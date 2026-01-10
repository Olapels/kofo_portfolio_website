export type EducationItem = {
  institution: string;
  year: string;
  qualification: string;
};

export type ExperienceItem = {
  title: string;
  bullets: string[];
};

export type Profile = {
  name: string;
  headline: string;
  introduction: string[];
  education: EducationItem[];
  skills: string[];
  experience: ExperienceItem[];
  advantage: string[];
  contact: {
    phone: string;
    email: string;
  };
};
