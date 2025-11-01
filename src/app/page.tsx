import { siteConfig } from '@/config/site.config';
import {
  About,
  Contact,
  Footer,
  Hero,
  Navigation,
  Projects,
  Skills,
  Technologies,
} from '@/layouts/lp';
import { getGitHubProfile } from '@/lib/github';

const projects = [
  {
    title: 'Buy me a BitCoffee',
    description:
      'A modern, lightweight web application for receiving Bitcoin donations with QR code generation. Built to make cryptocurrency donations as simple as possible for both creators and supporters.',
    tech: ['TypeScript', 'Bitcoin', 'Lightning Network'],
    githubUrl: 'https://github.com/cicerotcv/buymeabitcoffee',
    productionUrl: 'https://buymeabitcoffee.vercel.app',
  },
  {
    title: 'Masker',
    description:
      'A lightweight utility library for applying input masks to format numbers and text with custom patterns.',
    tech: ['TypeScript', 'Utility', 'Library'],
    githubUrl: 'https://github.com/cicerotcv/masker',
    npmUrl: 'https://www.npmjs.com/package/@cicerotcv/masker',
  },
];

export default async function Home() {
  const githubProfile = await getGitHubProfile(siteConfig.social.github!);

  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      <About githubProfile={githubProfile} />
      <Projects projects={projects} />
      <Skills />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}
