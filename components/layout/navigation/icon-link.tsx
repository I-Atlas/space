import type { VFC } from "react";
import NextLink from "next/link";
import { Icon, IconButton } from "@chakra-ui/react";
import { AiFillBook, AiFillHome, AiFillThunderbolt } from "react-icons/ai";
import { ImBriefcase } from "react-icons/im";
import { BsAwardFill } from "react-icons/bs";

interface IconLinkProps {
  name: string;
  path: string;
  color: string;
  rPath: string;
}

interface IconsObjProps {
  [key: string]: JSX.Element;
}

export const IconLink: VFC<IconLinkProps> = ({ name, path, color, rPath }) => {
  const iconsObj: IconsObjProps = {
    "/": (
      <Icon
        as={AiFillHome}
        w={5}
        h={5}
        color={rPath === path ? color : undefined}
      />
    ),
    "/career": (
      <Icon
        as={ImBriefcase}
        w={5}
        h={5}
        color={rPath === path ? color : undefined}
      />
    ),
    "/tech-stack": (
      <Icon
        as={AiFillThunderbolt}
        w={5}
        h={5}
        color={rPath === path ? color : undefined}
      />
    ),
    "/open-source": (
      <Icon
        as={AiFillBook}
        w={5}
        h={5}
        color={rPath === path ? color : undefined}
      />
    ),
    "/achievements": (
      <Icon
        as={BsAwardFill}
        w={5}
        h={5}
        color={rPath === path ? color : undefined}
      />
    ),
  };

  return (
    <NextLink href={path} passHref>
      <IconButton
        variant="ghost"
        size="lg"
        icon={iconsObj[path]}
        aria-label={name}
      />
    </NextLink>
  );
};
