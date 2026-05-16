import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Telescope, Bot, Atom } from 'lucide-react';

export function Chapter16Section() {
  const futureOutlookImage = PlaceHolderImages.find(p => p.id === 'future-outlook');

  return (
    <section id="chapter-16" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Telescope className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第十六章：未来展望
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            我们正处在技术爆炸的前夜。通用人工智能（AGI）的曙光初现，未来将走向何方？
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">XVI.1 超越AGI</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Bot className="text-primary"/>多模态、具身智能与世界模型</h3>
            <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-foreground">多模态智能</strong>将打破文本的束缚，让AI能同时理解和处理图像、声音、视频、甚至物理信号。而<strong className="text-foreground">具身智能 (Embodied AI)</strong> 则要为AI装上“身体”（如机器人），让它能在物理世界中感知、行动和学习。<strong className="text-foreground">世界模型 (World Models)</strong> 则是更宏大的目标：让AI在自己的“脑海”中构建一个对真实世界的模拟器，从而实现推理、规划和预测未来。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：从“书生”到“探险家”</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>今天的LLM像一个关在书房里的绝顶聪明的书生，他读万卷书，能言善辩，但从未亲眼见过世界。未来的AI，将是一个走出书房的探险家：他不仅有书生的智慧，还有猎人的眼睛（视觉）、音乐家的耳朵（听觉），以及一双能改造世界的巧手（机器人身体）。他甚至可以在自己的脑中构建一个沙盘，推演整个世界的变化。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {futureOutlookImage && (
              <Image 
                src={futureOutlookImage.imageUrl} 
                alt={futureOutlookImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={futureOutlookImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
