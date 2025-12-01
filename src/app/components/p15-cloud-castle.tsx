import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function CloudCastleSection() {
  const image = PlaceHolderImages.find(p => p.id === 'cloud-castle');
  
  return (
    <section id="p15-cloud-castle" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Cloud className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第15站：云端城堡
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            你有没有听过“云”？“云”并不是天上的白云，而是指网络宇宙深处，由成千上万台电脑组成的一个巨大无比的“云端城堡”！
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">什么都能存</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">你的照片、游戏存档，都可以存放在云端城堡里。这样，就算你换了新电脑，只要登录账号，就能把它们都找回来！</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">强大的计算能力</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">很多复杂的AI计算和大型游戏，其实都是在云端城堡里完成的，然后再把结果传给你。这样你的电脑就不会那么累啦。</p>
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
