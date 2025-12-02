import { Cpu, BookOpen } from 'lucide-react';
import { AppSidebarTrigger } from './app-sidebar';


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center md:hidden">
          <AppSidebarTrigger />
        </div>
        <div className="mr-4 hidden md:flex items-center">
          <Cpu className="h-6 w-6 mr-2 text-primary animate-pulse" />
          <span className="font-bold font-headline">电脑的奥秘</span>
        </div>
        <div className="flex-1" />
        <p className="text-sm text-muted-foreground">从底层原理到大型语言模型</p>
      </div>
    </header>
  );
}
