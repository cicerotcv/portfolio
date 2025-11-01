import { Code } from 'lucide-react';

import { InfiniteCarousel } from '@/components/infinite-carousel';
import { MotionSection } from '@/components/motion-section';
import { SimpleIcon } from '@/components/simple-icon';

interface Technology {
  name: string;
  description: string;
}

const technologies: Technology[] = [
  {
    name: 'React',
    description: 'Biblioteca JavaScript para interfaces de usuário',
  },
  { name: 'Next.js', description: 'Framework React para produção' },
  {
    name: 'React Native',
    description: 'Framework para desenvolvimento mobile',
  },
  { name: 'TypeScript', description: 'JavaScript com tipagem estática' },
  { name: 'JavaScript', description: 'Linguagem de programação' },
  { name: 'Node.js', description: 'Runtime JavaScript para backend' },
];

const technologyIcons = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'Git',
  'HTML',
  'Tailwind CSS',
  'Prisma',
  'GraphQL',
];

export function Technologies() {
  return (
    <section id="tecnologias" className="border-border border-t py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <Code className="text-primary h-6 w-6" />
                <h2 className="text-3xl font-bold">Tecnologias</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Especializado em desenvolvimento web e mobile com React,
                Next.js, React Native e Node.js
              </p>
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <InfiniteCarousel speed={30} className="mb-12 py-4">
              {technologyIcons.map((icon, index) => (
                <div
                  key={index}
                  className="flex shrink-0 items-center justify-center px-8"
                >
                  <SimpleIcon
                    name={icon}
                    size={48}
                    className="text-muted-foreground hover:text-primary
                      transition-colors"
                  />
                </div>
              ))}
            </InfiniteCarousel>
          </MotionSection>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <MotionSection key={index} delay={index * 0.1} className="h-full">
                <div
                  className="border-border bg-card flex h-full items-center
                    gap-3 rounded-lg border p-4 transition-all
                    hover:-translate-y-1 hover:shadow-sm"
                >
                  <SimpleIcon
                    name={tech.name}
                    size={32}
                    className="text-primary shrink-0 self-start"
                  />
                  <div className="self-start">
                    <h3 className="text-primary font-semibold">{tech.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
