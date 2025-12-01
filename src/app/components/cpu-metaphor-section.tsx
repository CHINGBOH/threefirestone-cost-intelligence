import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { UserCog, Clipboard, HardHat, Cog, ArrowDown } from 'lucide-react';

export function CpuMetaphorSection() {
  const factoryImage = PlaceHolderImages.find(p => p.id === 'factory');
  
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Cog className="mx-auto h-12 w-12 text-primary animate-spin-slow" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">谁是真正的大管家？</h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            你打开一个游戏，是不是以为是CPU老大亲自跑去工作的？才不是呢！CPU就像个国王，只管发号施令，真正干活的是一群勤劳的小精灵！
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline text-center lg:text-left">玩具工厂大冒险</h3>
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
              <CardContent className="p-4 flex items-center gap-4">
                <UserCog className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">CPU (国王)</h4>
                  <p className="text-sm text-muted-foreground">下达命令：“快！组装小汽车！”</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto animate-bounce" />
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-4 flex items-center gap-4">
                <Clipboard className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">I/O桥 (精灵主管)</h4>
                  <p className="text-sm text-muted-foreground">把国王的命令传给正确的精灵小队。</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto animate-bounce" />
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-4 flex items-center gap-4">
                <HardHat className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">设备控制器 (精灵工人)</h4>
                  <p className="text-sm text-muted-foreground">收到命令，马上开始用魔法工具干活！</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            {factoryImage && (
              <Image 
                src={factoryImage.imageUrl} 
                alt={factoryImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full aspect-[3/2] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={factoryImage.imageHint}
              />
            )}
            <p className="text-center mt-8 text-muted-foreground">小精灵们的合作天衣无缝，才能让玩具工厂运转起来！</p>
          </div>
        </div>
      </div>
    </section>
  );
}
