"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { abstractionTranslationTool } from '@/ai/flows/abstraction-translation-tool';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  computerFunctionality: z.string().min(5, {
    message: "请至少输入5个字来描述哦。",
  }),
});

export function TranslationToolSection() {
  const [metaphor, setMetaphor] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      computerFunctionality: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setMetaphor("");
    try {
      const result = await abstractionTranslationTool({ computerFunctionality: `请用一个适合小学生的、简单有趣的比喻来解释这个电脑功能：${values.computerFunctionality}` });
      setMetaphor(result.metaphor);
    } catch (error) {
      console.error("翻译出错:", error);
      toast({
        variant: "destructive",
        title: "哎呀！出错了。",
        description: "翻译机好像出了一点小问题，请稍后再试吧！",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              神奇比喻翻译机
            </CardTitle>
            <CardDescription>
              有听不懂的电脑“咒语”吗？把它输进来，AI魔法师会把它变成一个你好懂的可爱比喻！
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="computerFunctionality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>电脑“咒语”</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="比如：电脑的操作系统是管理硬件和软件的大管家..."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="transition-all hover:scale-105">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      魔法翻译中...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      生成比喻
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {isLoading && (
              <div className="mt-8 pt-8 border-t">
                  <div className="space-y-2">
                    <div className="animate-pulse bg-muted rounded-md h-4 w-1/4" />
                    <div className="animate-pulse bg-muted rounded-md h-4 w-full" />
                    <div className="animate-pulse bg-muted rounded-md h-4 w-3/4" />
                  </div>
              </div>
            )}

            {metaphor && !isLoading && (
              <div className="mt-8 pt-8 border-t animate-fade-in-up">
                <h3 className="text-lg font-semibold font-headline">你的专属比喻：</h3>
                <blockquote className="mt-4 border-l-2 pl-6 italic text-foreground/80">
                  {metaphor}
                </blockquote>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
