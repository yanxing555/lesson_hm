export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  location: string;
  avatar?: string;
  bio?: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  joinDate: string;
  isActive: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface UpdateEmployeeData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  position?: string;
  department?: string;
  location?: string;
  avatar?: string;
  bio?: string;
  skills?: string[];
  experience?: Experience[];
  education?: Education[];
}