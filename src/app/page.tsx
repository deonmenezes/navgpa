import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Approach } from "@/components/Approach";
import { Services } from "@/components/Services";
import { BimShowcase } from "@/components/BimShowcase";
import { About } from "@/components/About";
import { TrackRecord } from "@/components/TrackRecord";
import { Sectors } from "@/components/Sectors";
import { Legacy } from "@/components/Legacy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { company, services, founder } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  alternateName: company.shortName,
  description: company.intro,
  url: "https://navgpa.com",
  email: company.email,
  telephone: company.phone,
  areaServed: ["United States", "United Kingdom", "Middle East", "Asia"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
  },
  slogan: company.tagline,
  knowsAbout: services.map((s) => s.title),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Approach />
        <Services />
        <BimShowcase />
        <About />
        <TrackRecord />
        <Sectors />
        <Legacy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
