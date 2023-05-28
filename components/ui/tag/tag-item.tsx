import type { TagProps as ChakraTagProps } from "@chakra-ui/react";
import { Tag as ChakraTag } from "@chakra-ui/react";
import { useTagStyles } from "hooks/common/use-tag-styles";
import { getTagColor } from "styles/theme";
import { ColorKeys } from "styles/foundations/colors";

export interface TagProps extends ChakraTagProps {
  name: string;
  interactive?: boolean;
  colorScheme?: ColorKeys;
}

export default function TagItem({
  colorScheme = "accent",
  name,
  interactive = true,
  ...props
}: TagProps) {
  const propsOverride = {
    size: "sm",
    verticalAlign: "middle",
    ...useTagStyles(getTagColor(name)),
  };
  if (!interactive) {
    return (
      <ChakraTag {...props} {...propsOverride}>
        {name}
      </ChakraTag>
    );
  }

  return (
    <ChakraTag {...props} {...propsOverride}>
      {name}
    </ChakraTag>
  );
}
