import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FerrisWheel, Gamepad2, MessagesSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AppFairgroundSection() {
  const image = PlaceHolderImages.find(p => p.id === 'app-fairground');
  
  return (
    <section id="p12-app-fairground" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FerrisWheel className="mx-auto h-12 w-12 text-primary animate-spin-slow" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第12站：应用游乐场
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            我们用电脑，其实是在玩各种各样的“应用程序”（App）。它们就像游乐场里的旋转木马、过山车和摩天轮！
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
                <Gamepad2 className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold font-headline">游戏过山车</h4>
                  <p className="text-sm text-muted-foreground">你玩的游戏就是一个超刺激的过山车，需要CPU、GPU和RAM一起使劲才能跑起来。</p>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardContent className="p-6 flex items-center gap-4">
                <MessagesSquare className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold font-headline">聊天旋转木马</h4>
                  <p className="text-sm text-muted-foreground">你和朋友聊天用的App，就像一个温馨的旋转木马，让你们可以开心地交流。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
