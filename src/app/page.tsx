'use client';

import { Header } from '@/app/components/header';
import { HeroSection } from '@/app/components/hero-section';
import { Chapter1Section } from '@/app/components/p1-foundations';
import { Chapter2Section } from '@/app/components/p2-math-foundations';
import { Chapter3Section } from '@/app/components/p3-statistics';
import { Chapter4Section } from '@/app/components/p4-ml-dl';
import { Chapter5Section } from '@/app/components/p5-software-engineering';
import { Footer } from '@/app/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Chapter1Section />
        <Chapter2Section />
        <Chapter3Section />
        <Chapter4Section />
        <Chapter5Section />
        {/* TODO: Add other chapters later */}
      </main>
      <Footer />
    </div>
  );
}
