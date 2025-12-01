import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function OsConductorSection() {
  const image = PlaceHolderImages.find(p => p.id === 'os-conductor');
  
  return (
    <section id="p11-os-conductor" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Music className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第11站：系统大指挥家 (OS)
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            电脑王国里有这么多角色，谁来管理他们，让他们合作无间呢？这位大总管就是“操作系统”（OS），像一个乐团的大指挥家！
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">调度大师</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">指挥家决定什么时候让国王CPU思考，什么时候让画家GPU画画，什么时候从图书馆取书，保证一切井井有条。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">翻译官</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">它还负责把我们的话（比如点击鼠标）翻译成国王能听懂的命令，再把国王的处理结果翻译成我们能看懂的画面。</p>
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
