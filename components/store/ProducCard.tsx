import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Star, Plus, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { productImages } from "@/components/store/images";
import { money } from "@/components/store/config";
export default function ProductCard({ product: p }) {
  return (
    <article className="product-card">
      <Link
        className="product-photo"
        to={`/product/${p.id}`}
        aria-label={`View ${p.name}`}
      >
        <Image
          className="block h-full w-full"
          src={productImages[p.id][0]}
          alt={`SQI Wears ${p.name} — demo photograph`}
          loading="lazy"
        />
        {p.badge && (
          <span
            className={`product-badge ${p.badge === "NEW" ? "new-badge" : ""}`}
          >
            {p.badge}
          </span>
        )}
        <span className="photo-arrow">
          <ArrowUpRight size={18} />
        </span>
      </Link>
      <div className="product-meta">
        <span>
          {p.category} · {p.audience}
        </span>
        <span className="rating">
          <Star size={11} fill="currentColor" />
          {p.rating}
        </span>
      </div>
      <Link to={`/product/${p.id}`} className="product-name">
        {p.name}
      </Link>
      <div className="product-price">{money(p.price)}</div>
      <p className="product-description">{p.description}</p>
      <div className="product-sizes">Sizes: {p.sizes.join(" · ")}</div>
      <div className="product-card-actions">
        <Link to={`/product/${p.id}`} className="add-button">
          <Plus size={15} /> Add to Cart
        </Link>
        <Link to={`/product/${p.id}?action=buy`} className="card-buy">
          Buy Now <ArrowUpRight size={13} />
        </Link>
        <Link
          aria-label={`WhatsApp order ${p.name}`}
          to={`/product/${p.id}?action=whatsapp`}
          className="card-whatsapp"
        >
          <MessageCircle size={16} />
        </Link>
      </div>
    </article>
  );
}
