import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { User, ConciergeBell, ChefHat, Bot, Layers, ArrowDown } from 'lucide-react';

export function RestaurantMetaphorSection() {
  const restaurantImage = PlaceHolderImages.find(p => p.id === 'restaurant');

  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Layers className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">The Magic of Abstraction</h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            From your idea to a completed task, what happens inside the computer? The answer: layers of abstraction and translation. Your thoughts travel a long road from human language to machine language.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            {restaurantImage && (
              <Image 
                src={restaurantImage.imageUrl} 
                alt={restaurantImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full aspect-[3/2] object-cover"
                data-ai-hint={restaurantImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <h3 className="text-2xl font-bold font-headline text-center lg:text-left">It's Like a Restaurant...</h3>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <User className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">You (The User)</h4>
                  <p className="text-sm text-muted-foreground">You order in natural language.</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <ConciergeBell className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Operating System (The Waiter)</h4>
                  <p className="text-sm text-muted-foreground">Translates your order for the chef.</p>
                </div>
              </CardContent>
            </Card>
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <ChefHat className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">CPU (The Chef)</h4>
                  <p className="text-sm text-muted-foreground">Executes instructions to prepare the meal.</p>
                </div>
              </CardContent>
            </Card>
             <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
             <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <Bot className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Hardware (The Kitchen)</h4>
                  <p className="text-sm text-muted-foreground">The tools and drivers that do the actual work.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <p className="text-center mt-16 text-lg text-foreground/80 max-w-3xl mx-auto">The "stiffness" of computer language is precisely what allows your "vague fantasies" to be executed by the most precise network of switches. It's an engineering miracle!</p>
      </div>
    </section>
  );
}
