import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Image } from "@/components/ui/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0),
    [zoom, setZoom] = useState(false);
  const start = useRef(0);
  const change = (step) =>
    setActive((i) => (i + step + images.length) % images.length);
  return (
    <div className="product-gallery">
      <div
        className="gallery-main"
        onTouchStart={(e) => (start.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const distance = e.changedTouches[0].clientX - start.current;
          if (Math.abs(distance) > 45) change(distance < 0 ? 1 : -1);
        }}
      >
        <button
          className="gallery-zoom"
          aria-label="Zoom product image"
          onClick={() => setZoom(true)}
        >
          <Image
            className="block h-full w-full"
            src={images[active]}
            alt={`${name}, view ${active + 1}`}
            loading="eager"
          />
          <span className="zoom-label">
            <ZoomIn size={16} /> Zoom
          </span>
        </button>
        {images.length > 1 && (
          <>
            <button
              className="gallery-prev"
              aria-label="Previous product image"
              onClick={() => change(-1)}
            >
              <ChevronLeft size={19} />
            </button>
            <button
              className="gallery-next"
              aria-label="Next product image"
              onClick={() => change(1)}
            >
              <ChevronRight size={19} />
            </button>
            <span className="gallery-counter">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((url, i) => (
            <button
              aria-label={`Show product view ${i + 1}`}
              aria-pressed={i === active}
              key={url}
              className={active === i ? "selected" : ""}
              onClick={() => setActive(i)}
            >
              <Image
                className="block h-full w-full"
                src={url}
                alt={`${name} thumbnail ${i + 1}`}
              />
            </button>
          ))}
        </div>
      )}
      <small className="muted">
        AI-generated demo photography ·{" "}
        {images.length > 1 ? "Swipe to explore. " : ""}Final product appearance
        may vary.
      </small>
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="zoom-dialog">
          <DialogTitle className="sr-only">{name} — image zoom</DialogTitle>
          <DialogDescription className="sr-only">
            A larger view of the selected product photograph.
          </DialogDescription>
          <div className="zoom-image">
            <Image
              className="block h-full w-full"
              src={images[active]}
              fittingType="fit"
              alt={`${name} enlarged`}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
