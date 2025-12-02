import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Image as ImageIcon, Scan } from 'lucide-react';

export function Chapter11Section() {
  const computerVisionImage = PlaceHolderImages.find(p => p.id === 'computer-vision');

  return (
    <section id="chapter-11" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Eye className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第十一章：计算机视觉
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            “眼见为实”。本章将探索如何赋予机器一双“慧眼”，使其能够理解、解释和生成视觉世界。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {computerVisionImage && (
              <Image 
                src={computerVisionImage.imageUrl} 
                alt={computerVisionImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={computerVisionImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">XI.1 从识别到生成</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Scan className="text-primary"/>CV的核心任务</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>计算机视觉 (CV) 涵盖了多种任务。<strong className="text-foreground">卷积神经网络 (CNN)</strong> 是传统CV任务的王者，擅长图像分类、目标检测和图像分割。而近年来，随着Diffusion模型和多模态技术的发展，<strong className="text-foreground">图像生成</strong> 成为了最炙手可热的领域。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：小孩子的视觉发展</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">图像分类</strong>：一个婴儿学会了指着苹果说“苹果”。</p>
                  <p><strong className="text-primary">目标检测</strong>：他能在水果篮里圈出所有的苹果。</p>
                  <p><strong className="text-primary">图像分割</strong>：他能用手指精确地描出苹果的轮廓。</p>
                  <p><strong className="text-primary">图像生成</strong>：你对他说“画一个红色的苹果”，他能凭空画出来。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
