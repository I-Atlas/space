import Home from "components/home/home";
import PageLayout from "layouts/page";
import { projects } from "data/projects";
import IndexImage from "public/assets/images/screenshots/index.png";

interface IndexProps {
  projects: Project[];
}

export default function Index({ projects }: IndexProps) {
  return (
    <PageLayout
      image={IndexImage.src}
      title="Iliya Bolotov - Software Engineer"
    >
      <Home projects={projects} />
    </PageLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}
