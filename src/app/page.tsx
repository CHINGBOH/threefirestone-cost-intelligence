import { Header } from '@/app/components/header';
import { HeroSection } from '@/app/components/hero-section';
import { CoreRevelationSection } from '@/app/components/core-revelation-section';
import { LightSwitchSection } from '@/app/components/light-switch-section';
import { RestaurantMetaphorSection } from '@/app/components/restaurant-metaphor-section';
import { CpuMetaphorSection } from '@/app/components/cpu-metaphor-section';
import { TranslationToolSection } from '@/app/components/translation-tool-section';
import { Footer } from '@/app/components/footer';
import { WhatIsAComputerSection } from '@/app/components/p1-what-is-a-computer';
import { BinaryCodeSection } from '@/app/components/p2-binary-code';
import { InteractiveBinarySection } from '@/app/components/p3-interactive-binary';
import { MeetTheCPUSection } from '@/app/components/p4-meet-the-cpu';
import { RamDeskSection } from '@/app/components/p5-ram-desk';
import { StorageLibrarySection } from '@/app/components/p6-storage-library';
import { GpuArtistSection } from '@/app/components/p7-gpu-artist';
import { MotherboardCitySection } from '@/app/components/p8-motherboard-city';
import { InputPostOfficeSection } from '@/app/components/p9-input-post-office';
import { OutputStageSection } from '@/app/components/p10-output-stage';
import { OsConductorSection } from '@/app/components/p11-os-conductor';
import { AppFairgroundSection } from '@/app/components/p12-app-fairground';
import { InternetGalaxySection } from '@/app/components/p13-internet-galaxy';
import { PacketsMailSection } from '@/app/components/p14-packets-mail';
import { CloudCastleSection } from '@/app/components/p15-cloud-castle';
import { VirtualizationSection } from './components/p16-virtualization-magic';
import { ProgrammingChefSection } from './components/p17-programming-chef';
import { AiFriendSection } from './components/p18-ai-friend';
import { SummarySection } from './components/p19-summary';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Part 1: The Magical Box */}
        <WhatIsAComputerSection />
        <CoreRevelationSection />
        <LightSwitchSection />
        <BinaryCodeSection />
        <InteractiveBinarySection />
        
        {/* Part 2: Inside the Magic Box */}
        <MeetTheCPUSection />
        <RamDeskSection />
        <StorageLibrarySection />
        <GpuArtistSection />
        <MotherboardCitySection />

        {/* Part 3: Talking to the Box */}
        <InputPostOfficeSection />
        <OutputStageSection />
        <OsConductorSection />
        <AppFairgroundSection />

        {/* Part 4: The World Beyond the Box */}
        <InternetGalaxySection />
        <PacketsMailSection />
        <CloudCastleSection />
        <VirtualizationSection />

        {/* Part 5: Creating the Magic */}
        <ProgrammingChefSection />
        <AiFriendSection />

        {/* Conclusion */}
        <SummarySection />
        <TranslationToolSection />
      </main>
      <Footer />
    </div>
  );
}
