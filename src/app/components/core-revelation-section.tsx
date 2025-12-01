import { Binary } from 'lucide-react';

export function CoreRevelationSection() {
  const binaryString = Array(100).fill('01').join('');

  return (
    <section id="revelation" className="py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <Binary className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">不是“智能”，而是开关</h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            悄悄告诉你：你的电脑并没有“智慧”。它只是一个由无数开关组成的巨大网络，每个开关只有两种状态：开或关。
          </p>
        </div>
        <div className="mt-16 relative flex flex-col gap-4">
          <div className="flex -translate-x-1/4">
            <p className="font-mono text-xl sm:text-2xl md:text-3xl text-primary/30 whitespace-nowrap animate-marquee">
              {binaryString}
            </p>
             <p className="font-mono text-xl sm:text-2xl md:text-3xl text-primary/30 whitespace-nowrap animate-marquee">
              {binaryString}
            </p>
          </div>
          <div className="flex -translate-x-1/2">
             <p className="font-mono text-xl sm:text-2xl md:text-3xl text-accent/30 whitespace-nowrap animate-marquee-reverse">
              {binaryString}
            </p>
             <p className="font-mono text-xl sm:text-2xl md:text-3xl text-accent/30 whitespace-nowrap animate-marquee-reverse">
              {binaryString}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
