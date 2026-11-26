import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { heroImage } from "@/components/store/images";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <Image
        className="hero-image"
        src={heroImage}
        alt="Nigerian fashion models in contemporary black and cream everyday outfits"
        loading="eager"
      />
      <div className="hero-scrim" />
      <div className="hero-content">
        <div className="eyebrow">
          <span className="tiny-dot" /> THE EVERYDAY, ELEVATED
        </div>
        <h1>
          Style That
          <br />
          Speaks <span>For You.</span>
        </h1>
        <p>
          Discover premium fashion pieces designed to
          <br className="desktop-break" /> elevate your everyday style.
        </p>
        <div className="hero-buttons">
          <Link className="button" to="/#shop">
            Shop Now <ArrowUpRight size={19} />
          </Link>
          <Link className="button outline" to="/#categories">
            Explore Collection <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="hero-note">
          <span>01 / THE NEW ESSENTIALS</span>
          <ArrowDownRight size={25} />
        </div>
      </div>
      <div className="hero-tag">CONFIDENCE LOOKS GOOD ON YOU.</div>
    </section>
  );
}
