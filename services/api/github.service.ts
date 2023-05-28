import axios, { AxiosInstance } from "axios";
import type { GetGithubRepositoryResponse } from "types/responses";

export class GithubService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.GITHUB_API_URL,
    });
  }

  async getMyRepositories(): Promise<GetGithubRepositoryResponse> {
    const response = await this.api.get<GetGithubRepositoryResponse>(
      "/users/I-Atlas/repos"
    );
    return response.data;
  }
}

export const githubService = new GithubService();
