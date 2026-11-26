import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Star, ArrowLeft } from "lucide-react";
import { products } from "@/components/store/catalog";
import { productImages } from "@/components/store/images";
import { money } from "@/components/store/config";
import ProductGallery from "@/components/store/ProductGallery";
import PurchaseForm from "@/components/store/PurchaseForm";
export default function ProductDetail() {
  const { id } = useParams();
  const p = products.find((p) => p.id === Number(id));
  if (!p)
    return (
      <div className="empty-state">
        <h1>That piece isn't in our collection.</h1>
        <Link className="button" to="/#shop">
          Return to shop
        </Link>
      </div>
    );
  return (
    <div className="section product-detail">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={12} />
        <Link to="/#shop">Shop</Link>
        <ChevronRight size={12} />
        <span>{p.name}</span>
      </nav>
      <div className="detail-grid">
        <ProductGallery key={p.id} images={productImages[p.id]} name={p.name} />
        <div className="detail-info">
          <span className="eyebrow">
            {p.category.toUpperCase()} / {p.audience.toUpperCase()}
          </span>
          {p.badge && <span className="detail-badge">{p.badge}</span>}
          <h1>{p.name}</h1>
          <div className="detail-rating">
            <Star size={14} fill="currentColor" /> {p.rating}{" "}
            <span>Sample rating · Demo collection</span>
          </div>
          <div className="detail-price">{money(p.price)}</div>
          <p className="detail-description">{p.description}</p>
          <PurchaseForm key={p.id} product={p} />
          <details className="care-details">
            <summary>Care & sizing</summary>
            <p>
              Confirm exact measurements and fabric details with SQI Wears
              before ordering. As a general guide, wash similar colours
              together, use a gentle cycle and air dry. Follow the care label on
              your final garment.
            </p>
          </details>
          <Link className="inline-link" to="/#shop">
            <ArrowLeft size={16} /> Back to the collection
          </Link>
        </div>
      </div>
    </div>
  );
}
