import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rss, ToyBrick, MemoryStick, Rocket, Lightbulb, Recycle } from 'lucide-react';

export function Chapter6Section() {
  const transformerImage = PlaceHolderImages.find(p => p.id === 'transformer');
  const peftImage = PlaceHolderImages.find(p => p.id === 'peft');
  const forgettingImage = PlaceHolderImages.find(p => p.id === 'catastrophic-forgetting');
  const inferenceImage = PlaceHolderImages.find(p => p.id === 'inference-optimization');

  return (
    <section id="chapter-6" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        {/* Chapter Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Rss className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第六章：大型语言模型（LLM）体系结构
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            欢迎来到AI世界的最前沿！本章将揭开大型语言模型（LLM）的神秘面纱，看看这些“最强大脑”是如何构建、学习和为我们服务的。
          </p>
        </div>

        {/* VI.1 Transformer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">VI.1 Transformer架构</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><ToyBrick className="text-primary"/>LLM的核心骨架</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>LLM之所以如此强大，离不开一个名为<strong className="text-foreground">Transformer</strong>的神奇架构。它的核心武器是<strong className="text-foreground">自注意力机制 (Self-Attention)</strong>，这让模型在处理一句话时，能够同时“关注”到所有词语，并理解它们之间的复杂关系。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：拥有超强记忆力的阅读机器人</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>想象一个阅读机器人，当它读到“苹果”这个词时，它不仅知道这是个水果，还能立刻联想到句子里的“乔布斯”，从而明白这里指的是“苹果公司”。Transformer就像这个机器人，能在一瞬间捕捉到全局信息，理解上下文的真正含义。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {transformerImage && (
              <Image 
                src={transformerImage.imageUrl} 
                alt={transformerImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={transformerImage.imageHint}
              />
            )}
          </div>
        </div>

        {/* VI.2 PEFT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {peftImage && (
              <Image 
                src={peftImage.imageUrl} 
                alt={peftImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={peftImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">VI.2 参数高效微调 (PEFT)</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Lightbulb className="text-primary"/>让AI低成本学会新技能</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>训练一个完整的LLM需要巨大的资源，但我们如何让它学会新领域的知识呢？答案是<strong className="text-foreground">参数高效微调 (PEFT)</strong>，其中最著名的就是<strong className="text-foreground">LoRA</strong>技术。它冻结了模型的大部分“大脑”，只训练一小部分新增的“外挂模块”。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：给机器人加装小配件</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>你有一个功能强大的通用机器人（预训练模型），现在想让它学会画画。你不需要重新改造整个机器人，只需要给它加装一个“绘画手臂”的配件（LoRA模块），然后只训练这个手臂如何使用画笔。这样既快又省钱，而且机器人原有的走路、说话能力都不会受影响。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* VI.3 Catastrophic Forgetting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">VI.3 灾难性遗忘</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Recycle className="text-primary"/>AI学习新知识的烦恼</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>当LLM学习新知识时，有时会忘记旧的知识，这就是<strong className="text-foreground">灾难性遗忘 (Catastrophic Forgetting)</strong>。为了解决这个问题，科学家们想出了很多办法，比如在学习新东西的时候，定期“复习”一下旧知识。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：只顾学新课，忘了旧知识</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>就像一个学生，如果这个学期只顾着学物理，完全不碰上学期学的化学，那化学知识可能就忘光了。为了避免这种情况，聪明的做法是在学物理的同时，每周抽点时间做几道化学题“复习”一下，这样就能新旧知识两不误。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {forgettingImage && (
              <Image 
                src={forgettingImage.imageUrl} 
                alt={forgettingImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={forgettingImage.imageHint}
              />
            )}
          </div>
        </div>

        {/* VI.4 Inference Optimization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {inferenceImage && (
              <Image 
                src={inferenceImage.imageUrl} 
                alt={inferenceImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={inferenceImage.imageHint}
              />
            )}
          </div>
           <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">VI.4 推理优化</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Rocket className="text-primary"/>让AI跑得更快更省力</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>一个强大的LLM虽然聪明，但可能“体重”很大，思考速度很慢。为了让它在实际应用中更高效，我们需要进行<strong className="text-foreground">推理优化</strong>。常用的方法有<strong className="text-foreground">量化 (Quantization)</strong> 和 <strong className="text-foreground">剪枝 (Pruning)</strong>。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：给机器人减肥和抄近道</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">量化</strong>：就像把一个知识渊博但有点胖的机器人，通过信息压缩技术（比如把厚厚的精装书换成轻薄的摘要笔记），让它变得更苗条、更敏捷，虽然知识精度略有下降，但行动快多了。</p>
                  <p><strong className="text-primary">剪枝</strong>：就像发现机器人大脑里有些神经回路（参数）从来没用过，或者作用很小，于是就把它们“剪掉”，让大脑的运行更加高效，不浪费能量。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
