import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <p>&copy; {new Date().getFullYear()} 电脑的奥秘。由 AI 助手构建。</p>
        </div>
      </div>
    </footer>
  );
}
