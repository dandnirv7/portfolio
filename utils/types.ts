export interface TechStack {
  icon: string;
  name: string;
}

export interface Projects {
  thumbnail: string;
  slugs: string;
  title: string;
  description: string;
  techStack: TechStack[];
}

export type GetRandomProjects<T> = (projects: T[], count: number) => T[];
