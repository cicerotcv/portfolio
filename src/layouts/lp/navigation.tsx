import { SimpleIcon } from '@/components/simple-icon';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/config/site.config';

export function Navigation() {
  return (
    <nav
      className="border-border bg-background/80 sticky top-0 z-50 border-b
        backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <SimpleIcon name="React" className="text-primary h-6 w-6" />
            <span className="text-lg font-semibold">
              {siteConfig.site.name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="#sobre"
                className="text-muted-foreground hover:text-foreground text-sm
                  font-medium transition-colors"
              >
                Sobre
              </a>
              <a
                href="#projetos"
                className="text-muted-foreground hover:text-foreground text-sm
                  font-medium transition-colors"
              >
                Projetos
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-foreground text-sm
                  font-medium transition-colors"
              >
                Skills
              </a>
              <a
                href="#tecnologias"
                className="text-muted-foreground hover:text-foreground text-sm
                  font-medium transition-colors"
              >
                Tecnologias
              </a>
              <a
                href="#contato"
                className="text-muted-foreground hover:text-foreground text-sm
                  font-medium transition-colors"
              >
                Contato
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
