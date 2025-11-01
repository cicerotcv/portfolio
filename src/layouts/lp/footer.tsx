import Link from 'next/link';

import { Github, Linkedin, Mail } from 'lucide-react';

import { SimpleIcon } from '@/components/simple-icon';
import { siteConfig } from '@/config/site.config';

export function Footer() {
  return (
    <footer className="border-border bg-muted/30 border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-between gap-4
            sm:flex-row"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {siteConfig.site.name}. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-4">
            {siteConfig.author.githubUrl && (
              <Link
                href={siteConfig.author.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground
                  transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            {siteConfig.author.linkedinUrl && (
              <Link
                href={siteConfig.author.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground
                  transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
            <Link
              href={`mailto:${siteConfig.author.email}`}
              className="text-muted-foreground hover:text-foreground
                transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.author.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground
                transition-colors"
            >
              <SimpleIcon name="WhatsApp" size={20} className="text-current" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
