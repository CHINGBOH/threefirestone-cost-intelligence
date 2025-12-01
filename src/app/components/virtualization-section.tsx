import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Cloud } from 'lucide-react';

export function VirtualizationSection() {
  const catsImage = PlaceHolderImages.find(p => p.id === 'cats');
  const datacenterImage = PlaceHolderImages.find(p => p.id === 'cloud-data-center');
  
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline">现实的幻象</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            “虚拟”不等于“假的”
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            你听到“虚拟机”可能会觉得它很虚幻。但“虚拟”的本质是关于功能，而不是形式。它不是假的，而是功能上等效。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
            {catsImage && <Image src={catsImage.imageUrl} alt={catsImage.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={catsImage.imageHint} />}
            <CardContent className="p-6">
              <h3 className="font-semibold font-headline">不管黑猫白猫，能抓到老鼠就是好猫</h3>
              <p className="mt-2 text-muted-foreground">“虚拟”的核心思想：不管它是白猫还是黑猫，只要能抓到老鼠就行。效果比形式更重要。</p>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0 animate-pulse">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-headline">功能完全相同</h3>
                <p className="mt-1 text-muted-foreground">虚拟机拥有物理机的所有能力。你的应用程序根本分不清它们之间的区别。</p>
              </div>
            </div>
            <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
                {datacenterImage && <Image src={datacenterImage.imageUrl} alt={datacenterImage.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={datacenterImage.imageHint} />}
                <CardContent className="p-6 flex items-center gap-4">
                    <Cloud className="h-8 w-8 text-primary flex-shrink-0 animate-bounce" />
                    <p className="text-muted-foreground">它们是支撑“云”的无名英雄，让大规模的计算和效率成为可能。</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
