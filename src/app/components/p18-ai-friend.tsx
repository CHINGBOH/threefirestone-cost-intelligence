import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AiFriendSection() {
  const image = PlaceHolderImages.find(p => p.id === 'ai-friend');
  
  return (
    <section id="p18-ai-friend" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Bot className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第18站：AI小伙伴
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            现在最酷的魔法就是人工智能（AI）啦！AI就像一个正在学习的小伙伴，它通过阅读海量的书籍（数据）来学会和我们对话、画画，甚至写故事！
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
              <CardHeader>
                <CardTitle className="font-headline">像大脑一样学习</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">AI的模型模仿我们的大脑神经，通过观察大量的例子来“举一反三”。你看的猫咪图片越多，它就越能认出猫咪。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline">还是听命令</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">不过别忘了，AI本质上还是一个超级复杂的程序。它不会真的“思考”，只是在根据它学到的海量知识，来预测最合适的答案给你。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
