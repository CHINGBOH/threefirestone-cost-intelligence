import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, GraduationCap, Link, Cpu, BookCopy, Zap, Reply, Cog } from 'lucide-react';

export function Chapter4Section() {
  const learningParadigmsImage = PlaceHolderImages.find(p => p.id === 'learning-paradigms');
  const neuralNetworkImage = PlaceHolderImages.find(p => p.id === 'neural-network');
  const backpropagationImage = PlaceHolderImages.find(p => p.id === 'backpropagation');

  return (
    <section id="chapter-4" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        {/* Chapter Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <GraduationCap className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第四章：机器学习与深度学习基础
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            这是AI魔法的核心所在。机器通过数据学习，像人类一样获得“智能”。本章将揭示其背后的学习范式、核心架构和训练动力。
          </p>
        </div>

        {/* IV.1 Learning Paradigms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">IV.1 三大核心学习范式</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><BookCopy className="text-primary"/>AI的三种学习方式</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>AI的学习方式主要有三种：<strong className="text-foreground">监督学习</strong>（有标准答案的学习）、<strong className="text-foreground">无监督学习</strong>（在没有答案的数据中找规律）和<strong className="text-foreground">强化学习</strong>（通过试错和奖励来学习）。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：三种学生</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">监督学习</strong>：像一个有好老师的学生，老师给他很多带答案的练习题，让他学会举一反三。</p>
                  <p><strong className="text-primary">无监督学习</strong>：像一个自学能力超强的学生，给他一堆杂乱的资料，他能自己分门别类，找出其中的规律。</p>
                  <p><strong className="text-primary">强化学习</strong>：像一个在玩游戏的学生，通过不断尝试，做对了得到奖励（得分），做错了得到惩罚（扣分），最终学会了通关秘籍。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {learningParadigmsImage && (
              <Image 
                src={learningParadigmsImage.imageUrl} 
                alt={learningParadigmsImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={learningParadigmsImage.imageHint}
              />
            )}
          </div>
        </div>

        {/* IV.2 Neural Networks & Activation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {neuralNetworkImage && (
              <Image 
                src={neuralNetworkImage.imageUrl} 
                alt={neuralNetworkImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={neuralNetworkImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">IV.2 神经网络架构</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Brain className="text-primary"/>模仿大脑的思考网络</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>神经网络模仿人脑神经元的工作方式，由许多“神经元”节点组成。而<strong className="text-foreground">激活函数</strong>是其中的关键，它决定了神经元是否应该被“激活”，并为网络引入了非线性，使得网络能够学习复杂的模式。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：大脑的“开关”</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>把神经网络想象成一个巨大的、由乐高积木搭成的“大脑”。如果所有积木都是直来直去的方块（线性），你最多只能搭出一堵墙。但如果加入一些奇形怪状的积木（非线性激活函数），你就能搭出城堡、飞船等任何复杂的东西。激活函数就是那些让AI“脑洞大开”的关键零件。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* IV.3 Backpropagation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">IV.3 反向传播算法</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Reply className="text-primary"/>AI如何从错误中学习</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">反向传播 (Backpropagation)</strong> 是训练神经网络的核心动力。它通过计算预测结果与真实答案之间的“差距”（损失），然后从后往前，逐层告诉每个神经元应该如何调整自己，以便下次做得更好。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：多米诺骨牌倒推</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>想象一排多米诺骨牌，你推倒了最后一枚，但它倒向了错误的方向。反向传播就像是把这个“错误”从最后一枚骨牌开始，一个一个往前传导，告诉每一枚骨牌：“嘿，你需要稍微调整一下位置，下次才能倒对！”。通过这种方式，整个骨牌阵列（神经网络）就学会了如何正确地倒下。</p>
                </CardContent>
              </Card>
            </div>
          </div>
           <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {backpropagationImage && (
              <Image 
                src={backpropagationImage.imageUrl} 
                alt={backpropagationImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={backpropagationImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
