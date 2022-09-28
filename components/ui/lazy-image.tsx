import Image, { ImageProps } from "next/image";

interface LazyImageProps {
  src: string;
  blurHash: string;
  size?: string;
  width?: number;
  height?: number;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  rounded?: number;
  fit?: ImageProps["objectFit"];
}

export default function LazyImage({
  src,
  blurHash,
  size,
  width,
  height,
  layout,
  rounded,
  fit,
}: LazyImageProps) {
  return (
    <Image
      src={src}
      sizes={size}
      width={width}
      height={height}
      blurDataURL={blurHash}
      placeholder="blur"
      layout={layout}
      alt={`lazy-image-${blurHash}`}
      style={{ borderRadius: `${rounded}px` }}
      objectFit={fit}
    />
  );
}
