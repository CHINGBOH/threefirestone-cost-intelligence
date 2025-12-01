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
  computerFunctionality: z.string().min(10, {
    message: "Please describe the functionality in at least 10 characters.",
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
      const result = await abstractionTranslationTool(values);
      setMetaphor(result.metaphor);
    } catch (error) {
      console.error("Error translating abstraction:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem with the translation tool. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-background/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Sparkles className="h-6 w-6 text-primary" />
              Abstraction Translator
            </CardTitle>
            <CardDescription>
              Confused by computer jargon? Describe a piece of computer functionality, and our AI will translate it into an easy-to-understand, real-world metaphor.
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
                      <FormLabel>Computer Functionality</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'A computer's operating system manages hardware and software resources...'"
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Translating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Metaphor
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {isLoading && (
              <div className="mt-8 pt-8 border-t">
                  <div className="space-y-2">
                    <div className="animate-pulse bg-muted/50 rounded-md h-4 w-1/4" />
                    <div className="animate-pulse bg-muted/50 rounded-md h-4 w-full" />
                    <div className="animate-pulse bg-muted/50 rounded-md h-4 w-3/4" />
                  </div>
              </div>
            )}

            {metaphor && !isLoading && (
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold font-headline">Your Metaphor:</h3>
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
