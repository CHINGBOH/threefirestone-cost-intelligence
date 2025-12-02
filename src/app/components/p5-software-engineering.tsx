import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, BrickWall, Blocks, Plug } from 'lucide-react';

export function Chapter5Section() {
  const programmingParadigmsImage = PlaceHolderImages.find(p => p.id === 'programming-paradigms');
  const solidPrinciplesImage = PlaceHolderImages.find(p => p.id === 'solid-principles');

  return (
    <section id="chapter-5" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Chapter Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Code2 className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第五章：软件工程与编程范式
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            如果说算法是菜谱，那软件工程就是厨房的设计与管理规范。一个好的厨房能让顶级大厨高效地创造美味佳肴。
          </p>
        </div>

        {/* V.1 Programming Paradigms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">V.1 编程范式</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Blocks className="text-primary"/>代码的组织艺术：OOP vs FP</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>编程范式是组织代码的两种不同哲学思想。<strong>面向对象编程 (OOP)</strong> 就像搭积木，每个积木（对象）都有自己的属性和功能。而<strong>函数式编程 (FP)</strong> 则像一条精密的生产线，数据像水流一样通过一个个管道（函数），每个管道只负责一道工序。</p>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：乐高积木 vs 生产线</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">OOP (积木)</strong>：你可以把复杂的汽车拆解成一个个独立的积木块（轮子、车身、引擎），每个积木块可以单独设计和替换。</p>
                  <p><strong className="text-primary">FP (生产线)</strong>：数据像原材料一样进入生产线，经过一个个固定的处理站（纯函数），最终产出成品，整个过程清晰可预测，不会有意外发生。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {programmingParadigmsImage && (
              <Image
                src={programmingParadigmsImage.imageUrl}
                alt={programmingParadigmsImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={programmingParadigmsImage.imageHint}
              />
            )}
          </div>
        </div>

        {/* V.2 SOLID Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {solidPrinciplesImage && (
              <Image
                src={solidPrinciplesImage.imageUrl}
                alt={solidPrinciplesImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={solidPrinciplesImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">V.2 高质量软件设计</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><BrickWall className="text-primary"/>模块化与依赖倒置</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>软件设计就像盖房子，模块化和SOLID原则是保证房子坚固、易于扩展的“建筑图纸”。特别是<strong className="text-foreground">依赖倒置原则 (DIP)</strong>，它要求我们的代码不应该依赖于具体实现，而应该依赖于抽象的“接口”。</p>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：万能充电器</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>想象一个万能充电器（抽象接口）。无论你用的是苹果手机、安卓手机还是Switch游戏机（具体实现），只要它们都支持USB-C这个标准接口，你的充电器就能为它们充电。你不需要为每个设备都换一个充电头。这在软件中意味着，只要我们定义好“接口”，就可以随时更换底层的具体实现（比如从一个AI模型换到另一个），而不用修改上层代码。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
