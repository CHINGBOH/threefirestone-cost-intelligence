import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Briefcase, Target } from 'lucide-react';

export function Chapter14Section() {
  const productBusinessImage = PlaceHolderImages.find(p => p.id === 'product-business');

  return (
    <section id="chapter-14" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Lightbulb className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第十四章：AI产品与商业
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            再伟大的技术，也需要通过产品触达用户、通过商业实现价值，才能真正地改变世界。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">XIV.1 从技术到产品</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Briefcase className="text-primary"/>AI产品的独特挑战</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>AI产品与传统软件产品有很大不同。它的核心是<strong className="text-foreground">“不确定性”</strong>。AI的输出是概率性的，这要求产品设计必须考虑如何优雅地处理错误、引导用户、并建立信任。此外，AI产品的迭代不仅是代码更新，更是<strong className="text-foreground">数据和模型的持续迭代</strong>（Data Flywheel）。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：驯养一只宠物 vs 制造一台机器</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">传统软件</strong>：就像制造一台洗衣机。它的每个按钮、每个程序都是100%确定的，行为完全可预测。</p>
                  <p><strong className="text-primary">AI产品</strong>：更像驯养一只聪明的宠物狗。你教会了它“坐下”，它大部分时候都会听话，但偶尔也可能会分心、耍赖或者“理解错误”。你需要用牵引绳（UI约束）、零食（用户反馈）来引导它，并和它建立长期的默契和信任。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {productBusinessImage && (
              <Image 
                src={productBusinessImage.imageUrl} 
                alt={productBusinessImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={productBusinessImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
