import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldHalf, Scale, Lock } from 'lucide-react';

export function Chapter13Section() {
  const ethicsSafetyImage = PlaceHolderImages.find(p => p.id === 'ethics-safety');

  return (
    <section id="chapter-13" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <ShieldHalf className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            第十三章：AI伦理与安全
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            技术是中立的，但技术的使用却带有价值判断。手握AI这柄“神器”，我们必须心存敬畏，确保它向善而行。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="relative animate-fade-in-up order-last lg:order-first">
            {ethicsSafetyImage && (
              <Image 
                src={ethicsSafetyImage.imageUrl} 
                alt={ethicsSafetyImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={ethicsSafetyImage.imageHint}
              />
            )}
          </div>
          <div className="animate-fade-in-up order-first lg:order-last" style={{animationDelay: '0.3s'}}>
            <Badge variant="secondary" className="mb-4">XIII.1 重要的护栏</Badge>
            <h3 className="text-2xl font-semibold font-headline mb-4 flex items-center gap-2"><Scale className="text-primary"/>偏见、隐私与对齐</h3>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">偏见 (Bias)</strong>：如果训练数据本身就包含社会偏见（例如，某个职业的图片多为男性），模型就会“学会”并放大这种偏见。<strong className="text-foreground">隐私 (Privacy)</strong>：模型可能会无意中泄露训练数据中的个人敏感信息。<strong className="text-foreground">对齐 (Alignment)</strong>：如何确保AI模型的目标和行为，始终与人类的价值观和长远利益保持一致？这是一个深刻且开放的挑战。</p>
              <Card className="bg-background/80 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">通俗比喻：教育一个孩子</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong className="text-primary">偏见</strong>：如果你只给孩子看“医生是男性，护士是女性”的图画书，他长大后可能就会形成刻板印象。</p>
                  <p><strong className="text-primary">隐私</strong>：孩子可能会在外面不小心说出家庭的住址或电话号码。</p>
                  <p><strong className="text-primary">对齐</strong>：你希望孩子成为一个善良、诚实、对社会有益的人，而不是一个虽然聪明但会用才智作恶的人。你需要不断地对他进行价值观教育。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
