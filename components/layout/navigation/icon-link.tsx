import type { VFC } from "react";
import NextLink from "next/link";
import { IconButton, Icon } from "@chakra-ui/react";
import { AiTwotoneThunderbolt, AiFillBook, AiFillHome } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { ImBriefcase } from "react-icons/im";

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
    "/": <Icon as={AiFillHome} size={18} color={rPath === path ? color : undefined} />,
    "/about": <Icon as={ImBriefcase} size={18} color={rPath === path ? color : undefined} />,
    "/tech-stack": <Icon as={AiTwotoneThunderbolt} size={18} color={rPath === path ? color : undefined} />,
    "/open-source": <Icon as={AiFillBook} size={18} color={rPath === path ? color : undefined} />,
    "/achievements": <Icon as={GiAchievement} size={18} color={rPath === path ? color : undefined} />,
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
