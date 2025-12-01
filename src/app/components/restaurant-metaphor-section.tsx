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
          <Layers className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">层层递进的魔法</h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            你的一个想法，是怎样变成电脑里的一个动作的呢？这就像一场奇妙的传话游戏，你的“人类语”被一层层翻译成了“机器语”。
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
            <h3 className="text-2xl font-bold font-headline text-center lg:text-left">就像在一家神奇餐厅...</h3>
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
              <CardContent className="p-4 flex items-center gap-4">
                <User className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">你 (小顾客)</h4>
                  <p className="text-sm text-muted-foreground">“我想要一个草莓味的大蛋糕！”</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto animate-bounce" />
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-4 flex items-center gap-4">
                <ConciergeBell className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">操作系统 (魔法服务员)</h4>
                  <p className="text-sm text-muted-foreground">把你的话翻译成厨师能懂的“蛋糕密语”。</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto animate-bounce" />
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-4 flex items-center gap-4">
                <ChefHat className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">CPU (天才厨师)</h4>
                  <p className="text-sm text-muted-foreground">看懂密语，开始施展魔法做蛋糕！</p>
                </div>
              </CardContent>
            </Card>
             <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto animate-bounce" />
             <Card className="transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <CardContent className="p-4 flex items-center gap-4">
                <Bot className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">硬件 (魔法厨房)</h4>
                  <p className="text-sm text-muted-foreground">烤箱、打蛋器……所有工具都动起来！</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <p className="text-center mt-16 text-lg text-foreground/80 max-w-3xl mx-auto">正是因为这套“一板一眼”的传话规则，你天马行空的想法才能变成现实。这是不是超酷的！</p>
      </div>
    </section>
  );
}
