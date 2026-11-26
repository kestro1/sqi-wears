import React from "react";
import { MessageCircle, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { CONFIG, enquiryUrl } from "@/components/store/config";
export default function Contact() {
  return (
    <section className="section contact-section" id="contact" data-reveal>
      <div>
        <span className="eyebrow">LET'S TALK STYLE</span>
        <h2>A question? We're here.</h2>
        <p>
          Need help with a size, an order, or your next look?
          <br />
          Start a conversation with SQI Wears.
        </p>
        <a
          className="button"
          href={enquiryUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} /> Chat With Us on WhatsApp{" "}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="contact-details">
        <a href={`tel:${CONFIG.phone}`}>
          <Phone size={19} />
          <div>
            <small>CALL / WHATSAPP</small>
            <strong>{CONFIG.phone}</strong>
          </div>
          <ArrowUpRight size={16} />
        </a>
        <div>
          <MapPin size={19} />
          <div>
            <small>BASED IN NIGERIA</small>
            <strong>{CONFIG.address || "Physical address to be added"}</strong>
          </div>
        </div>
        <p>
          {CONFIG.email ? (
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
          ) : (
            "Business email to be added"
          )}
        </p>
        <small>Official social media links will be added soon.</small>
      </div>
    </section>
  );
}
