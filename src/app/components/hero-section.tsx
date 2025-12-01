import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowDown, Rocket } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  return (
    <section className="relative h-[90vh] w-full">
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
          <Rocket className="mx-auto h-16 w-16 text-primary animate-bounce" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline animate-fade-in-down">
            欢迎来到电脑的魔法世界！
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            你有没有好奇过，我们每天玩的电脑和手机，这个神奇的“魔法盒”里面到底藏着什么秘密呢？今天，我们就一起踏上探险之旅，把所有秘密都找出来！
          </p>
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild className="animate-pulse">
              <a href="#p1-what-is-a-computer">
                马上出发！ <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
