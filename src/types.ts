export interface SkillItem {
  id: string;
  name: string;
  category: 'Languages' | 'Systems & IoT' | 'Intelligence' | 'Web & Data';
  iconName: string;
  proficiency: number;
  highlight: string;
  color: 'yellow' | 'red';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  outcome: string;
  accent: 'yellow' | 'red';
  highlights: string[];
  systemSpecs?: {
    label: string;
    value: string;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  badge: string;
  year: string;
  status: 'Participant' | 'Finalist';
  description: string;
  icon: 'trophy' | 'medal' | 'award';
  tag: string;
}
