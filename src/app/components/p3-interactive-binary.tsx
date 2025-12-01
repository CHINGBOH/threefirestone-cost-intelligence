'use client';
import { useState } from 'react';
import { Lightbulb, LightbulbOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Bit = ({ on, onClick }: { on: boolean; onClick: () => void }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary">
    {on ? <Lightbulb className="h-10 w-10 text-yellow-400" /> : <LightbulbOff className="h-10 w-10 text-muted-foreground" />}
    <div className={`font-mono text-lg font-bold ${on ? 'text-primary' : 'text-muted-foreground'}`}>{on ? '1' : '0'}</div>
  </button>
);

export function InteractiveBinarySection() {
  const [bits, setBits] = useState([false, false, false, false]);

  const toggleBit = (index: number) => {
    const newBits = [...bits];
    newBits[index] = !newBits[index];
    setBits(newBits);
  };

  const decimalValue = bits.reduce((acc, bit, index) => {
    return acc + (bit ? Math.pow(2, bits.length - 1 - index) : 0);
  }, 0);
  
  const resetBits = () => {
    setBits([false, false, false, false]);
  };

  return (
    <section id="p3-interactive-binary" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline">动手玩一玩</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第3站：开关游戏
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            我们来用4个开关表示数字吧！最右边的开关代表1，往左依次是2，4，8。看看你能组合出什么数字？
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <Card className="bg-background/50 shadow-2xl animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-center font-headline">二进制数字合成器</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-8">
              <div className="flex items-center justify-center gap-4 md:gap-8">
                {bits.map((bit, index) => (
                  <Bit key={index} on={bit} onClick={() => toggleBit(index)} />
                ))}
              </div>
              <div className="text-center">
                <p className="text-muted-foreground">它们加起来就是数字...</p>
                <p className="font-mono text-5xl font-bold text-primary animate-pulse">{decimalValue}</p>
              </div>
               <Button onClick={resetBits} variant="outline">重置游戏</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
