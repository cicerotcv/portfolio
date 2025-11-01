import { Layers } from 'lucide-react';

import { MotionSection } from '@/components/motion-section';
import { SimpleIcon } from '@/components/simple-icon';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React',
  'Next.js',
  'React Native',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'Git',
];

export function Skills() {
  return (
    <section id="skills" className="border-border bg-muted/30 border-t py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <Layers className="text-primary h-6 w-6" />
                <h2 className="text-3xl font-bold">Skills</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Tecnologias e ferramentas com as quais trabalho.
              </p>
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  size="xl"
                  className="flex items-center gap-2"
                >
                  <SimpleIcon
                    name={skill}
                    size={20}
                    className="text-primary shrink-0"
                  />
                  <span>{skill}</span>
                </Badge>
              ))}
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
