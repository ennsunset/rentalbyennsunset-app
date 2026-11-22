"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cars } from "../lib/cars";

export function BookingForm() {
  const router = useRouter();
  const [carId, setCarId] = useState(cars[0]?.id ?? "");
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [location, setLocation] = useState("Los Angeles, CA");

  const selectedCar = cars.find((car) => car.id === carId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/booking-confirmation");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Choose a car
        <select value={carId} onChange={(event) => setCarId(event.target.value)}>
          {cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.name} — ${car.price}/day
            </option>
          ))}
        </select>
      </label>

      <label>
        Pick-up location
        <input
          required
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="City, state"
        />
      </label>

      <div className="form-row">
        <label>
          Pick-up date
          <input
            required
            type="date"
            value={pickup}
            onChange={(event) => setPickup(event.target.value)}
          />
        </label>
        <label>
          Return date
          <input
            required
            type="date"
            value={returnDate}
            onChange={(event) => setReturnDate(event.target.value)}
          />
        </label>
      </div>

      <div className="booking-estimate">
        <span>Selected vehicle</span>
        <strong>
          {selectedCar ? `${selectedCar.name} · $${selectedCar.price}/day` : "—"}
        </strong>
      </div>

      <button className="primary-button" type="submit">
        Continue
      </button>
      <p className="fine-print">
        Demo only: this form does not create a real reservation or charge a
        payment method.
      </p>
    </form>
  );
}
