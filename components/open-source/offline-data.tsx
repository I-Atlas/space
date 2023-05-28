import { SimpleGrid } from "@chakra-ui/react";
import { PageSlideFade, StaggerChildren } from "../ui/page-transitions";
import { MotionBox } from "styles/motion";
import RepositoryCard from "./offline-data-card";

interface OfflineDataProps {
  repositories: Repository[];
}

export default function OfflineData({ repositories }: OfflineDataProps) {
  return (
    <PageSlideFade>
      <StaggerChildren>
        <SimpleGrid columns={[2, 2, 3]} spacing={4} mt={12}>
          {repositories.map((repo, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <RepositoryCard
                key={index}
                title={repo.title}
                description={repo.description}
                cover={repo.cover}
                blurHash={repo.blurHash}
                technologies={repo.technologies}
                url={repo.url}
                live={repo.live}
                stars={repo.stars}
                fork={repo.fork}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </StaggerChildren>
    </PageSlideFade>
  );
}
