import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function WhatIsAComputerSection() {
  const image = PlaceHolderImages.find(p => p.id === 'what-is-computer');
  
  return (
    <section id="p1-what-is-a-computer" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <HelpCircle className="mx-auto h-12 w-12 text-primary animate-spin-slow" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第1站：认识魔法盒
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            你眼前的这个盒子，不管是台式机、笔记本还是手机，都是一台电脑。它就像一个超级听话的仆人，但它只会做一件事：执行命令！
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
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">它不会“思考”</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">电脑自己什么都想不出来。你让它做什么，它就做什么，绝对不会偷懒或者耍小聪明。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardHeader>
                <CardTitle className="font-headline">它超级快</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">虽然它不会思考，但它执行命令的速度快得惊人，一秒钟能完成几十亿次计算，比我们一生中眨眼的次数还多！</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
