"use client";

import { useState } from "react";

export function HostForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thanks for your interest. This demo does not submit listings.");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Your name
        <input required placeholder="Name" />
      </label>
      <label>
        Email address
        <input type="email" required placeholder="you@example.com" />
      </label>
      <label>
        Tell us about your car
        <textarea required rows={4} placeholder="Make, model, and year" />
      </label>
      <button className="primary-button" type="submit">Register your interest</button>
      {message && <p className="form-message" role="status">{message}</p>}
      <p className="fine-print">
        Demo only. This form does not publish a listing or send your information.
      </p>
    </form>
  );
}
