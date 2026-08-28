import { SiteChrome } from "@/components/sections/SiteChrome";
import { Hero } from "@/components/sections/Hero";
import { LogosStrip } from "@/components/sections/LogosStrip";
import { Book } from "@/components/sections/Book";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { WhyUs } from "@/components/sections/WhyUs";
import { Founder } from "@/components/sections/Founder";
import { Methodology } from "@/components/sections/Methodology";
import { Sectors } from "@/components/sections/Sectors";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { SiteInteractions } from "@/components/SiteInteractions";

export default function Home() {
  return (
    <>
      <SiteInteractions />
      <SiteChrome />
      <main id="main">
        <Hero />
        <LogosStrip />
        <Book />
        <Services />
        <Clients />
        <WhyUs />
        <Founder />
        <Methodology />
        <Sectors />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
