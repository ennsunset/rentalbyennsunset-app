import Link from "next/link";
import { PageIntro, SiteFrame } from "../components/SiteFrame";

const questions = [
  {
    question: "Is this a live car rental service?",
    answer:
      "This website is a frontend demo. Listings, reservation confirmation, and forms use sample data; no real rental or payment is processed.",
  },
  {
    question: "How do I find a car?",
    answer:
      "Visit Explore cars to browse the sample fleet. You can filter by vehicle type, search by name, and open a listing for its details.",
  },
  {
    question: "Can I change my dates?",
    answer:
      "The demo booking page lets you enter dates, but it does not check live availability or contact a vehicle owner.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "For this frontend preview, there is no support inbox connected. The contact links are placeholders and can be connected to a real service later.",
  },
];

export const metadata = {
  title: "Help | RentByEnn",
  description: "Answers to common questions about the RentByEnn preview.",
};

export default function HelpPage() {
  return (
    <SiteFrame>
      <section className="content-section narrow-content">
        <PageIntro
          eyebrow="HERE TO HELP"
          title="Good questions."
          description="A few helpful details about the RentByEnn preview."
        />

        <div className="faq-list">
          {questions.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <p className="help-note">
          Ready to browse? <Link href="/fleet">Explore the sample fleet ↗</Link>
        </p>
      </section>
    </SiteFrame>
  );
}
