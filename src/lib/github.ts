import { cache } from 'react';

export interface LanguageStats {
  language: string;
  count: number;
  percentage: number;
}

export interface GitHubProfile {
  name: string;
  login: string;
  bio: string | null;
  avatar_url: string;
  location: string | null;
  company: string | null;
  blog: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  createdAt: string;
  htmlUrl: string;
}

/**
 * Fetches GitHub user profile data
 * Cache: 24 hours (86400 seconds)
 */
export const getGitHubProfile = cache(
  async (username: string): Promise<GitHubProfile | null> => {
    try {
      const profileUrl = `https://api.github.com/users/${username}`;

      const response = await fetch(profileUrl, {
        next: {
          revalidate: 86400,
        },
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();

      return {
        name: data.name || data.login,
        login: data.login,
        bio: data.bio,
        avatar_url: data.avatar_url,
        location: data.location,
        company: data.company,
        blog: data.blog,
        publicRepos: data.public_repos || 0,
        followers: data.followers || 0,
        following: data.following || 0,
        createdAt: data.created_at,
        htmlUrl: data.html_url,
      };
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      return null;
    }
  }
);

export const getGithubUrl = (username?: string) => {
  if (!username) return;
  return `https://github.com/${username}`;
};
