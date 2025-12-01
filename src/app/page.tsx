import { Header } from '@/app/components/header';
import { HeroSection } from '@/app/components/hero-section';
import { CoreRevelationSection } from '@/app/components/core-revelation-section';
import { LightSwitchSection } from '@/app/components/light-switch-section';
import { VirtualizationSection } from '@/app/components/virtualization-section';
import { RestaurantMetaphorSection } from '@/app/components/restaurant-metaphor-section';
import { CpuMetaphorSection } from '@/app/components/cpu-metaphor-section';
import { TranslationToolSection } from '@/app/components/translation-tool-section';
import { Footer } from '@/app/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CoreRevelationSection />
        <LightSwitchSection />
        <VirtualizationSection />
        <RestaurantMetaphorSection />
        <CpuMetaphorSection />
        <TranslationToolSection />
      </main>
      <Footer />
    </div>
  );
}
