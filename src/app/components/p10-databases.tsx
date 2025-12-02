import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Archive, Search } from 'lucide-react';

export function Chapter10Section() {
  const databasesImage = PlaceHolderImages.find(p => p.id === 'databases');

  return (
    <section id="chapter-10" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Database className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第十章：数据库系统
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            数据是新时代的石油，而数据库就是炼油厂和储油罐。它负责高效、安全地存储和管理海量信息。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">X.1 数据的组织</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Archive className="text-primary"/>SQL vs NoSQL</h3>
            <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-foreground">关系型数据库 (SQL)</strong> 就像一个结构严谨的Excel表格，数据存储在有固定行和列的表中，关系明确。而<strong className="text-foreground">非关系型数据库 (NoSQL)</strong> 则更加灵活，可以是键值对、文档、图等多种形式，尤其适合存储非结构化和半结构化的数据，比如社交媒体帖子或物联网传感器数据。</p>
                <p>向量数据库是一种特殊的NoSQL数据库，专门用于存储和高效检索AI生成的向量嵌入（embeddings），是RAG和语义搜索应用的核心。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：图书馆 vs 个人笔记</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">SQL数据库</strong>：像一座大型图书馆，每本书都有精确的编号（主键），分门别类地放在固定的书架上（表结构），查找起来一目了然。</p>
                  <p><strong className="text-primary">NoSQL数据库</strong>：像你自己的读书笔记，形式自由，可以画图、贴便签、做摘要，内容随想随记，非常灵活，但不像图书馆那样有统一的严格规范。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {databasesImage && (
              <Image 
                src={databasesImage.imageUrl} 
                alt={databasesImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={databasesImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
