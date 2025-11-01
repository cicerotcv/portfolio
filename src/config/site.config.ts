import { getGithubUrl } from '@/lib/github';
import { getLinkedinUrl } from '@/lib/linkedin';

const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const linkedinUsername = process.env.NEXT_PUBLIC_LINKEDIN_USERNAME;

export const siteConfig = {
  site: {
    name: process.env.NEXT_PUBLIC_SITE_NAME!,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION!,
    url: process.env.NEXT_PUBLIC_SITE_URL!,
  },
  author: {
    name: process.env.NEXT_PUBLIC_AUTHOR_NAME!,
    email: process.env.NEXT_PUBLIC_AUTHOR_EMAIL!,
    phone: process.env.NEXT_PUBLIC_AUTHOR_PHONE!,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP!,
    github: githubUsername,
    githubUrl: getGithubUrl(githubUsername),
    linkedin: linkedinUsername!,
    linkedinUrl: getLinkedinUrl(linkedinUsername),
    location: process.env.NEXT_PUBLIC_AUTHOR_LOCATION!,
  },
  social: {
    github: githubUsername!,
    linkedin: linkedinUsername!,
  },
} as const;
