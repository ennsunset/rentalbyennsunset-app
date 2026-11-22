import { PageIntro, SiteFrame } from "../components/SiteFrame";
import { BookingForm } from "./BookingForm";

export const metadata = {
  title: "Booking | RentByEnn",
  description: "Choose your dates for a sample RentByEnn booking.",
};

export default function CheckoutPage() {
  return (
    <SiteFrame>
      <section className="content-section narrow-content">
        <PageIntro
          eyebrow="MAKE IT YOURS"
          title="Plan your drive."
          description="Choose a sample car and dates to preview the reservation flow."
        />
        <BookingForm />
      </section>
    </SiteFrame>
  );
}
