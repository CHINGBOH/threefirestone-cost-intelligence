import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircleCode, BrainCircuit, Search } from 'lucide-react';

export function Chapter12Section() {
  const nlpAdvancedImage = PlaceHolderImages.find(p => p.id === 'nlp-advanced');

  return (
    <section id="chapter-12" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <MessageCircleCode className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第十二章：自然语言处理
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            语言是思想的载体。在大型语言模型之外，NLP领域还有更广阔的星辰大海，旨在让机器实现更深层次的语言理解和应用。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">XII.1 结构化知识</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><BrainCircuit className="text-primary"/>知识图谱与语义搜索</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>大型语言模型拥有丰富的“世界知识”，但这些知识是隐式的、非结构化的。而<strong className="text-foreground">知识图谱 (Knowledge Graph)</strong> 则将知识以“实体-关系-实体”的三元组形式组织起来，形成一个巨大的语义网络。</p>
              <p>将LLM与知识图谱结合，可以有效缓解“幻觉”问题。而<strong className="text-foreground">语义搜索</strong>则超越了传统的关键词匹配，它通过理解查询的“意图”，来找到最相关的结果，其背后正是向量嵌入技术的应用。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：维基百科 vs 聪明的图书管理员</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">LLM</strong>：像一个读完了整个维基百科的人，知识渊博，但当被问到具体细节时，可能需要“回忆”和“组织语言”。</p>
                  <p><strong className="text-primary">知识图谱</strong>：就是维基百科页面右侧那个信息框，清晰地列出了“爱因斯坦”的出生日期、国籍、研究领域等结构化信息。</p>
                  <p><strong className="text-primary">语义搜索</strong>：你问图书管理员“我想找一本关于一个男孩在魔法学校长大的书”，他不会只搜“男孩”或“学校”，而是直接递给你《哈利·波特》。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {nlpAdvancedImage && (
              <Image 
                src={nlpAdvancedImage.imageUrl} 
                alt={nlpAdvancedImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={nlpAdvancedImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
