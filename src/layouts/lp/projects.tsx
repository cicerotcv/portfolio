import Link from 'next/link';

import { Briefcase, Github, Package } from 'lucide-react';

import { MotionSection } from '@/components/motion-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  productionUrl?: string;
  npmUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <Briefcase className="text-primary h-6 w-6" />
                <h2 className="text-3xl font-bold">Projetos</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Alguns dos projetos em que trabalhei, cada um com desafios
                únicos e soluções inovadoras.
              </p>
            </div>
          </MotionSection>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <MotionSection key={index} delay={index * 0.1} className="flex">
                <div
                  className="group bg-card hover:shadow-primary/10 relative flex
                    flex-col overflow-hidden rounded-lg border p-6
                    transition-all hover:shadow-lg"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mt-auto mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} shape="rounded">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Ver no GitHub
                      </Link>
                    </Button>

                    {(project.productionUrl || project.npmUrl) && (
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={project.productionUrl || project.npmUrl || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Package className="mr-2 h-4 w-4" />
                          {project.npmUrl ? 'Ver no NPM' : 'Ver site'}
                        </Link>
                      </Button>
                    )}
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
