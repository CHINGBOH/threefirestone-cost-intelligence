import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { User, ConciergeBell, ChefHat, Bot, Layers, ArrowDown } from 'lucide-react';

export function RestaurantMetaphorSection() {
  const restaurantImage = PlaceHolderImages.find(p => p.id === 'restaurant');

  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Layers className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">抽象的魔力</h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            从你的想法到一个任务完成，电脑内部发生了什么？答案是：一层层的抽象和翻译。你的想法从人类语言到机器语言，走过了一条漫长的道路。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            {restaurantImage && (
              <Image 
                src={restaurantImage.imageUrl} 
                alt={restaurantImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full aspect-[3/2] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={restaurantImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <h3 className="text-2xl font-bold font-headline text-center lg:text-left">就像在餐厅里...</h3>
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-4 flex items-center gap-4">
                <User className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">你 (顾客)</h4>
                  <p className="text-sm text-muted-foreground">你用自然的语言点餐。</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-4 flex items-center gap-4">
                <ConciergeBell className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">操作系统 (服务员)</h4>
                  <p className="text-sm text-muted-foreground">把你的点单翻译给厨师听。</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-4 flex items-center gap-4">
                <ChefHat className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">中央处理器(CPU) (厨师)</h4>
                  <p className="text-sm text-muted-foreground">执行指令，准备饭菜。</p>
                </div>
              </CardContent>
            </Card>
             <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
             <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-4 flex items-center gap-4">
                <Bot className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">硬件 (厨房)</h4>
                  <p className="text-sm text-muted-foreground">真正干活的工具和设备。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <p className="text-center mt-16 text-lg text-foreground/80 max-w-3xl mx-auto">正是计算机语言的“死板”，才让你“天马行空”的想法能被最精确的开关网络执行。这是一个工程奇迹！</p>
      </div>
    </section>
  );
}
