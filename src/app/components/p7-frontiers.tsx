import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Puzzle, Brain, Users } from 'lucide-react';

export function Chapter7Section() {
  const parallelComputingImage = PlaceHolderImages.find(p => p.id === 'parallel-computing');
  const hallucinationImage = PlaceHolderImages.find(p => p.id === 'hallucination');
  const agentImage = PlaceHolderImages.find(p => p.id === 'ai-agent');

  return (
    <section id="chapter-7" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Chapter Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Zap className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第七章：AI前沿：驾驭洪荒之力
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            我们正站在AI新纪元的门口。理解并驾驭LLM的“洪荒之力”，不仅需要掌握现有知识，更要洞察其前沿动态和未来方向。
          </p>
        </div>

        {/* VII.1 Parallel Computing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">VII.1 并行计算</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Users className="text-primary"/>巨型模型背后的力量</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>训练和运行拥有数千亿参数的LLM，单一计算单元已远不能及。<strong className="text-foreground">并行计算</strong>，特别是数据并行和模型并行，是实现这一目标的关键。它将庞大的计算任务分解，交由成千上万的处理器协同完成。</p>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：千人共建金字塔</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>想象一下建造一座巨大的金字塔。如果只靠一个人搬运石块，可能需要几百年。但如果组织成千上万的工人，每个人负责一小部分（数据并行），或者不同工种团队负责不同区域（模型并行），工程就能在几年内高效完成。训练LLM就像建造一座数字金字塔，并行计算就是那个高效的“施工队”。</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {parallelComputingImage && (
              <Image 
                src={parallelComputingImage.imageUrl} 
                alt={parallelComputingImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={parallelComputingImage.imageHint}
              />
            )}
          </div>
        </div>

        {/* VII.2 Generalization & Hallucination */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative animate-fade-in-up order-last lg:order-first">
            {hallucinationImage && (
              <Image 
                src={hallucinationImage.imageUrl} 
                alt={hallucinationImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={hallucinationImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">VII.2 泛化与幻觉</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Puzzle className="text-primary"/>AI的想象力与“事实错误”</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>LLM强大的泛化能力使其能举一反三，但有时也会“过度泛化”，导致<strong className="text-foreground">“幻觉” (Hallucination)</strong>——即一本正经地编造不存在的事实。这并非模型在“说谎”，而是其概率本质的体现：它在预测最“像”答案的序列，而非检索事实。</p>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：过度联想的艺术家</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>把LLM想象成一位知识渊博但想象力过分丰富的艺术家。你问他“天为什么是蓝的”，他能旁征博引地解释瑞利散射。但如果你问他一个他知识库里没有的问题，比如“18世纪法国国王最喜欢的冰淇淋口味”，他不会说“我不知道”，而是会根据“国王”、“法国”等词，创作一幅看似合理的“答案画卷”，比如“他钟爱香草味，因为这象征着王室的纯洁”。这就是一种创造性的“幻觉”。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* VII.3 AI Agent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">VII.3 AI Agent</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Brain className="text-primary"/>赋予LLM思考与行动的能力</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">AI Agent</strong> 是当前最热门的方向之一。它不再把LLM当作一个简单的对话机器人，而是将其作为“大脑”，赋予其规划、思考、并调用外部工具（如API、数据库、代码执行器）的能力，以自主完成复杂任务。</p>
              <p>通过<strong className="text-foreground">思维链 (Chain-of-Thought)</strong>、<strong className="text-foreground">ReAct (Reason + Act)</strong> 等框架，Agent能够将一个大目标分解为多个步骤，并一步步执行，从而真正成为能解决实际问题的“智能体”。</p>
              <Card className="bg-background/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：拥有工具箱的大脑</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>一个普通的LLM就像一个被关在房间里的聪明大脑，只能说和写。而AI Agent则给了这个大脑一个工具箱，里面有电话（调用API）、计算器（执行代码）、档案柜（访问数据库）等。当你给它一个任务，比如“帮我预订下周去夏威夷的机票和酒店”，它会自己思考：“第一步，查机票；第二步，查酒店；第三步，比较价格；第四步，下单预订”，然后依次拿起电话和计算器去完成这些步骤，最终向你报告结果。</p>
                </CardContent>
              </Card>
            </div>
          </div>
           <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {agentImage && (
              <Image 
                src={agentImage.imageUrl} 
                alt={agentImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={agentImage.imageHint}
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
