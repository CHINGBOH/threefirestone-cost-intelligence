import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MemoryStick, Cpu, Layers } from 'lucide-react';

export function Chapter8Section() {
  const architectureImage = PlaceHolderImages.find(p => p.id === 'architecture');

  return (
    <section id="chapter-8" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <MemoryStick className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第八章：计算机体系结构
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            如果软件是思想，那么硬件就是承载思想的肉体。本章我们将深入“皮肤”之下，探索驱动现代计算，特别是AI的硬件核心。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">VIII.1 核心处理器</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Cpu className="text-primary"/>CPU vs GPU vs TPU</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">CPU (中央处理器)</strong> 是通用计算的核心，擅长处理复杂的逻辑和串行任务。而 <strong className="text-foreground">GPU (图形处理器)</strong> 最初为游戏设计，拥有数千个小核心，天生擅长并行处理大量简单的数学运算，这恰好是深度学习所需要的。 <strong className="text-foreground">TPU (张量处理器)</strong> 则是谷歌为AI量身定制的专用芯片，它在执行大规模矩阵运算时效率更高。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：厨房里的厨师</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">CPU</strong>：像一位经验丰富的主厨，能独立完成从切菜、炒菜到装盘的任何复杂菜肴，但一次只能专注做一道。</p>
                  <p><strong className="text-primary">GPU</strong>：像一大群帮厨，每个人只会做“切土豆丝”这一件事，但一千个人同时切，瞬间就能准备好全城宴席的土豆丝。</p>
                   <p><strong className="text-primary">TPU</strong>：像一台全自动土豆切丝机，专门为“切土豆丝”这一任务设计，速度比任何帮厨都快。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {architectureImage && (
              <Image 
                src={architectureImage.imageUrl} 
                alt={architectureImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={architectureImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
