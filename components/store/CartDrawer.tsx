import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight, Truck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useStore } from "@/components/store/StoreProvider";
import CartItem from "@/components/store/CartItem";
import { money } from "@/components/store/config";
export default function CartDrawer() {
  const { items, subtotal, count, cartOpen, setCartOpen } = useStore();
  return (
    <Dialog open={cartOpen} onOpenChange={setCartOpen}>
      <DialogContent className="cart-panel">
        <DialogTitle className="cart-title">
          Your bag <span>({count})</span>
        </DialogTitle>
        <DialogDescription className="sr-only">
          Review your selected pieces, sizes and quantities.
        </DialogDescription>
        {items.length ? (
          <>
            <div className="cart-items">
              {items.map((i) => (
                <CartItem key={`${i.id}-${i.size}-${i.color}`} item={i} />
              ))}
            </div>
            <div className="cart-bottom">
              <div className="total-line">
                <span>Subtotal</span>
                <strong>{money(subtotal)}</strong>
              </div>
              <div className="total-line muted">
                <span>Delivery</span>
                <span>Selected at checkout</span>
              </div>
              <p className="cart-delivery">
                <Truck size={16} /> Delivery estimates from ₦2,000; pickup is
                free.
              </p>
              <Link
                className="button wide"
                to="/checkout"
                onClick={() => setCartOpen(false)}
              >
                Checkout <ArrowRight size={17} />
              </Link>
              <button
                className="text-button wide"
                onClick={() => setCartOpen(false)}
              >
                Continue shopping
              </button>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <ShoppingBag size={44} strokeWidth={1} />
            <h3>Your next favourite is waiting.</h3>
            <p>Your bag is empty. Let's change that.</p>
            <Link
              className="button"
              to="/#shop"
              onClick={() => setCartOpen(false)}
            >
              Explore the collection <ArrowRight size={17} />
            </Link>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
