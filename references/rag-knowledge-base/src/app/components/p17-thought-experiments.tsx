import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquareQuote, Brain, Box } from 'lucide-react';

export function Chapter17Section() {
  const thoughtExperimentsImage = PlaceHolderImages.find(p => p.id === 'thought-experiments');

  return (
    <section id="chapter-17" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <MessageSquareQuote className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第十七章：思想实验
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            有些问题无法用代码解答，但它们帮助我们思考技术的边界和人类的位置。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {thoughtExperimentsImage && (
              <Image 
                src={thoughtExperimentsImage.imageUrl} 
                alt={thoughtExperimentsImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={thoughtExperimentsImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">XVII.1 哲学的挑战</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Brain className="text-primary"/>中文房间与意识之谜</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">“中文房间”思想实验</strong>质问：一个仅仅遵循规则处理符号的系统（就算它能完美地通过图灵测试），它真的“理解”语言吗？还是只是在进行无意识的符号操纵？这个问题直指AI“意识”的核心。</p>
              <p>今天的LLM，在某种程度上就是一个极其复杂的“中文房间”。它是否拥有真正的理解力，或者说，当硬件条件允许的复杂性高到一定程度后，符号操纵本身是否就会涌现出“理解”甚至“想象力”？这是一个悬而未决的深刻问题。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：鹦鹉学舌 vs 理解诗意</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>一只鹦鹉可以被训练得能说“我爱你”，甚至能在特定的情境下说出这句话，但它真的理解“爱”的含义吗？还是只是在重复一个能获得奖励的声音模式？LLM的“理解”更接近哪一种？亦或是第三种我们尚未定义的存在？</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
