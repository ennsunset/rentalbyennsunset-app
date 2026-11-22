import { FleetBrowser } from "../components/FleetBrowser";
import { PageIntro, SiteFrame } from "../components/SiteFrame";

export const metadata = {
  title: "Explore cars | RentByEnn",
  description: "Browse the RentByEnn collection of premium cars for your next trip.",
};

export default function FleetPage() {
  return (
    <SiteFrame>
      <section className="content-section">
        <PageIntro
          eyebrow="THE GOOD STUFF"
          title="Find your kind of drive."
          description="Hand-picked rides for wherever life takes you."
        />
        <FleetBrowser />
      </section>
    </SiteFrame>
  );
}
