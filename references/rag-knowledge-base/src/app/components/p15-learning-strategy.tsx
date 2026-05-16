import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Library, Compass, BookOpen } from 'lucide-react';

export function Chapter15Section() {
  const learningStrategyImage = PlaceHolderImages.find(p => p.id === 'learning-strategy');

  return (
    <section id="chapter-15" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Library className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第十五章：学习策略与资源
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            授人以鱼不如授人以渔。掌握高效的学习方法，远比收藏数不清的资料更重要。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {learningStrategyImage && (
              <Image 
                src={learningStrategyImage.imageUrl} 
                alt={learningStrategyImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={learningStrategyImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">XV.1 构建知识体系</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Compass className="text-primary"/>T型学习与第一性原理</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">T型学习法</strong>鼓励我们构建“一专多能”的知识结构：在某个领域深度钻研（T的竖线），同时广泛涉猎相关领域的知识（T的横线）。对于AI领域，深度可以是NLP，广度则可以涉及CV、后端工程、产品设计等。</p>
              <p>同时，坚持<strong className="text-foreground">第一性原理思考</strong>，不断追问“为什么”，从最基础的公理和定理出发去理解新知识，而不是仅仅停留在表面的类比和记忆上。这能让你建立真正坚固的知识大厦。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：挖井与开河</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>一个优秀的学习者，既要像一个钻井工人，在自己选择的领域深挖下去，直到挖出甘甜的泉水（成为专家）；也要像一个水利工程师，开凿运河，将自己的“深井”与其他领域的“河流湖泊”连接起来，形成一个融会贯通的水系网络（拥有广阔的视野）。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
