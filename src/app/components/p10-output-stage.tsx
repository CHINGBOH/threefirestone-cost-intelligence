import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Monitor, Volume2, Printer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function OutputStageSection() {
  const image = PlaceHolderImages.find(p => p.id === 'output-stage');
  
  return (
    <section id="p10-output-stage" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Monitor className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第10站：输出大舞台
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            国王CPU和画家GPU完成了工作，怎么让我们看到和听到呢？他们需要一个“输出大舞台”来展示成果！
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative animate-fade-in-up">
            {image && (
              <Image 
                src={image.imageUrl} 
                alt={image.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full aspect-[3/2] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardContent className="p-6 flex items-center gap-4">
                <Monitor className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold font-headline">显示器画板</h4>
                  <p className="text-sm text-muted-foreground">GPU画好的画，会立刻送到这块大画板上，我们就看到了五彩缤纷的画面。</p>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardContent className="p-6 flex items-center gap-4">
                <Volume2 className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold font-headline">音响歌唱家</h4>
                  <p className="text-sm text-muted-foreground">CPU处理好的声音密码，会交给音响歌唱家，它就会为我们唱出美妙的音乐。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
