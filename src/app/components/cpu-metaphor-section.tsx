import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { UserCog, Clipboard, HardHat, Cog, ArrowDown } from 'lucide-react';

export function CpuMetaphorSection() {
  const factoryImage = PlaceHolderImages.find(p => p.id === 'factory');
  
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Cog className="mx-auto h-12 w-12 text-primary animate-spin-slow" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">到底谁在控制？</h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            当你打开智能灯时，你以为是CPU直接按下了开关吗？再想想。CPU只下达命令，真正干活的是专门的设备控制器。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline text-center lg:text-left">工厂的比喻</h3>
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-4 flex items-center gap-4">
                <UserCog className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">CPU (总经理)</h4>
                  <p className="text-sm text-muted-foreground">下达高级命令：“开始组装。”</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-4 flex items-center gap-4">
                <Clipboard className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">I/O桥 (车间主管)</h4>
                  <p className="text-sm text-muted-foreground">把命令传达给正确的工人。</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-4 flex items-center gap-4">
                <HardHat className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">设备控制器 (工人)</h4>
                  <p className="text-sm text-muted-foreground">接收指令并操作机器。</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            {factoryImage && (
              <Image 
                src={factoryImage.imageUrl} 
                alt={factoryImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full aspect-[3/2] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={factoryImage.imageHint}
              />
            )}
            <p className="text-center mt-8 text-muted-foreground">这种精确的“传达”和“执行”依赖于地址总线和逻辑门的精确协作。每一个动作都完美同步。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
