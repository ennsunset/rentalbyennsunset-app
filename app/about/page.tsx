import Link from "next/link";
import { PageIntro, SiteFrame } from "../components/SiteFrame";

export const metadata = {
  title: "Our story | RentByEnn",
  description: "Meet RentByEnn: a car rental experience made for the journey.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <section className="content-section">
        <PageIntro
          eyebrow="OUR STORY"
          title="The good part starts on the way."
          description="We believe a great car can turn a simple plan into a story you keep telling."
        />

        <div className="story-page">
          <img
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85"
            alt="A winding road crossing a mountain landscape"
          />
          <div>
            <h2>Built around the feeling of going.</h2>
            <p>
              RentByEnn is a concept for people who want more from getting
              around. We bring together a considered collection of cars and a
              straightforward way to find the right ride for the moment.
            </p>
            <p>
              Whether you are planning a coast road trip, a weekend away, or
              simply want to make an ordinary day feel different, the journey
              deserves a little thought.
            </p>
            <Link className="text-link" href="/fleet">Find your next ride ↗</Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
