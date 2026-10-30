export interface ProjectDetail {
  challenge: string;
  solution: string;
  gridSystem: string;
  typography: string;
  client: string;
  colorPalette: string[];
  scope: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  image: string;
  details: ProjectDetail;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  process: string[];
  icon: string; // lucide icon name
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  message: string;
  serviceType: string;
  budget: string;
  timeline: string;
  status: 'Received' | 'In Review' | 'Accepted' | 'Declined';
  date: string;
  comment?: string;
}
