import React from "react";
import { Star, Quote } from "lucide-react";
export default function Reviews() {
  const reviews = [
    [
      "Sarah",
      "Great quality and the delivery was very smooth.",
      "The everyday edit",
    ],
    [
      "David",
      "Exactly what I ordered. I love the fit.",
      "The essentials collection",
    ],
    [
      "Tomi",
      "Simple, stylish pieces that make getting dressed easy.",
      "The weekend wardrobe",
    ],
  ];
  return (
    <section className="section reviews" data-reveal>
      <div className="section-heading">
        <div>
          <span className="eyebrow">STYLE, IN THEIR WORDS</span>
          <h2>A little love for the fit.</h2>
        </div>
        <p>Sample reviews for demonstration only.</p>
      </div>
      <div className="review-grid">
        {reviews.map(([name, text, tag]) => (
          <article key={name} className="review-card">
            <div className="review-stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
              <Quote size={25} strokeWidth={1} />
            </div>
            <blockquote>“{text}”</blockquote>
            <div className="review-person">
              <span>{name[0]}</span>
              <div>
                <strong>{name}</strong>
                <small>{tag} · Demo review</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
