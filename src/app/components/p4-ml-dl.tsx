import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, GraduationCap, BookCopy, Reply, TrendingDown, ShieldCheck, ClipboardCheck } from 'lucide-react';

export function Chapter4Section() {
  const learningParadigmsImage = PlaceHolderImages.find(p => p.id === 'learning-paradigms');
  const neuralNetworkImage = PlaceHolderImages.find(p => p.id === 'neural-network');
  const backpropagationImage = PlaceHolderImages.find(p => p.id === 'backpropagation');
  const gradientDescentImage = PlaceHolderImages.find(p => p.id === 'gradient-descent');
  const overfittingImage = PlaceHolderImages.find(p => p.id === 'overfitting');
  const evaluationImage = PlaceHolderImages.find(p => p.id === 'model-evaluation');


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
                height={400}
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
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={neuralNetworkImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">IV.2 神经网络架构</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Brain className="text-primary"/>模仿大脑的思考网络</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>神经网络的思想源远流长，其雏形可以追溯到1958年由弗兰克·罗森布拉特发明的<strong className="text-foreground">感知机(Perceptron)</strong>。然而，由于其局限性，神经网络研究曾一度陷入低谷（即“AI寒冬”）。直到<strong className="text-foreground">激活函数</strong>引入了关键的非线性，才使得网络能够学习真正复杂的模式。</p>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">IV.3 反向传播算法</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Reply className="text-primary"/>AI如何从错误中学习</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>如果说感知机是神经网络的“身体”，那<strong className="text-foreground">反向传播 (Backpropagation)</strong> 算法就是它的“灵魂”。在1986年由Rumelhart、Hinton和Williams等人重新发扬光大后，它成为了训练神经网络的核心动力，直接点燃了第二次AI革命的浪潮。它通过计算“差距”，从后往前逐层告诉每个神经元如何调整自己。</p>
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
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={backpropagationImage.imageHint}
              />
            )}
          </div>
        </div>

        {/* IV.4 Gradient Descent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {gradientDescentImage && (
              <Image 
                src={gradientDescentImage.imageUrl} 
                alt={gradientDescentImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={gradientDescentImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">IV.4 梯度下降</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><TrendingDown className="text-primary"/>“顺山而下”找到最佳答案</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>如果说反向传播告诉了模型“哪里错了”，那么<strong className="text-foreground">梯度下降 (Gradient Descent)</strong> 就告诉模型“该如何改”。它是一种优化算法，通过计算损失函数的梯度（最陡峭的方向），一步步地调整模型参数，以找到让损失最小化的那个点。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：蒙眼下山</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>想象一个被蒙上眼睛的登山者要从山上走到谷底（损失最低点）。他该怎么办？他可以伸出脚，感受四周哪个方向坡度最陡峭，然后朝那个方向迈一小步。如此反复，他就能一步步地走到山谷的最低点。AI训练的过程，就是这样“摸索着”下山的过程。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* IV.5 Overfitting & Regularization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">IV.5 过拟合与正则化</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><ShieldCheck className="text-primary"/>防止AI“死记硬背”</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">过拟合 (Overfitting)</strong> 指的是模型在训练数据上表现完美，但在新的、未见过的数据上表现糟糕，因为它学到的不是通用规律，而是训练数据的特定噪声。<strong className="text-foreground">正则化 (Regularization)</strong> 是一种技术，通过给模型的复杂性增加“惩罚”，来防止它变得过于复杂，从而提高其泛化能力。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：学生备考</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>一个学生如果把模拟题的所有答案都背了下来（过拟合），那他模拟考能得满分，但一到正式考试，题目稍微变一下，他就傻眼了。而聪明的学生会去理解题目背后的解题思路（学习通用规律）。正则化就像老师告诉学生：“不要搞题海战术，掌握核心公式更重要”，以此来限制学生的“记忆”行为，鼓励“理解”。</p>
                </CardContent>
              </Card>
            </div>
          </div>
           <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {overfittingImage && (
              <Image 
                src={overfittingImage.imageUrl} 
                alt={overfittingImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={overfittingImage.imageHint}
              />
            )}
          </div>
        </div>

        {/* IV.6 Model Evaluation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {evaluationImage && (
              <Image 
                src={evaluationImage.imageUrl} 
                alt={evaluationImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={evaluationImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">IV.6 模型评估</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><ClipboardCheck className="text-primary"/>给AI打分：它到底好不好？</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>我们如何知道一个模型是好是坏？这就需要<strong className="text-foreground">模型评估</strong>。通过使用一系列指标（如准确率、精确率、召回率、F1分数等），我们可以在独立的测试集上衡量模型的性能。对于LLM，我们还使用如<strong className="text-foreground">困惑度 (Perplexity)</strong> 和 <strong className="text-foreground">BLEU分数</strong>来评估其语言生成质量。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：模拟考试</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>训练模型就像学生平时上课和做作业。而模型评估就像是期末的模拟考试。我们用一套学生没见过的题（测试集）来测试他，看看他的综合能力到底如何。不同的分数（评估指标）从不同侧面反映了学生的能力，比如选择题得分率（准确率）、作文流畅度（困惑度）等。只有在模拟考中表现出色，我们才能相信他真正学有所成。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

    