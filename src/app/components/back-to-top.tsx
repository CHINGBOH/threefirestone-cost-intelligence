'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      size="icon"
      className={cn(
        'fixed bottom-8 right-8 rounded-full shadow-2xl transition-all duration-300',
        'scale-0 opacity-0 animate-in fade-in zoom-in',
        isVisible && 'scale-100 opacity-100'
      )}
      onClick={scrollToTop}
      aria-label="返回顶部"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
