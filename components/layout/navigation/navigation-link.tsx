import type { VFC } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link, useColorModeValue } from "@chakra-ui/react";

interface NavigationLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}

export const NavigationLink: VFC<NavigationLinkProps> = ({
  name,
  path,
  onClose,
}) => {
  const router = useRouter();
  const link = {
    bg: useColorModeValue("gray.200", "#000000"),
    color: useColorModeValue("accent.500", "accent.400"),
  };

  return (
    <NextLink href={path} passHref>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: link.bg,
        }}
        bg={router.pathname === path ? link.bg : "transparent"}
        color={router.pathname === path ? link.color : "inherit"}
        onClick={() => onClose()}
      >
        {name}
      </Link>
    </NextLink>
  );
};
