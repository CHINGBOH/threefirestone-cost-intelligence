import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RamDeskSection() {
  const image = PlaceHolderImages.find(p => p.id === 'ram-desk');
  
  return (
    <section id="p5-ram-desk" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Edit className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第5站：国王的神奇课桌 (RAM)
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            国王CPU需要一个地方来放他正在处理的事情，这个地方就是RAM（内存），就像国王的一张巨大但有点乱的课桌。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">速度第一！</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">课桌上的东西随手就能拿到，所以速度超级快！国王玩游戏、画画时需要的东西都放在这里，这样才能反应迅速。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">断电就忘光</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">但这张课桌有个缺点：下班（关机）的时候，桌上的东西就会被清理得一干二净！所以它只适合放临时要用的东西。</p>
              </CardContent>
            </Card>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {image && (
              <Image 
                src={image.imageUrl} 
                alt={image.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[3/2] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
