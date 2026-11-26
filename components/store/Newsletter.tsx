import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";
export default function Newsletter() {
  const [email, setEmail] = useState(""),
    [status, setStatus] = useState(""),
    [error, setError] = useState("");
  async function subscribe(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await base44.entities.Subscriber.create({
        email: email.trim().toLowerCase(),
      });
      setStatus("done");
    } catch {
      setStatus("");
      setError("We could not save your subscription. Please try again.");
    }
  }
  return (
    <section className="newsletter" data-reveal>
      <div>
        <span className="eyebrow">YOUR WARDROBE, ONE STEP AHEAD</span>
        <h2>
          Stay In Style<span>.</span>
        </h2>
        <p>
          Subscribe to receive updates about new arrivals,
          <br />
          exclusive offers and promotions.
        </p>
      </div>
      <div className="newsletter-form-wrap">
        {status === "done" ? (
          <div role="status" className="subscribe-success">
            <Check size={21} /> You're on the list. Stay tuned.
          </div>
        ) : (
          <form onSubmit={subscribe}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              maxLength={254}
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Subscribing…" : "Subscribe"}
              <ArrowUpRight size={19} />
            </button>
          </form>
        )}
        <small>Thoughtfully curated updates. Your email is kept private.</small>
        {error && <p role="alert">{error}</p>}
      </div>
    </section>
  );
}
