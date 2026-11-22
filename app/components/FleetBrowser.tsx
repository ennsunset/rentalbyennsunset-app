"use client";

import { useMemo, useState } from "react";
import { CarCard } from "./CarCard";
import { cars } from "../lib/cars";

const filters = ["All cars", "SUV", "Sport", "Electric"];

export function FleetBrowser() {
  const [category, setCategory] = useState("All cars");
  const [query, setQuery] = useState("");

  const filteredCars = useMemo(
    () =>
      cars.filter((car) => {
        const matchesCategory =
          category === "All cars" || car.category === category;
        const matchesSearch = car.name
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [category, query],
  );

  return (
    <>
      <div className="fleet-toolbar">
        <div className="category-tabs" aria-label="Filter cars by type">
          {filters.map((filter) => (
            <button
              className={category === filter ? "category-tab active" : "category-tab"}
              key={filter}
              onClick={() => setCategory(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <label className="fleet-search">
          <span className="sr-only">Search cars</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search cars"
          />
        </label>
      </div>

      {filteredCars.length > 0 ? (
        <div className="car-grid">
          {filteredCars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      ) : (
        <p className="empty-results">
          No cars match that search. Try another name or category.
        </p>
      )}
    </>
  );
}
