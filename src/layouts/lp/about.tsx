import Image from 'next/image';
import Link from 'next/link';

import { Calendar, Github, User } from 'lucide-react';

import { MotionSection } from '@/components/motion-section';
import { Button } from '@/components/ui/button';
import type { GitHubProfile } from '@/lib/github';

interface AboutProps {
  githubProfile: GitHubProfile | null;
}

export function About({ githubProfile }: AboutProps) {
  return (
    <section
      id="sobre"
      className="border-border bg-muted/30 w-full border-t py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <div className="mb-8 flex items-center gap-3">
              <User className="text-primary h-6 w-6" />
              <h2 className="text-3xl font-bold">Sobre Mim</h2>
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div className="flex flex-col items-start gap-8 md:flex-row">
              {githubProfile?.avatar_url && (
                <div className="shrink-0 self-center md:self-start">
                  <Image
                    src={githubProfile.avatar_url}
                    alt={githubProfile.name}
                    width={200}
                    height={200}
                    className="border-border rounded-full border-4 shadow-lg"
                    priority
                  />
                </div>
              )}
              <div className="flex-1 space-y-4">
                {githubProfile && (
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">
                      {githubProfile.name}
                    </h3>

                    {githubProfile.bio && (
                      <p className="text-muted-foreground text-lg">
                        {githubProfile.bio}
                      </p>
                    )}
                    {githubProfile.createdAt && (
                      <div
                        className="text-muted-foreground flex flex-wrap gap-4
                          pt-2 text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <Calendar className="text-primary h-4 w-4" />
                          <span>
                            Desde{' '}
                            {new Date(githubProfile.createdAt).getFullYear()}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="text-muted-foreground space-y-4 pt-4 text-lg">
                  <p>
                    Desenvolvedor{' '}
                    <span className="text-primary font-semibold">
                      Full Stack
                    </span>{' '}
                    especializado em construir aplicações web e mobile modernas,
                    escaláveis e focadas na{' '}
                    <span className="text-primary font-semibold">
                      experiência do usuário
                    </span>
                    . Transformo ideias em soluções digitais que geram impacto
                    real.
                  </p>
                  <p>
                    Com expertise em tecnologias como{' '}
                    <span className="text-primary font-semibold">
                      React, Next.js, React Native e Node.js
                    </span>
                    , entrego projetos de alta qualidade com foco em{' '}
                    <span className="text-primary font-semibold">
                      código limpo
                    </span>
                    , bem estruturado e manutenível.
                  </p>
                  <p>
                    Sempre em busca de novos desafios e aprendizados contínuos,
                    acredito que a melhor solução é aquela que equilibra{' '}
                    <span className="text-primary font-semibold">
                      performance, usabilidade e manutenibilidade
                    </span>
                    .
                  </p>
                </div>
                {githubProfile?.htmlUrl && (
                  <div className="pt-4">
                    <Button variant="outline" asChild>
                      <Link
                        href={githubProfile.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Ver no GitHub
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
