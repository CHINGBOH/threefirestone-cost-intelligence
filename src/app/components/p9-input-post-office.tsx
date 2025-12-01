import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mailbox, Mouse, Keyboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function InputPostOfficeSection() {
  const image = PlaceHolderImages.find(p => p.id === 'input-post-office');
  
  return (
    <section id="p9-input-post-office" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Mailbox className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第9站：输入邮局
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            我们是怎么给国王CPU下达命令的呢？是通过一个神奇的“输入邮局”！比如键盘和鼠标，就是最重要的邮递员。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardContent className="p-6 flex items-center gap-4">
                <Keyboard className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold font-headline">键盘信使</h4>
                  <p className="text-sm text-muted-foreground">你每按下一个按键，键盘信使就会把这个字母打包成一封“0101”的信，送进电脑城。</p>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-background/50">
              <CardContent className="p-6 flex items-center gap-4">
                <Mouse className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold font-headline">鼠标向导</h4>
                  <p className="text-sm text-muted-foreground">你移动和点击鼠标，鼠标向导就会告诉国王：“喂！他想点那个红色的按钮啦！”</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
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
        </div>
      </div>
    </section>
  );
}
