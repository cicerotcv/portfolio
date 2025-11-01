import Link from 'next/link';

import { Github, Linkedin, Mail } from 'lucide-react';

import { MotionSection } from '@/components/motion-section';
import { SimpleIcon } from '@/components/simple-icon';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';

export function Contact() {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <MotionSection>
            <h2 className="mb-4 text-3xl font-bold">Vamos trabalhar juntos?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Estou sempre aberto a novos projetos e oportunidades. Entre em
              contato!
            </p>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link
                  href={`mailto:${siteConfig.author.email}`}
                  target="_blank"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href={`https://wa.me/${siteConfig.author.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <SimpleIcon
                    name="WhatsApp"
                    size={16}
                    className="text-current"
                  />
                  WhatsApp
                </Link>
              </Button>
              {siteConfig.author.githubUrl && (
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href={siteConfig.author.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              )}
              {siteConfig.author.linkedinUrl && (
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href={siteConfig.author.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              )}
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
