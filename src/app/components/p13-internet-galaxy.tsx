import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function InternetGalaxySection() {
  const image = PlaceHolderImages.find(p => p.id === 'internet-galaxy');
  
  return (
    <section id="p13-internet-galaxy" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Globe className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第13站：网络大宇宙
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            你的电脑不是一座孤岛！它通过一根神奇的线（或者看不见的电波）连接到了一个巨大的宇宙，叫做“互联网”。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">亿万颗星星</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">在这个宇宙里，有亿万颗星星，每一颗星星都是一台电脑。它们互相连接，分享信息。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">光速旅行</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">你想看的视频、想玩的游戏，可能就储存在宇宙另一端的星星上。通过互联网，你可以瞬间“飞”过去拿到它们！</p>
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
