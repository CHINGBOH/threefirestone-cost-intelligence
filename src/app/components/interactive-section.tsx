'use client';
import { useState } from 'react';
import { Wand2, LoaderCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { abstractionTranslationTool } from '@/ai/flows/abstraction-translation-tool';

export function InteractiveSection() {
  const [inputValue, setInputValue] = useState('');
  const [metaphor, setMetaphor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    if (!inputValue.trim()) {
      setError('请输入一个概念！');
      return;
    }

    setIsLoading(true);
    setError('');
    setMetaphor('');

    try {
      const result = await abstractionTranslationTool({ computerFunctionality: inputValue });
      if (result.metaphor) {
        setMetaphor(result.metaphor);
      } else {
        setError('抱歉，我暂时想不出合适的比喻。');
      }
    } catch (e) {
      console.error(e);
      setError('翻译过程中出现了一点问题，请稍后再试。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="interactive-zone" className="py-20 sm:py-32 border-t">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Wand2 className="mx-auto h-12 w-12 text-primary animate-pulse" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            AI比喻翻译机
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            遇到不懂的计算机术语？把它交给我们的人工智能助手，它会用一个生动的比喻来为你解释！
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="flex gap-2">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="例如：云计算、API接口、区块链..."
              className="flex-1 text-base"
              disabled={isLoading}
              onKeyDown={(e) => e.key === 'Enter' && handleTranslate()}
            />
            <Button onClick={handleTranslate} disabled={isLoading} size="lg">
              {isLoading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <Wand2 />
              )}
              <span className="ml-2">生成比喻</span>
            </Button>
          </div>
          
          {error && <p className="mt-4 text-center text-destructive">{error}</p>}

          {(isLoading || metaphor) && (
            <Card className="mt-8 w-full animate-fade-in-up bg-background/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-lg">
                  <Lightbulb className="text-primary" />
                  AI 生成的比喻：
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
                  <p className="text-muted-foreground leading-relaxed">{metaphor}</p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
