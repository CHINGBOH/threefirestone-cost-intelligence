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
          <h2 className="text-base font-semibold leading-7 text-primary font-headline">现实里的“分身术”</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            “虚拟”不等于“假的”哦！
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            你听到“虚拟机”这个词，可能会觉得它像个抓不住的影子。但其实，“虚拟”的意思是“功能一样”，而不是“不存在”。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 animate-fade-in-up">
            {catsImage && <Image src={catsImage.imageUrl} alt={catsImage.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={catsImage.imageHint} />}
            <CardContent className="p-6">
              <h3 className="font-semibold font-headline">不管黑猫白猫，能抓到老鼠就是好猫</h3>
              <p className="mt-2 text-muted-foreground">“虚拟”的核心思想就是：不管它是真的猫还是机器猫，只要能帮你抓到“老鼠”（完成任务），它就是一只顶呱呱的好猫！</p>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div className="flex gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0 animate-pulse">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-headline">拥有一样的超能力</h3>
                <p className="mt-1 text-muted-foreground">虚拟的电脑和真的电脑一样厉害！你玩的程序根本分不出它是在哪个上面跑的。</p>
              </div>
            </div>
            <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {datacenterImage && <Image src={datacenterImage.imageUrl} alt={datacenterImage.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={datacenterImage.imageHint} />}
                <CardContent className="p-6 flex items-center gap-4">
                    <Cloud className="h-8 w-8 text-primary flex-shrink-0 animate-bounce" />
                    <p className="text-muted-foreground">这些“分身”是“云”世界的超级英雄，让网络世界变得无限大！</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
