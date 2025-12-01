import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Key, Palette, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function BinaryCodeSection() {
  const image = PlaceHolderImages.find(p => p.id === 'binary-code');
  
  return (
    <section id="p2-binary-code" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Key className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第2站：0和1的舞蹈
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            电脑只认识两个数字：0（关）和1（开）。但通过把这两个数字组合起来，就像用两种颜色的积木，就能搭出整个世界！
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader className="flex-row items-center gap-4">
                <Palette className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline">颜色的密码</CardTitle>
              </CardHeader>
              <CardContent>
                <p>红色可能是 <code className="font-mono bg-muted p-1 rounded">11110000 00000000 00000000</code></p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader className="flex-row items-center gap-4">
                <Music className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline">声音的密码</CardTitle>
              </CardHeader>
              <CardContent>
                <p>“Do Re Mi” 的声音，在电脑看来只是一长串不同的0和1组合。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline">文字的密码</CardTitle>
              </CardHeader>
              <CardContent>
                <p>字母“A”可能是 <code className="font-mono bg-muted p-1 rounded">01000001</code></p>
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
