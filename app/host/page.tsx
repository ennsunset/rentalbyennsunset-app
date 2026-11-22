import { PageIntro, SiteFrame } from "../components/SiteFrame";
import { HostForm } from "./HostForm";

export const metadata = {
  title: "List your car | RentByEnn",
  description: "Register your interest in listing a car with RentByEnn.",
};

export default function HostPage() {
  return (
    <SiteFrame>
      <section className="content-section narrow-content">
        <PageIntro
          eyebrow="FOR CAR OWNERS"
          title="Your car has a story."
          description="Interested in sharing it? Leave a sample expression of interest."
        />
        <HostForm />
      </section>
    </SiteFrame>
  );
}
