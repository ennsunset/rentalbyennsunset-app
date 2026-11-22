import Link from "next/link";
import { Star, Users } from "lucide-react";
import type { Car } from "../lib/cars";

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="car-card">
      <Link
        className="car-image-wrap"
        href={`/cars/${car.id}`}
        aria-label={`View ${car.name}`}
      >
        <img src={car.image} alt={car.name} loading="lazy" />
        <span className="car-tag">{car.category}</span>
      </Link>

      <div className="car-info">
        <div className="car-title-row">
          <div>
            <h2>{car.name}</h2>
            <p>{car.type}</p>
          </div>
          <span className="car-rating">
            <Star size={14} fill="currentColor" /> {car.rating}
          </span>
        </div>

        <div className="car-specs">
          <span>
            <Users size={14} /> {car.seats} seats
          </span>
          <span>Automatic</span>
          <span>Unlimited miles</span>
        </div>

        <div className="car-card-bottom">
          <span>
            <strong>${car.price}</strong> / day
          </span>
          <Link href={`/cars/${car.id}`}>View details ↗</Link>
        </div>
      </div>
    </article>
  );
}
