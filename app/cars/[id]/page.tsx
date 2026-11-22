import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Star, Users } from "lucide-react";
import { SiteFrame } from "../../components/SiteFrame";
import { cars } from "../../lib/cars";

export function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }));
}

export default function CarDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const car = cars.find((item) => item.id === params.id);
  if (!car) notFound();

  return (
    <SiteFrame>
      <section className="content-section">
        <Link className="back-link" href="/fleet">
          <ArrowLeft size={15} /> Back to all cars
        </Link>

        <div className="detail-layout">
          <img className="detail-image" src={car.image} alt={car.name} />

          <div className="detail-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {car.category} · AVAILABLE TO BOOK
            </div>
            <h1>{car.name}</h1>
            <p className="detail-type">{car.type}</p>

            <div className="detail-rating">
              <Star size={15} fill="currentColor" /> {car.rating}
              <span> · Guest favorite</span>
            </div>

            <p className="detail-description">{car.description}</p>

            <div className="detail-specs">
              <span><Users size={16} /> {car.seats} seats</span>
              <span><Check size={16} /> Automatic</span>
              <span><Check size={16} /> Unlimited miles</span>
              <span><Check size={16} /> Verified vehicle</span>
            </div>

            <div className="detail-price">
              <span><strong>${car.price}</strong> / day</span>
              <Link className="primary-button" href="/checkout">
                Continue to booking ↗
              </Link>
            </div>
            <p className="fine-print">
              Sample listing for preview purposes. Checkout is not connected to
              a payment service.
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
