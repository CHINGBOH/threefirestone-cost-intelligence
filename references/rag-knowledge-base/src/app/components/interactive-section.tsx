'use client';
import { useState } from 'react';
import { Wand2, LoaderCircle, Lightbulb, Repeat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { abstractionTranslationTool } from '@/ai/flows/abstraction-translation-tool';

type TranslationDirection = 'termToMetaphor' | 'metaphorToTerm';

type AbstractionTranslationInput = {
  text: string;
  translationDirection: TranslationDirection;
};

type AbstractionTranslationOutput = {
  result: string;
};


export function InteractiveSection() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [direction, setDirection] = useState<TranslationDirection>('termToMetaphor');

  const handleTranslate = async () => {
    if (!inputValue.trim()) {
      setError('请输入内容！');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult('');

    try {
      const response = await abstractionTranslationTool({ text: inputValue, translationDirection: direction });
      if (response.result) {
        setResult(response.result);
      } else {
        setError('抱歉，我暂时无法完成这个翻译。');
      }
    } catch (e) {
      console.error(e);
      setError('翻译过程中出现了一点问题，请稍后再试。');
    } finally {
      setIsLoading(false);
    }
  };

  const isTermToMetaphor = direction === 'termToMetaphor';

  const title = isTermToMetaphor ? 'AI比喻翻译机' : 'AI术语推理机';
  const description = isTermToMetaphor 
    ? '遇到不懂的计算机术语？把它交给我们的人工智能助手，它会用一个生动的比喻来为你解释！'
    : '想到了一个有趣的比喻？看看AI能否猜出它背后对应的技术概念！';
  const placeholder = isTermToMetaphor 
    ? '例如：云计算、API接口、区块链...' 
    : '例如：就像一个万能充电器...';
  const buttonText = isTermToMetaphor ? '生成比喻' : '推理术语';
  const resultTitle = isTermToMetaphor ? 'AI 生成的比喻：' : 'AI 推理出的术语：';

  return (
    <section id="interactive-zone" className="py-20 sm:py-32 border-t">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Wand2 className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {description}
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Label htmlFor="direction-switch" className={!isTermToMetaphor ? 'text-muted-foreground' : ''}>术语 → 比喻</Label>
            <Switch
              id="direction-switch"
              checked={!isTermToMetaphor}
              onCheckedChange={(checked) => setDirection(checked ? 'metaphorToTerm' : 'termToMetaphor')}
              aria-label="切换翻译方向"
            />
            <Label htmlFor="direction-switch" className={isTermToMetaphor ? 'text-muted-foreground' : ''}>比喻 → 术语</Label>
          </div>

          <div className="flex gap-2">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder}
              className="flex-1 md:text-sm"
              disabled={isLoading}
              onKeyDown={(e) => e.key === 'Enter' && handleTranslate()}
            />
            <Button onClick={handleTranslate} disabled={isLoading} size="lg">
              {isLoading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                isTermToMetaphor ? <Wand2 /> : <Repeat />
              )}
              <span className="ml-2">{buttonText}</span>
            </Button>
          </div>
          
          {error && <p className="mt-4 text-center text-destructive">{error}</p>}

          {(isLoading || result) && (
            <Card className="mt-6 w-full animate-fade-in-up bg-background/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-lg">
                  <Lightbulb className="text-primary" />
                  {resultTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
                  </div>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">{result}</p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
