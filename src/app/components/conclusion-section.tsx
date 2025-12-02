import { PartyPopper } from "lucide-react";

export function ConclusionSection() {
  return (
    <section id="conclusion" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <PartyPopper className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            结论：理论与工程的交响
          </h2>
          <div className="mt-6 text-lg leading-8 text-foreground/80 space-y-4">
            <p>
              我们的探险之旅即将到达终点。从最底层的计算理论到云端运行的庞大语言模型，我们共同见证了一场理论与工程的宏大交响。
            </p>
            <p>
              大型语言模型（LLM）的惊人能力并非魔法，而是建立在坚实的基石之上：计算复杂性界定了可行性的边界；信息熵为我们衡量不确定性提供了标尺；线性代数赋予了我们操作高维数据的力量；而最大似然估计等统计原则，则确保了模型的学习过程在概率意义上是“正确”的。
            </p>
            <p>
              更重要的是，LoRA、量化、剪枝等高效的工程实践，无一不是对这些深刻理论的巧妙应用。它们是连接抽象理论与现实产品的桥梁，让曾经遥不可及的通用人工智能，一步步走进我们的生活。
            </p>
            <p className="font-semibold text-foreground">
              对底层原理的深刻理解，永远是推动技术浪潮向前奔涌的核心动力。希望这次旅程能点燃你继续探索的热情，在未来的AI世界中，创造属于你自己的奇迹！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
