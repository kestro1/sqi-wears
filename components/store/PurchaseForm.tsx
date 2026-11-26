import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Minus,
  Plus,
  ShoppingBag,
  MessageCircle,
  Truck,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { useStore } from "@/components/store/StoreProvider";
export default function PurchaseForm({ product: p }) {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { add, setCartOpen } = useStore();
  const [size, setSize] = useState(
      p.category === "Accessories" ? "One Size" : "",
    ),
    [color, setColor] = useState(p.colors[0]),
    [quantity, setQuantity] = useState(1),
    [error, setError] = useState("");
  function purchase(action) {
    if (!size) {
      setError("Please select a size before continuing.");
      return;
    }
    setError("");
    add(p, size, color, quantity);
    if (action === "cart") setCartOpen(true);
    else
      navigate(`/checkout${action === "whatsapp" ? "?method=whatsapp" : ""}`);
  }
  return (
    <div className="purchase-form">
      <div className="option-heading">
        <span>
          Select size <strong>*</strong>
        </span>
        <span className="muted">
          {p.category === "Accessories"
            ? "Adjustable fit"
            : "Choose your usual size"}
        </span>
      </div>
      <div className="size-options">
        {p.sizes.map((s) => (
          <button
            key={s}
            aria-label={`Select size ${s}`}
            aria-pressed={size === s}
            className={size === s ? "selected" : ""}
            onClick={() => {
              setSize(s);
              setError("");
            }}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="color-label">
        Colour: <strong>{color}</strong>
      </div>
      <div className="color-options">
        {p.colors.map((c) => (
          <button
            aria-label={`Select colour ${c}`}
            aria-pressed={color === c}
            className="selected"
            key={c}
            onClick={() => setColor(c)}
          >
            <span
              style={{
                background: {
                  Black: "#161616",
                  White: "#fafafa",
                  Charcoal: "#555",
                  Olive: "#64654e",
                  Blue: "#55748e",
                  Beige: "#d2bda1",
                  Oat: "#ded5c4",
                  Navy: "#18293d",
                }[c],
              }}
            />
            {c}
          </button>
        ))}
      </div>
      <div className="quantity-label">Quantity</div>
      <div className="quantity large">
        <button
          aria-label="Decrease quantity"
          disabled={quantity <= 1}
          onClick={() => setQuantity(quantity - 1)}
        >
          <Minus size={16} />
        </button>
        <span>{quantity}</span>
        <button
          aria-label="Increase quantity"
          disabled={quantity >= 99}
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus size={16} />
        </button>
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {params.get("action") === "whatsapp" && (
        <p className="muted">
          Choose your size, then continue to enter your delivery details.
        </p>
      )}
      <button className="button wide" onClick={() => purchase("cart")}>
        <ShoppingBag size={18} /> Add to Cart <ArrowUpRight size={18} />
      </button>
      <button className="button outline wide" onClick={() => purchase("buy")}>
        Buy Now <ArrowUpRight size={18} />
      </button>
      <button
        className="button whatsapp-outline wide"
        onClick={() => purchase("whatsapp")}
      >
        <MessageCircle size={18} /> Order via WhatsApp
      </button>
      <div className="product-assurances">
        <span>
          <Truck size={16} /> Delivery across Nigeria
        </span>
        <span>
          <ShieldCheck size={16} /> No card details stored
        </span>
      </div>
    </div>
  );
}
