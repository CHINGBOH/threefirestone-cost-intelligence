import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  return (
    <section className="relative h-[80vh] w-full">
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
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline animate-fade-in-down">
            电脑世界的终极秘密！
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 animate-fade-in-up">
            你有没有想过，聪明的电脑和AI到底是怎么工作的？今天，我们就一起揭开它的神秘面纱！
          </p>
          <div className="mt-10 animate-bounce">
            <Button size="lg" asChild>
              <a href="#revelation">
                开始探险 <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
