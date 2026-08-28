import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
};

/**
 * Image with a graceful fallback. If the stock URL fails to load, we render a
 * labelled placeholder so the layout never breaks while photos are swapped.
 */
export default function Img({ src, alt, className, label }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-brand-light text-brand-dark ${className ?? ""}`}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-center text-sm font-medium opacity-70">
          {label ?? "Photo coming soon"}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
