import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, Target } from 'lucide-react';

export function Chapter3Section() {
  const statisticsImage = PlaceHolderImages.find(p => p.id === 'statistics');

  return (
    <section id="chapter-3" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Chapter Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Scale className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第三章：统计与推断基础
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            统计学是AI的基石，它让机器能从数据中学习规律，并对未知事件做出合理的预测。
          </p>
        </div>

        {/* III.1 MLE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">III.1 最大似然估计</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Target className="text-primary"/>从数据中找到最佳解释</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">最大似然估计 (MLE)</strong> 是统计推断的核心方法。它的目标是寻找一组参数，使得在这些参数下，我们观测到的数据出现的可能性（似然）最大。</p>
              <p>在机器学习中，我们通过最小化<strong className="text-foreground">负对数似然 (NLL)</strong> 损失函数来实现这一点。最小化NLL等同于最大化似然。对于分类和LLM预测任务，这最终会推导出我们常用的<strong className="text-foreground">交叉熵损失</strong>。</p>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：神射手调整瞄准镜</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>想象一位射手在射击。靶子上已经有了一些弹孔（观测数据）。MLE就像是这位射手不断调整TA的瞄准镜（模型参数），直到TA找到一个设置，能最好地解释为什么弹孔会分布在现在的位置。TA会想：“如果我这样瞄准，那么打出这些弹孔的可能性是最大的。” 训练AI模型的过程，就是不断调整“瞄准镜”，让模型对数据的“解释”最合理。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {statisticsImage && (
              <Image 
                src={statisticsImage.imageUrl} 
                alt={statisticsImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={statisticsImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
