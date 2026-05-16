import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SquarePi, Dices, Sigma, Settings } from 'lucide-react';

export function Chapter2Section() {
  const linearAlgebraImage = PlaceHolderImages.find(p => p.id === 'linear-algebra');
  const pcaImage = PlaceHolderImages.find(p => p.id === 'pca');
  const loraImage = PlaceHolderImages.find(p => p.id === 'lora');

  return (
    <section id="chapter-2" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        {/* Chapter Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <SquarePi className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第二章：数学理论基础
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            数学是计算机科学的支柱，为我们理解和操作高维数据提供了几何学和结构分析的工具。
          </p>
        </div>

        {/* II.1 Linear Algebra */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">II.1 线性代数</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Sigma className="text-primary"/>高维数据的几何学</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>在线性代数中，<strong className="text-foreground">向量</strong>和<strong className="text-foreground">矩阵</strong>是核心。在AI中，数据被表示为向量，而整个数据集构成矩阵。神经网络的计算本质上就是一系列的矩阵乘法。</p>
              <p><strong className="text-foreground">主成分分析 (PCA)</strong> 是一种强大的降维技术。它通过找到数据中方差最大的方向（主成分），将复杂的高维数据压缩到低维空间，同时保留最重要的信息。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：皮影戏</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>想象一下皮影戏。一个三维的、复杂的人物（高维数据），通过光照投射到一个二维的幕布上，变成了一个轮廓清晰的影子（低维数据）。虽然维度降低了，但你依然能认出这是什么角色，因为影子抓住了人物最关键的特征。PCA就像是找到最佳的投影角度，让影子最能代表原物。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up grid grid-cols-2 gap-4" style={{animationDelay: '0.3s'}}>
              {linearAlgebraImage && (
                <Image 
                  src={linearAlgebraImage.imageUrl} 
                  alt={linearAlgebraImage.description}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-xl w-full aspect-[3/4] object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={linearAlgebraImage.imageHint}
                />
              )}
              {pcaImage && (
                <Image 
                  src={pcaImage.imageUrl} 
                  alt={pcaImage.description}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-xl w-full aspect-[3/4] object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={pcaImage.imageHint}
                />
              )}
          </div>
        </div>

        {/* LoRA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {loraImage && (
              <Image 
                src={loraImage.imageUrl} 
                alt={loraImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={loraImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
             <Badge variant="secondary" className="mb-4">应用案例</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Settings className="text-primary"/>低秩适应 (LoRA) 与微调</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>现代LLM微调广泛应用的<strong className="text-foreground">LoRA (Low-Rank Adaptation)</strong> 技术，正是基于线性代数的巧妙应用。它假设对一个巨大预训练模型权重的修改量，本质上是“低秩”的，即可以用两个小得多的矩阵相乘来近似。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：给蒙娜丽莎加配饰</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>想象你有一幅世界名画《蒙娜丽莎》（预训练模型），你不想重新画一遍，只想让她看起来更“赛博朋克”一点。你不需要改动画布本身，只需要在她脸上加一副酷炫的AR眼镜（一个小的、可训练的LoRA层）。这样既保留了原作的精髓，又实现了风格的快速转换，还非常省颜料（计算资源）！</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* II.2 Discrete Math */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
             <Badge variant="secondary" className="mb-4">II.2 离散数学</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Dices className="text-primary"/>算法、逻辑与结构</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>离散数学为计算机科学提供了逻辑推理、计数和结构分析的工具。它包括<strong className="text-foreground">组合数学</strong>、<strong className="text-foreground">图论</strong>和<strong className="text-foreground">计算逻辑</strong>等。</p>
              <p>它是分析算法效率（比如时间复杂度）、设计复杂数据结构和加密协议的基石。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：乐高积木与说明书</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>离散数学就像是玩乐高积木的规则。它告诉你总共有多少种不同形状的积木（组合数学），如何把它们拼成一个城堡（图论与数据结构），以及按照说明书一步一步操作最终一定能搭出成品（算法与逻辑）。没有这些规则，你面对一堆零件将无从下手。</p>
                </CardContent>
              </Card>
            </div>
          </div>
           <div className="relative animate-fade-in-up flex items-center justify-center" style={{animationDelay: '0.3s'}}>
             <Dices className="w-48 h-48 text-primary/20 animate-pulse" strokeWidth={0.5} />
             <Dices className="w-32 h-32 text-primary/40 absolute animate-spin-slow" />
          </div>
        </div>

      </div>
    </section>
  );
}
