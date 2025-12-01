import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Cloud } from 'lucide-react';

export function VirtualizationSection() {
  const catsImage = PlaceHolderImages.find(p => p.id === 'cats');
  const datacenterImage = PlaceHolderImages.find(p => p.id === 'cloud-data-center');
  
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline">The Illusion of Reality</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            "Virtual" Doesn't Mean Fake
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            You hear "Virtual Machine" and think of something ethereal. But the essence of 'virtual' is about function, not form. It's not about being fake, but about being functionally equivalent.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden">
            {catsImage && <Image src={catsImage.imageUrl} alt={catsImage.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={catsImage.imageHint} />}
            <CardContent className="p-6">
              <h3 className="font-semibold font-headline">As long as it catches the mouse...</h3>
              <p className="mt-2 text-muted-foreground">The core idea of "virtual": It doesn't matter if it's a white cat or a black cat, as long as it catches the mouse. Efficacy is more important than form.</p>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="p-4 bg-primary/10 rounded-lg flex-shrink-0">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-headline">Functionally Identical</h3>
                <p className="mt-1 text-muted-foreground">A virtual machine has all the capabilities of a physical one. Your applications can't tell the difference.</p>
              </div>
            </div>
            <Card className="overflow-hidden">
                {datacenterImage && <Image src={datacenterImage.imageUrl} alt={datacenterImage.description} width={600} height={400} className="w-full object-cover aspect-[3/2]" data-ai-hint={datacenterImage.imageHint} />}
                <CardContent className="p-6 flex items-center gap-4">
                    <Cloud className="h-8 w-8 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">They are the unsung heroes powering the cloud, allowing for massive scalability and efficiency.</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
