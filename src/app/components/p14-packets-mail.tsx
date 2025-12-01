import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PacketsMailSection() {
  const image = PlaceHolderImages.find(p => p.id === 'packets-mail');
  
  return (
    <section id="p14-packets-mail" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Mail className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第14站：飞翔的信件 (数据包)
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            在网络宇宙里传输信息，就像寄信一样。一个完整的视频或图片太大了，寄不了，怎么办？聪明的电脑会把它切成一小块一小块，装进许多小信封里！
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
                <CardTitle className="font-headline">打包发送</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">每一个小信封叫做“数据包”，上面写着地址和编号，然后就各自出发啦！</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline">重新组装</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">当你的电脑收到所有小信封后，会按照编号把它们重新拼起来，一个完整的视频就出现啦！是不是很神奇？</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
