import React from "react";
import { Truck, ShieldCheck, Sparkles, MessageCircle, Tag } from "lucide-react";
export default function Benefits({ compact = false }) {
  const perks = [
    [Sparkles, "Quality Products", "Carefully selected fashion pieces."],
    [Tag, "Affordable Prices", "Great style at competitive prices."],
    [MessageCircle, "Easy Ordering", "Shop online or order on WhatsApp."],
    [ShieldCheck, "Secure Payment", "No card details collected or stored."],
    [Truck, "Fast Delivery", "Convenient options across Nigeria."],
  ];
  return (
    <section
      className={compact ? "benefits-strip" : "section benefits-section"}
      aria-label="Why shop with us"
    >
      {!compact && (
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE SQI DIFFERENCE</span>
            <h2>Good style. No compromises.</h2>
          </div>
          <p>The little things that make shopping feel better.</p>
        </div>
      )}
      <div className="benefits-grid">
        {perks.map(([Icon, title, text]) => (
          <div key={title} className="benefit">
            <Icon size={24} strokeWidth={1.4} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
