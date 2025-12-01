import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Library } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function StorageLibrarySection() {
  const image = PlaceHolderImages.find(p => p.id === 'storage-library');
  
  return (
    <section id="p6-storage-library" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Library className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第6站：记忆大图书馆 (硬盘)
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            既然课桌（RAM）会清空，那我们玩过的游戏、画的画要存到哪里去呢？当然是存到电脑王国的“记忆大图书馆”——硬盘里啦！
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
                <CardTitle className="font-headline">超大容量</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">图书馆非常非常大，可以放下你所有的照片、游戏、电影，还有写给好朋友的信。</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline">永远不会忘</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">就算关机，图书馆里的书（文件）也一本都不会少！下次开机，它们都还在老地方等你。</p>
              </CardContent>
            </Card>
             <Card className="transition-all hover:shadow-xl hover:-translate-y-1 bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline">速度慢一点</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">不过，从图书馆找书再拿到课桌上需要一点时间。所以它的速度比课桌（RAM）要慢一些。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
