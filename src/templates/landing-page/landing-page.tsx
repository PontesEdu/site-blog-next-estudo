import { CallToAction, CustomerStorySection, FeatureSection, HeroSection, SupportSection } from "./sections";

export default function LandingPage() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
    </>
  )
}