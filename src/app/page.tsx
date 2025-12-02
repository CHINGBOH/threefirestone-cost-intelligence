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
import { Chapter8Section } from '@/app/components/p8-architecture';
import { Chapter9Section } from '@/app/components/p9-os-networking';
import { Chapter10Section } from '@/app/components/p10-databases';
import { Chapter11Section } from '@/app/components/p11-computer-vision';
import { Chapter12Section } from '@/app/components/p12-nlp';
import { Chapter13Section } from '@/app/components/p13-ethics-safety';
import { Chapter14Section } from '@/app/components/p14-product-business';
import { Chapter15Section } from '@/app/components/p15-learning-strategy';
import { Chapter16Section } from '@/app/components/p16-future-outlook';
import { Chapter17Section } from '@/app/components/p17-thought-experiments';
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
            <Chapter8Section />
            <Chapter9Section />
            <Chapter10Section />
            <Chapter11Section />
            <Chapter12Section />
            <Chapter13Section />
            <Chapter14Section />
            <Chapter15Section />
            <Chapter16Section />
            <Chapter17Section />
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
