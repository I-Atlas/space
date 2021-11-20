import { VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./project-card";
import Header from "components/layout/header";
import { MotionBox } from "components/ui/motion";
import { AnimateSharedLayout } from "framer-motion";
import { ORANGE } from "constants/constants";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <VStack align="start" spacing={8}>
      <Header underlineColor={ORANGE} mt={0} mb={0}>
        Projects
      </Header>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <ProjectCard
                title={project.title}
                description={project.desc}
                blurHash={project.blurHash}
                logo={project.logo}
                link={project.link}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
}
