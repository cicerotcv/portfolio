'use client';

import Link from 'next/link';

import { ArrowRight, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';

import DotGrid from '@/components/dot-grid';
import { TypingEffect } from '@/components/typing-effect';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { theme } = useTheme();
  const baseColor = theme === 'dark' ? '#220001' : '#ffeeee';
  const activeColor = theme === 'dark' ? '#d93d3f' : '#d93d3f';

  return (
    <section
      className="relative container mx-auto overflow-hidden px-4 py-20 sm:px-6
        sm:py-32 lg:px-8"
    >
      {/* DotGrid Background */}
      <div className="absolute inset-0">
        <DotGrid
          dotSize={4}
          gap={20}
          baseColor={baseColor}
          activeColor={activeColor}
          proximity={150}
          shockRadius={300}
          shockStrength={5}
          resistance={500}
          returnDuration={1}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl rounded-sm">
        <div className="mb-6">
          <Badge size="lg" shape="rounded">
            Desenvolvedor Full Stack
          </Badge>
        </div>
        <h1
          className="bg-background/5 mb-6 text-5xl font-bold tracking-tight
            backdrop-blur-[2px] lg:text-6xl"
        >
          Transformo ideias em soluções digitais de alto{' '}
          <span className="text-primary">
            <TypingEffect
              words={[
                'impacto',
                'valor',
                'desempenho',
                'nível',
                'potencial',
                'retorno',
                'padrão',
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              pauseTime={2500}
              loop
            />
          </span>
        </h1>
        <p
          className="text-muted-foreground bg-background/5 mb-8 max-w-2xl
            text-xl backdrop-blur-[2px]"
        >
          Desenvolvedor Full Stack especializado em React, Next.js e React
          Native. Construo aplicações que combinam{' '}
          <span className="text-foreground font-medium">
            performance, design e código de qualidade
          </span>{' '}
          para gerar resultados reais.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="group" asChild>
            <Link href="#projetos">
              Ver Projetos
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform
                  group-hover:translate-x-1"
              />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/5 border-border/50 backdrop-blur-xs"
            asChild
          >
            <Link href="#contato">
              <Mail className="mr-2 h-4 w-4" />
              Entrar em Contato
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
