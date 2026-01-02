
export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}
