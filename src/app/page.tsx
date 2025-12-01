import { Header } from '@/app/components/header';
import { HeroSection } from '@/app/components/hero-section';
import { Footer } from '@/app/components/footer';
import { Chapter1Section } from '@/app/components/p1-foundations';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Chapter1Section />
        {/* TODO: Add other chapters later */}
      </main>
      <Footer />
    </div>
  );
}
