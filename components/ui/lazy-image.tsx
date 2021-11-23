import ProgressiveImage from "react-progressive-image";
import { BlurhashCanvas } from "react-blurhash";
import { Image } from "@chakra-ui/react";

interface LazyImageProps {
  src: string;
  blurHash: string;
  size?: string;
  width?: number;
  height?: number;
  layout?: string;
  rounded?: string;
}

export default function LazyImage({
  src,
  blurHash,
  size,
  width,
  height,
  layout,
  rounded,
}: LazyImageProps) {
  const placeholder = "/assets/images/placeholder.png";

  return (
    <ProgressiveImage delay={500} src={src} placeholder={placeholder}>
      {(src: string, loading: boolean) => {
        return loading ? (
          <BlurhashCanvas
            hash={blurHash}
            width={width}
            height={height}
            punch={1}
            style={{ borderRadius: rounded ? "5px" : "" }}
          />
        ) : (
          <Image
            src={src}
            objectFit="cover"
            alt="cover image"
            width={width}
            height={height}
            size={size}
            layout={layout}
            rounded={rounded}
            fallbackSrc={placeholder}
          />
        );
      }}
    </ProgressiveImage>
  );
}
