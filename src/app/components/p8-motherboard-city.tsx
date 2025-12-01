import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MotherboardCitySection() {
  const image = PlaceHolderImages.find(p => p.id === 'motherboard-city');
  
  return (
    <section id="p8-motherboard-city" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Map className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第8站：主板城市
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            国王CPU、课桌RAM、图书馆硬盘、画家GPU……这些大人物都住在哪儿呢？他们都住在一座叫“主板”的大城市里！
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
                <CardTitle className="font-headline">城市的交通网络</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">主板上有无数条发光的高速公路（电路），连接着所有居民。国王的命令、画家的画稿，都通过这些公路飞速传递。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline">大家庭的家</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">主板就像一个家，把所有零件紧紧地联系在一起，让他们可以互相沟通、协同工作，电脑王国才能正常运转。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
