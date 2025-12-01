import { Cpu, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <p>&copy; {new Date().getFullYear()} 电脑魔法探险之旅。由AI小助手倾情打造。</p>
        </div>
      </div>
    </footer>
  );
}
