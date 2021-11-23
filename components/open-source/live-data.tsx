import useFetch from "use-http";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { PageSlideFade } from "../ui/page-transitions";
import RepositoryCard from "./live-data-card";
import CardSkeleton from "./card-skeleton";

interface GithubRepository {
  name: string;
  stargazers_count: number;
  forks_count: number;
  description: string;
  language: string | null;
  svn_url: string;
  archived: boolean;
}

export default function LiveDataCard() {
  const { loading, data = [] } = useFetch<GithubRepository[]>(
    "https://api.github.com/users/I-Atlas/repos",
    {},
    [],
  );

  return (
    <PageSlideFade>
      {loading ? (
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          <CardSkeleton />
        </SimpleGrid>
      ) : (
        <Box mt={4}>
          <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
            {data
              .filter((repo) => !repo.archived)
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .slice(0, 8)
              .map((repo, index: number) => (
                <RepositoryCard
                  key={index}
                  title={repo.name}
                  description={repo.description}
                  language={repo.language}
                  url={repo.svn_url}
                  stargazers_count={repo.stargazers_count}
                  forks_count={repo.forks_count}
                />
              ))}
          </SimpleGrid>
        </Box>
      )}
    </PageSlideFade>
  );
}
