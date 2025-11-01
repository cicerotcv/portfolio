'use client';

import Link from 'next/link';

import { ArrowRight, Mail } from 'lucide-react';

import DotGrid from '@/components/dot-grid';
import { TypingEffect } from '@/components/typing-effect';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Hero() {
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
          baseColor="#291d0f"
          activeColor="#d93d3f"
          proximity={150}
          shockRadius={300}
          shockStrength={5}
          resistance={500}
          returnDuration={1}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-6">
          <Badge size="lg" shape="rounded">
            Desenvolvedor Full Stack
          </Badge>
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl">
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
        <p className="text-muted-foreground mb-8 max-w-2xl text-xl">
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
