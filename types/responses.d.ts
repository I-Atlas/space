export interface GithubRepositoryData {
  name: string;
  stargazers_count: number;
  forks_count: number;
  description: string;
  language: string | null;
  svn_url: string;
  archived: boolean;
}

export type GetGithubRepositoryResponse = GithubRepositoryData[];
