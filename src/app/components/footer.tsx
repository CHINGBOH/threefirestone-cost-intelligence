import { Cpu } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
            <Cpu className="h-4 w-4" />
            <p>&copy; {new Date().getFullYear()} Tech Deep Dive. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
