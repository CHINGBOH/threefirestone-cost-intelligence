import { Binary } from 'lucide-react';

export function CoreRevelationSection() {
  const binaryString = Array(100).fill('01').join('');

  return (
    <section id="revelation" className="py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <Binary className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">电脑的悄悄话</h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            你猜怎么着？电脑其实不会“思考”哦！它就像一个超～级巨大的乐高城堡，里面塞满了无数个小小的电灯开关。
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
