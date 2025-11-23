"use client";

import Image from "next/image";
import { useState } from "react";
const ImageRender = ({
  src,
  alt = "image",
  className = "",
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const fallBackImage = "/noImage.webp";
  const [loading, setLoading] = useState<boolean>(true);
  const [imageSRC, setImageSRC] = useState<string>(src);

  if (!src) return null;

  return (
    <div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse" />
      )}
      <Image
        src={imageSRC}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={() => setLoading(false)}
        onError={() => setImageSRC(fallBackImage)}
      />
    </div>
  );
};

export default ImageRender;
