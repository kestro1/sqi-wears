import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useStore } from "@/components/store/StoreProvider";
import { productImages } from "@/components/store/images";
import { money } from "@/components/store/config";
export default function CartItem({ item, editable = true }) {
  const { update, remove, setCartOpen } = useStore();
  return (
    <article className="cart-item">
      <Image
        src={productImages[item.id][0]}
        alt={item.name}
        className="cart-image"
      />
      <div className="cart-item-info">
        <Link to={`/product/${item.id}`} onClick={() => setCartOpen(false)}>
          {item.name}
        </Link>
        <p>
          {item.color} ·{" "}
          {editable ? (
            <select
              aria-label={`Size for ${item.name}`}
              value={item.size}
              onChange={(e) => update(item, { size: e.target.value })}
            >
              {item.sizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          ) : (
            `Size ${item.size}`
          )}
        </p>
        <strong>{money(item.price * item.quantity)}</strong>
        {editable ? (
          <div className="cart-item-actions">
            <div className="quantity">
              <button
                aria-label={`Decrease ${item.name} quantity`}
                disabled={item.quantity <= 1}
                onClick={() => update(item, { quantity: item.quantity - 1 })}
              >
                <Minus size={13} />
              </button>
              <span>{item.quantity}</span>
              <button
                aria-label={`Increase ${item.name} quantity`}
                disabled={item.quantity >= 99}
                onClick={() => update(item, { quantity: item.quantity + 1 })}
              >
                <Plus size={13} />
              </button>
            </div>
            <button
              className="icon-button"
              aria-label={`Remove ${item.name}`}
              onClick={() => remove(item)}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ) : (
          <small>Quantity: {item.quantity}</small>
        )}
      </div>
    </article>
  );
}
