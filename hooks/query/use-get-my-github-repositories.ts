import { useQuery } from "@tanstack/react-query";
import { githubService } from "services/api/github.service";

export const useGetMyGithubRepositories = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`repositories`],
    queryFn: async () => {
      return await githubService.getMyRepositories();
    },
  });

  return { data, isError, isLoading };
};
