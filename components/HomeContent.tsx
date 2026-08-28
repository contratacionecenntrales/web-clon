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
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import { getLocalizedServices } from "@/i18n/get-services";

export function HomeContent({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const services = getLocalizedServices(dict);
  return (
    <>
      <SiteInteractions emailDict={dict.contact.form} />
      <SiteChrome dict={dict} locale={locale} />
      <main id="main">
        <Hero dict={dict.hero} />
        <LogosStrip dict={dict.logosStrip} />
        <Book dict={dict.book} />
        <Services dict={dict.services} services={services} locale={locale} />
        <Clients dict={dict.clients} />
        <WhyUs dict={dict.whyus} />
        <Founder dict={dict.founder} />
        <Methodology dict={dict.methodology} />
        <Sectors dict={dict.sectors} />
        <Faq dict={dict.faq} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} services={services} locale={locale} />
    </>
  );
}
