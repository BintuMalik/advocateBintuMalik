import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutPreview from "@/components/sections/AboutPreview";
import PracticeAreas from "@/components/sections/PracticeAreas";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import OfficesPreview from "@/components/sections/OfficesPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <PracticeAreas />
      <WhyChooseUs />
      <OfficesPreview />
      <CTA />
    </>
  );
}
