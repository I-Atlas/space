import type { VFC } from "react";
import NextLink from "next/link";
import { HStack, Text, Link, MenuItem, Icon } from "@chakra-ui/react";
import { AiFillThunderbolt, AiFillBook } from "react-icons/ai";
import { BsAwardFill } from "react-icons/bs";

interface MenuLinkProps {
  name: string;
  path: string;
  color: string;
  bg: string;
  rPath: string;
  onClose: () => void;
}

interface IconsObjProps {
  [key: string]: JSX.Element;
}

export const MenuLink: VFC<MenuLinkProps> = ({
  name,
  path,
  color,
  bg,
  rPath,
  onClose,
}) => {
  const iconsObj: IconsObjProps = {
    "/tech-stack": (
      <Icon
        as={AiFillThunderbolt}
        size={18}
        color={rPath === path ? color : undefined}
      />
    ),
    "/open-source": (
      <Icon
        as={AiFillBook}
        size={18}
        color={rPath === path ? color : undefined}
      />
    ),
    "/achievements": (
      <Icon
        as={BsAwardFill}
        size={18}
        color={rPath === path ? color : undefined}
      />
    ),
  };

  return (
    <NextLink href={path} passHref>
      <Link onClick={() => onClose()}>
        <MenuItem
          color={rPath === path ? color : undefined}
          bg={rPath === path ? bg : undefined}
        >
          <HStack>
            {iconsObj[path]}
            <Text>{name}</Text>
          </HStack>
        </MenuItem>
      </Link>
    </NextLink>
  );
};
