import Link from "next/link";
import { Check } from "lucide-react";
import { SiteFrame } from "../components/SiteFrame";

export const metadata = {
  title: "Booking preview | RentByEnn",
  description: "Your sample booking flow is complete.",
};

export default function BookingConfirmationPage() {
  return (
    <SiteFrame>
      <section className="confirmation-card">
        <span className="confirmation-icon"><Check size={28} /></span>
        <div className="eyebrow">
          <span className="eyebrow-line" />
          BOOKING PREVIEW
        </div>
        <h1>You’re ready to go.</h1>
        <p>
          This demo reservation flow is complete. No car has been booked, and no
          payment was taken.
        </p>
        <div className="confirmation-actions">
          <Link className="primary-button" href="/fleet">Keep exploring</Link>
          <Link className="text-link" href="/">Back to home ↗</Link>
        </div>
      </section>
    </SiteFrame>
  );
}
