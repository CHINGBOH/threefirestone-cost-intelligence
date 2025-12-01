import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Code, BookHeart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProgrammingChefSection() {
  const image = PlaceHolderImages.find(p => p.id === 'programming-chef');
  
  return (
    <section id="p17-programming-chef" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <BookHeart className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第17站：编程小厨师
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            电脑王国里的所有规则和应用（比如游戏），是谁创造的呢？是“程序员”！他们就像小厨师，用叫做“代码”的特殊食材，做出各种美味的“程序大餐”。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
           <div className="space-y-6 animate-fade-in-up">
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">神奇的食谱（代码）</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">代码就是一份份详细的食谱，告诉电脑国王CPU一步一步该做什么。比如，“先拿起一个苹果，再把它切成两半”。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader className="flex-row items-center gap-4">
                  <Code className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline">不同的“菜系”</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">编程语言就像不同的菜系（比如中餐、西餐），虽然做法不同，但都能做出好吃的菜。Python、JavaScript、C++都是有名的“菜系”哦。</p>
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
