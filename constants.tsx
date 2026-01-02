
import React from 'react';
import { Mail, Phone, MapPin, Globe, Award, Video, Palette, Newspaper, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Experience, Education, SkillGroup, Project } from './types';

export const PROFILE = {
  name: "Kazi Yasin Iqbal",
  alias: "Canny",
  title: "Designer, Video Editor & Journalist",
  location: "West Dewbhog, Ambagan, Narayanganj, Bangladesh",
  email: "kazi.canny@gmail.com",
  phones: ["+(880) 1670254283", "+(880) 1627120111"],
  website: "www.can-e.com",
  // Using a stable representative image for the "CAN-E" logo based on the user's upload
  logoUrl: "https://raw.githubusercontent.com/Canny-Cane/portfolio-assets/main/logo.png",
  summary: "Highly skilled Designer, Video Editor, and Journalist with over 15 years of hands-on experience in the creative industry. Defined by a passion for creativity and a commitment to delivering outstanding results under pressure. Versatile skill set ranging from graphic design to digital marketing with a proven track record of working with reputable international companies in Canada and Singapore.",
  // Using the climber image provided by the user
  photoUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=800&h=1000"
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Visual Arts & Design",
    skills: ["Design Thinking", "Graphic Design", "Video Editing", "Motion Graphics", "Cinematography", "Photography"]
  },
  {
    category: "Content & Strategy",
    skills: ["Content Planning", "Digital Marketing", "Social Media Management", "Script Writing", "Online Journalism"]
  },
  {
    category: "Technical & Web",
    skills: ["Website Management", "Software Management", "Hardware Management", "Brand Building"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Rang Bangladesh Campaign",
    category: "Design & Content",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    description: "Creative visual strategy and content creation for one of Bangladesh's leading fashion brands.",
  },
  {
    title: "Signature Channel Ad Loop",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    description: "Dynamic digital signage video loop for advertising media clients in Canada.",
  },
  {
    title: "Rapid Physiocare Socials",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1612833603922-3bb340507a45?auto=format&fit=crop&q=80&w=800",
    description: "Content management and design for healthcare clinics across Singapore.",
  },
  {
    title: "Bisherbashi News Portal",
    category: "Web & Journalism",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    description: "Full management and editorial direction for a 25-year-old reputed news magazine.",
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Content Creator",
    company: "RANG BANGLADESH",
    period: "Current",
    description: "Creating engaging content for a premier fashion clothing brand in Bangladesh."
  },
  {
    role: "Fiverr Level Two Seller",
    company: "Fiverr",
    location: "Remote/Global",
    period: "Feb 2016 - Present",
    description: "Rated 5 stars worldwide for high-quality video editing services. Over 15 years of hands-on experience reflected in global client satisfaction."
  },
  {
    role: "Social Media Content Creator",
    company: "Rapid Physiocare",
    location: "Singapore",
    period: "Feb 2019 - Present",
    description: "Managed content strategy and creation for 4 major clinics across Singapore. Operating 4 different locations around Singapore."
  },
  {
    role: "Chief Video Editor & Designer",
    company: "Signature Channel Inc.",
    location: "Canada",
    period: "Feb 2016 - Mar 2022",
    description: "Developed visual content for a leading Canadian digital signage video advertising media company."
  },
  {
    role: "Assistant News Editor & Website Manager",
    company: "Bisherbashi",
    period: "Feb 2014 - Jan 2016",
    description: "Managed the online news portal and weekly magazine for a 25-year-old reputed media house."
  },
  {
    role: "Assistant Editor & Desk Reporter",
    company: "The Daily Vorer Kotha",
    period: "Jul 2012 - Feb 2014",
    description: "Published local news and handled editorial desk reporting for the Narayanganj region."
  },
  {
    role: "Graphic Designer & Article Writer",
    company: "The Daily Desher Alo",
    period: "Jan 2007 - Feb 2011",
    description: "Contributed to one of the most established local daily newspapers as both a designer and writer."
  },
  {
    role: "Graphic Designer & Advertising Marketer",
    company: "Design Point",
    period: "Mar 2011 - Jul 2014",
    description: "Specialized in advertising, book covers, posters, and banners for a top creative media house."
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "Online Journalism",
    institution: "Bangladesh Press Institute (PIB)",
    year: "2014",
    details: "Completed The Journalism Course for Online News and Electronic Media."
  },
  {
    degree: "Higher Secondary Certificate (H.S.C)",
    institution: "Narayanganj College",
    year: "2010",
    details: "Dhaka Board | Department: Arts | GPA: 3.00"
  },
  {
    degree: "Secondary School Certificate (S.S.C)",
    institution: "Gonabiddya Niketan",
    year: "2007",
    details: "Dhaka Board | Department: Science | GPA: 2.63"
  }
];

export const SOCIAL_LINKS = [
  { icon: <Facebook size={20} />, url: "#", label: "Facebook" },
  { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
  { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
  { icon: <Twitter size={20} />, url: "#", label: "Twitter" }
];
