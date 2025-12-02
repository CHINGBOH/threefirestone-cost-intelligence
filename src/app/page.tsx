'use client';

import { Header } from '@/app/components/header';
import { HeroSection } from '@/app/components/hero-section';
import { Chapter1Section } from '@/app/components/p1-foundations';
import { Chapter2Section } from '@/app/components/p2-math-foundations';
import { Chapter3Section } from '@/app/components/p3-statistics';
import { Chapter4Section } from '@/app/components/p4-ml-dl';
import { Chapter5Section } from '@/app/components/p5-software-engineering';
import { Chapter6Section } from '@/app/components/p6-llm-architecture';
import { Chapter7Section } from '@/app/components/p7-frontiers';
import { InteractiveSection } from '@/app/components/interactive-section';
import { ConclusionSection } from '@/app/components/conclusion-section';
import { Footer } from '@/app/components/footer';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from './components/app-sidebar';
import { BackToTop } from './components/back-to-top';

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1">
            <HeroSection />
            <Chapter1Section />
            <Chapter2Section />
            <Chapter3Section />
            <Chapter4Section />
            <Chapter5Section />
            <Chapter6Section />
            <Chapter7Section />
            <InteractiveSection />
            <ConclusionSection />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
