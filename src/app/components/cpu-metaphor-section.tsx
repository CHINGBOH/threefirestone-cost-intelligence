import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { UserCog, Clipboard, HardHat, Cog, ArrowDown } from 'lucide-react';

export function CpuMetaphorSection() {
  const factoryImage = PlaceHolderImages.find(p => p.id === 'factory');
  
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Cog className="mx-auto h-12 w-12 text-primary animate-spin-slow" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Who's Really in Control?</h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            When you turn on a smart light, do you think the CPU is directly flipping the switch? Think again. The CPU only gives orders; the real work is done by specialized device controllers.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline text-center lg:text-left">The Factory Analogy</h3>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <UserCog className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">CPU (The General Manager)</h4>
                  <p className="text-sm text-muted-foreground">Issues high-level commands: "Assemble."</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <Clipboard className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">I/O Bridge (The Shop Foreman)</h4>
                  <p className="text-sm text-muted-foreground">Routes the command to the correct worker.</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <HardHat className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Device Controller (The Worker)</h4>
                  <p className="text-sm text-muted-foreground">Receives instructions and operates the machine.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            {factoryImage && (
              <Image 
                src={factoryImage.imageUrl} 
                alt={factoryImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full aspect-[3/2] object-cover"
                data-ai-hint={factoryImage.imageHint}
              />
            )}
            <p className="text-center mt-8 text-muted-foreground">This precise "delivery" and "execution" relies on the exact collaboration of address buses and logic gates. Every action is perfectly synchronized.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
