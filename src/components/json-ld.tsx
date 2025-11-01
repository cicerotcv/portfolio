import { siteConfig } from '@/config/site.config';

export function JsonLd() {
  const sameAs: string[] = [];
  if (siteConfig.author.githubUrl) {
    sameAs.push(siteConfig.author.githubUrl);
  }
  if (siteConfig.author.linkedinUrl) {
    sameAs.push(siteConfig.author.linkedinUrl);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.site.url,
    jobTitle: 'Desenvolvedor Full Stack',
    description: siteConfig.site.description,
    email: siteConfig.author.email,
    sameAs,
    knowsAbout: [
      'React',
      'Next.js',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Desenvolvimento Web',
      'Desenvolvimento Mobile',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
