import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Copy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function VirtualizationSection() {
  const image = PlaceHolderImages.find(p => p.id === 'virtualization-cats');
  
  return (
    <section id="p16-virtualization-magic" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Copy className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第16站：分身魔法 (虚拟化)
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            云端城堡里住着那么多台电脑，怎么管理呢？魔法师们发明了一种“分身术”，叫做虚拟化。它可以把一台真实的大电脑，变成许多台小电脑！
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative animate-fade-in-up">
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
          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline">一变多！</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">就像孙悟空拔一根猴毛就能变出好多小猴子，一台服务器可以变出很多台“虚拟”服务器，分别给不同的人使用，互不打扰。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline">不是假的，是“功能一样”</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">“虚拟”不等于“假的”哦！这些小电脑虽然看不见摸不着，但功能和真电脑一模一样！</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
