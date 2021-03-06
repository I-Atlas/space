import NextLink from "next/link";
import { Link, LinkProps } from "@chakra-ui/react";

interface InternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

export default function InternalLink({
  url,
  linkProps,
  text,
  ...props
}: InternalLinkProps) {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  );
}
