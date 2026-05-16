import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowDown, BrainCircuit } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  return (
    <section id="hero" className="relative h-[90vh] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="container max-w-4xl">
          <BrainCircuit className="mx-auto h-16 w-16 text-primary animate-bounce" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline animate-fade-in-down">
            探索电脑的奥秘：从底层原理到大型语言模型
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            这并非一份包罗万象的百科全书，而是一次精心策划的知识探险。它旨在系统性地梳理出一条从计算机底层理论到大型语言模型（LLM）的核心脉络，帮助您洞察理论与工程的内在联系。
          </p>
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild className="animate-pulse">
              <a href="#chapter-1">
                开始探索 <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
