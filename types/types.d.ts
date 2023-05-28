interface Project {
  id: number;
  title: string;
  logo: string;
  link: string;
  desc: string;
  blurHash: string;
  technologies: string[];
}

interface Company {
  title: string;
  alt: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
}

interface Awards {
  title: string;
  description: string;
  date: string;
}

interface Institute {
  short_title: string;
  title: string;
  alt: string;
  role: string;
  skills: string[];
  period: string;
  startingYear: string;
  logo: string;
  awards?: Awards[];
}

interface Repository {
  title: string;
  description: string;
  cover: string;
  technologies: string[];
  url: string;
  live: string;
  blurHash: string;
  stars: string;
  fork: string;
}

interface Skill {
  name: string;
  description: string;
  link: string;
  type: string;
  image: string;
  lightVibrant: string;
}
