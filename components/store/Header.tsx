import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, ArrowUpRight } from "lucide-react";
import { useStore } from "@/components/store/StoreProvider";
import { enquiryUrl } from "@/components/store/config";
export default function Header() {
  const [open, setOpen] = useState(false),
    [searchOpen, setSearchOpen] = useState(false),
    [query, setQuery] = useState("");
  const { count, setCartOpen } = useStore();
  const navigate = useNavigate();
  const links = [
    ["Home", "/"],
    ["Shop", "/#shop"],
    ["Men", "/?category=Men#shop"],
    ["Women", "/?category=Women#shop"],
    ["New Arrivals", "/?sort=Newest#shop"],
    ["About", "/#about"],
    ["Contact", "/#contact"],
  ];
  function search(e) {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(query)}#shop`);
    setSearchOpen(false);
  }
  return (
    <>
      <div className="announcement">
        Everyday essentials. Exceptional style.{" "}
        <span>Made for your next chapter.</span>
      </div>
      <header className="store-header">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="SQI Wears home">
            SQI
            <span>
              WEARS<span className="brand-dot">.</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            {links.map(([name, url]) => (
              <Link key={name} to={url}>
                {name}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button"
              aria-label="Search products"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={21} />
            </button>
            <button
              className="icon-button bag-button"
              aria-label={`Open shopping bag, ${count} items`}
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={21} />
              <span className="bag-count">{count}</span>
            </button>
            <a
              className="nav-whatsapp"
              href={enquiryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Let's talk <ArrowUpRight size={15} />
            </a>
            <button
              className="icon-button mobile-menu-button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {searchOpen && (
          <form className="header-search" onSubmit={search}>
            <Search size={19} />
            <input
              autoFocus
              aria-label="Search by product or category"
              placeholder="Search your next favourite…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button small" type="submit">
              Search
            </button>
          </form>
        )}
        {open && (
          <nav aria-label="Mobile navigation" className="mobile-nav">
            {links.map(([name, url]) => (
              <Link key={name} to={url} onClick={() => setOpen(false)}>
                {name}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
