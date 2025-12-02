import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, FileCode, Globe } from 'lucide-react';

export function Chapter9Section() {
  const osNetworkingImage = PlaceHolderImages.find(p => p.id === 'os-networking');

  return (
    <section id="chapter-9" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Network className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第九章：操作系统与网络
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            操作系统是软件与硬件的翻译官，网络则是连接信息孤岛的桥梁。它们是现代计算的隐形基石。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-up order-last lg:order-first">
            {osNetworkingImage && (
              <Image 
                src={osNetworkingImage.imageUrl} 
                alt={osNetworkingImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={osNetworkingImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">IX.1 资源的管理者</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><FileCode className="text-primary"/>操作系统核心功能</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">操作系统 (OS)</strong> 负责管理计算机的所有硬件资源（CPU、内存、硬盘），并为上层应用软件提供一个稳定、抽象的运行环境。它的核心功能包括进程管理、内存管理和文件系统。</p>
              <p>对于AI训练，OS的高效资源调度能力至关重要，它确保了数据能够顺畅地从硬盘流向内存，再到GPU进行计算。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：餐厅的运营经理</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>操作系统就像一家繁忙餐厅的运营经理。他决定哪个厨师（CPU核心）现在做什么菜（进程），管理着冷库里有限的珍贵食材（内存），并确保所有的菜单和账单（文件）都井井有条地存放在档案室里（文件系统）。没有他，整个餐厅将陷入混乱。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
