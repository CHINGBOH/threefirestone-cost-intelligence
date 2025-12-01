import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Paintbrush } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function GpuArtistSection() {
  const image = PlaceHolderImages.find(p => p.id === 'gpu-artist');
  
  return (
    <section id="p7-gpu-artist" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Paintbrush className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第7站：绘画天才 (GPU)
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            国王CPU虽然聪明，但画画这种事，他可不擅长。所以他请来了一位绘画天才——GPU（显卡），专门负责屏幕上所有好看的画面！
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
           <div className="space-y-6 animate-fade-in-up">
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">专心画画的艺术家</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">GPU的心里只有一件事：画画！它有成千上万个小画笔，可以同时给屏幕上的每一个点上色，所以游戏画面才能那么漂亮流畅。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">国王的好帮手</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">有了GPU帮忙，国王CPU就可以专心处理其他重要的事情，不用再为画画这种“小事”分心啦。</p>
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
