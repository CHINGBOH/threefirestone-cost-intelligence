'use client';
import { Lightbulb, LightbulbOff, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Transistor = ({ on, isAnimated }: { on: boolean; isAnimated?: boolean }) => (
  <div className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-500 hover:scale-110 ${isAnimated && on ? 'bg-primary/10' : ''}`}>
    <div className="relative h-8 w-8">
      {on ? <Lightbulb className="h-8 w-8 text-yellow-400 animate-pulse" /> : <LightbulbOff className="h-8 w-8 text-muted-foreground" />}
      {isAnimated && on && <Zap className="h-4 w-4 text-yellow-300 absolute -top-1 -right-1 animate-ping"/>}
    </div>
    <div className="font-mono text-sm">{on ? '开 / 1' : '关 / 0'}</div>
  </div>
);

export function LightSwitchSection() {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline">最小的魔法积木</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            一切魔法都来自电流的“开”与“关”
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            所有酷炫的操作，比如上网冲浪、玩游戏，都是由这个最简单的“开灯关灯”游戏组成的。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24">
          <Card className="bg-background/50">
            <CardHeader>
              <CardTitle className="text-center font-headline">一片由小开关组成的海洋（晶体管）</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center justify-center">
                <Transistor on={true} isAnimated />
                <Transistor on={false} />
                <Transistor on={false} />
                <Transistor on={true} />
                <Transistor on={true} isAnimated />
                <Transistor on={false} />
                <Transistor on={true} />
                <Transistor on={true} />
              </div>
              <p className="text-center mt-8 text-muted-foreground">一个CPU里有几十亿个这样的小开关，它们每秒钟能开关几十亿次，比你眨眼快多啦！</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
