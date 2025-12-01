import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SummarySection() {
  const image = PlaceHolderImages.find(p => p.id === 'summary-party');
  
  return (
    <section id="p19-summary" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <PartyPopper className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第19站：毕业派对！
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            恭喜你，探险家！你已经完成了电脑魔法世界的旅程！从最小的开关到浩瀚的云端，你现在知道电脑的秘密啦！
          </p>
        </div>
        <div className="mt-16 relative animate-fade-in-up">
            {image && (
              <Image 
                src={image.imageUrl} 
                alt={image.description}
                width={800}
                height={500}
                className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto aspect-video object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            )}
        </div>
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl text-foreground/90 font-semibold mb-6">电脑不是魔法，它是人类智慧的结晶，是一项伟大的工程奇迹！</p>
            <Button size="lg" asChild>
                <a href="#translation-tool">
                    去最后一个站点：神奇翻译机！
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
