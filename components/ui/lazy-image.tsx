import { Image } from "@chakra-ui/react";
import { BlurhashCanvas } from "react-blurhash";
import ProgressiveImage from "react-progressive-image";

interface LazyImageProps {
  src: string;
  blurHash: string;
  width?: number;
  height?: number;
  rounded?: string;
}

export default function LazyImage({
  src,
  blurHash,
  width,
  height,
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
            style={{ borderRadius: rounded ? "50px" : "" }}
          />
        ) : (
          <Image
            src={src}
            objectFit="cover"
            alt="cover image"
            width={width}
            height={height}
            rounded={rounded}
            fallbackSrc={placeholder}
          />
        );
      }}
    </ProgressiveImage>
  );
}
