import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calculator, Puzzle, ToyBrick } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Chapter1Section() {
  const automataImage = PlaceHolderImages.find(p => p.id === 'automata');
  const complexityImage = PlaceHolderImages.find(p => p.id === 'complexity');
  const entropyImage = PlaceHolderImages.find(p => p.id === 'entropy');
  
  return (
    <section id="chapter-1" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Chapter Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <ToyBrick className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第一章：计算基础与抽象层级
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            计算机系统是一个通过多层抽象构建的复杂结构，旨在将底层的物理操作转化为高级的逻辑功能。本章将探索其理论基石。
          </p>
        </div>

        {/* I.1 Digital Foundations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">I.1 数字化基础</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><ToyBrick className="text-primary"/>抽象层级与计算模型</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>在计算理论的圣殿中，<strong className="text-foreground">图灵机</strong>不仅是一个抽象模型，更是“可计算性”的黄金标准。由艾伦·图灵在20世纪30年代提出的这个思想实验，为现代计算机的诞生奠定了理论基石，并帮助盟军在二战中破译了德军的“英格玛”密码，深刻地影响了历史进程。</p>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：拥有无限纸带的机器人</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>想象一个机器人，它面前有一条无限长的纸带，纸带被分成一个个小格子。机器人可以读取格子里的符号，改写它，然后向左或向右移动一格。给它一套简单的规则，它就能执行任何你能想到的计算任务——这就是图灵机的本质。它定义了所有计算机能力的理论上限。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {automataImage && (
              <Image 
                src={automataImage.imageUrl} 
                alt={automataImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={automataImage.imageHint}
              />
            )}
          </div>
        </div>

        {/* I.2 Computational Complexity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {complexityImage && (
              <Image 
                src={complexityImage.imageUrl} 
                alt={complexityImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={complexityImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">I.2 计算复杂性</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Puzzle className="text-primary"/>可行性与难解性 (P vs NP)</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">P类问题</strong>指那些能被计算机“快速”解决的问题（在多项式时间内）。而<strong className="text-foreground">NP类问题</strong>指那些解的正确性可以被“快速”验证的问题。计算机科学中最著名的千禧年大奖难题之一就是：是否所有NP问题都是P问题（即P=NP?）</p>
               <p><strong className="text-foreground">NP-Complete (NPC)</strong> 问题是NP中最难的一类。如果解决了任何一个NPC问题，就等于解决了所有NP问题。旅行商问题(TSP)就是一个典型的NPC问题。</p>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：拼图游戏</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">验证一个解 (容易 - NP)</strong>：给你一幅完成的拼图，你一眼就能看出它拼得对不对。</p>
                  <p><strong className="text-primary">找到一个解 (可能困难 - NPC)</strong>：给你一盒打乱的拼图碎片，让你从零开始把它拼好，这可能要花上很久很久的时间。P vs NP问题就在问：对于所有这类“容易验证”的难题，是否都存在一个“快速找到解”的聪明方法？</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* I.3 Nature of Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">I.3 信息的本质</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Calculator className="text-primary"/>香农理论与不确定性</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>克劳德·香农在1948年发表的论文《通信的数学理论》开创了信息论时代。其核心概念<strong className="text-foreground">信息熵 H(X)</strong> 定量衡量了数据源的不确定性。熵越高，不确定性越大，预测难度越高。</p>
              <p>LLM的评估指标<strong className="text-foreground">困惑度 (Perplexity)</strong>，就直接源于信息熵。最小化模型的交叉熵损失，本质上就是在最小化模型对文本序列预测的不确定性。</p>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：猜糖果颜色</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>一个罐子里如果90%是红糖果，10%是蓝糖果，你很容易猜下一颗是红色的（低熵，低不确定性）。如果红蓝糖果各占一半，你就很难猜了（高熵，高不确定性）。一个好的语言模型，就像一个能更准确猜出下一个词（糖果）是什么颜色的高手。</p>
                </CardContent>
              </Card>
            </div>
          </div>
           <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {entropyImage && (
              <Image 
                src={entropyImage.imageUrl} 
                alt={entropyImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={entropyImage.imageHint}
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
