import Link from "next/link";
import { CalendarDays, Check, KeyRound } from "lucide-react";
import { PageIntro, SiteFrame } from "../components/SiteFrame";

const steps = [
  {
    number: "01",
    icon: <CalendarDays />,
    title: "Find your fit",
    text: "Browse a thoughtfully curated fleet and choose the car that suits your plans.",
  },
  {
    number: "02",
    icon: <Check />,
    title: "Choose your dates",
    text: "Share when you need the car. This demo keeps the booking flow simple and clear.",
  },
  {
    number: "03",
    icon: <KeyRound />,
    title: "Hit the road",
    text: "Meet your host, pick up the keys, and make the journey your own.",
  },
];

export const metadata = {
  title: "How it works | RentByEnn",
  description: "Learn how to find and reserve a car with RentByEnn.",
};

export default function HowItWorksPage() {
  return (
    <SiteFrame>
      <section className="content-section">
        <PageIntro
          eyebrow="A BETTER WAY TO GET THERE"
          title="Less logistics. More living."
          description="Finding a car should feel like the start of your trip—not another item on your to-do list."
        />

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <span className="step-icon">{step.icon}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="page-cta">
          <div>
            <h2>Your next chapter is out there.</h2>
            <p>Find a car that makes you want to take the long way.</p>
          </div>
          <Link className="primary-button" href="/fleet">Explore the fleet ↗</Link>
        </div>
      </section>
    </SiteFrame>
  );
}
