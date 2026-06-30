import { useEffect, useRef, useState } from "react";

export function Marquee({
  images,
  speed = 6,
  className = "",
}: {
  images: string[];
  speed?: number;
  className?: string;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const copyWidthRef = useRef(0);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  const allImages = [...images, ...images, ...images, ...images];

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner || images.length === 0) return;

    let loaded = 0;
    const imgs = inner.querySelectorAll("img");
    const total = imgs.length;

    if (total === 0) return;

    function check() {
      loaded++;
      if (loaded >= total) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const w = inner.scrollWidth;
            if (w > 0) {
              copyWidthRef.current = w / 4;
              setReady(true);
            }
          });
        });
      }
    }

    imgs.forEach((img) => {
      if (img.complete) {
        check();
      } else {
        img.addEventListener("load", check, { once: true });
        img.addEventListener("error", check, { once: true });
      }
    });

    return () => cancelAnimationFrame(rafRef.current);
  }, [images.length]);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.target.scrollWidth;
        if (w > 0) {
          const newCopyWidth = w / 4;
          const oldCopyWidth = copyWidthRef.current;
          if (oldCopyWidth > 0 && Math.abs(newCopyWidth - oldCopyWidth) > 1) {
            posRef.current = (posRef.current / oldCopyWidth) * newCopyWidth;
            copyWidthRef.current = newCopyWidth;
          }
        }
      }
    });

    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!ready) return;

    const copyWidth = copyWidthRef.current;
    if (copyWidth <= 0) return;

    const pxPerMs = copyWidth / (speed * 1000);
    let prevTime = performance.now();

    function animate(time: number) {
      const dt = time - prevTime;
      prevTime = time;
      posRef.current -= dt * pxPerMs;
      if (posRef.current <= -copyWidth) {
        posRef.current += copyWidth;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [ready, speed]);

  return (
    <div className={`overflow-hidden marquee-mask ${className}`} aria-hidden="true">
      <div ref={innerRef} className="flex">
        {allImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-[250px] sm:h-[400px] w-auto object-scale-down flex-shrink-0 pointer-events-none select-none mr-8"
            loading="eager"
          />
        ))}
      </div>
    </div>
  );
}
