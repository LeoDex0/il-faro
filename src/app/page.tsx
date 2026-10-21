import { Hero } from "@/components/home/hero";
import { Storia } from "@/components/home/storia";
import { Logbook } from "@/components/home/logbook";
import { MenuHighlights } from "@/components/home/menu-highlights";
import { SignatureDish } from "@/components/home/signature-dish";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Testimonials } from "@/components/home/testimonials";
import { ReserveCta } from "@/components/home/reserve-cta";
import { LocationContact } from "@/components/home/location-contact";
import { SectionDots } from "@/components/section-dots";
import { homeSections } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SectionDots sections={homeSections} />
      <Hero />
      <Storia />
      <Logbook />
      <MenuHighlights />
      <SignatureDish />
      <GalleryPreview />
      <Testimonials />
      <ReserveCta />
      <LocationContact />
    </>
  );
}
