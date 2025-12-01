import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Crown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MeetTheCPUSection() {
  const image = PlaceHolderImages.find(p => p.id === 'cpu-king');
  
  return (
    <section id="p4-meet-the-cpu" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Crown className="mx-auto h-12 w-12 text-yellow-400 animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第4站：大脑国王 (CPU)
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            在电脑王国里，住着一位国王，他就是CPU（中央处理器）！他虽然不下地干活，但他是整个王国最重要的大脑，负责发号施令！
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
                <CardTitle className="font-headline">国王的工作</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>“把这两个数字加起来！”</li>
                    <li>“检查一下，那个小兵是不是到位置了？”</li>
                    <li>“快告诉画师，把天空画成蓝色！”</li>
                </ul>
              </CardContent>
            </Card>
             <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline">一个超级快的国王</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">国王处理命令的速度，快到我们根本无法想象！这保证了整个电脑王国的运转流畅无比。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
