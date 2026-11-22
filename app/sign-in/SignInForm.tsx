"use client";

import { useState } from "react";

export function SignInForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Sign-in is a demo feature; no account was created.");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Email address
        <input type="email" required placeholder="you@example.com" />
      </label>
      <label>
        Password
        <input type="password" required minLength={6} placeholder="At least 6 characters" />
      </label>
      <button className="primary-button" type="submit">Sign in</button>
      {message && <p className="form-message" role="status">{message}</p>}
      <p className="fine-print">
        Demo only. Your details are not sent to a server or saved.
      </p>
    </form>
  );
}
