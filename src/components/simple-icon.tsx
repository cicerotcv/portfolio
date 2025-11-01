'use client';

interface SimpleIconProps {
  name: string;
  size?: number;
  className?: string;
}

const iconSlugMap: Record<string, string> = {
  React: 'react',
  'Next.js': 'nextdotjs',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  HTML: 'html5',
  CSS: 'css3',
  'React Native': 'react',
  Expo: 'expo',
  iOS: 'apple',
  Android: 'android',
  'Node.js': 'nodedotjs',
  Express: 'express',
  'REST APIs': 'json',
  GraphQL: 'graphql',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  Redis: 'redis',
  Prisma: 'prisma',
  Docker: 'docker',
  AWS: 'amazonaws',
  'CI/CD': 'githubactions',
  Git: 'git',
  VSCode: 'visualstudio',
  Figma: 'figma',
  Jest: 'jest',
  WhatsApp: 'whatsapp',
  'Tailwind CSS': 'tailwindcss',
};

export function SimpleIcon({
  name,
  size = 24,
  className = '',
}: SimpleIconProps) {
  const slug =
    iconSlugMap[name] ||
    name.toLowerCase().replace(/\s+/g, '').replace(/\./g, 'dot');
  const iconUrl = `https://cdn.simpleicons.org/${slug}`;

  return (
    <span
      className={`inline-block ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        WebkitMask: `url(${iconUrl}) no-repeat center / contain`,
        mask: `url(${iconUrl}) no-repeat center / contain`,
      }}
      aria-label={name}
    />
  );
}
