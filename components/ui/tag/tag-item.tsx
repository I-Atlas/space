import type { TagProps as ChakraTagProps } from "@chakra-ui/react";
import { Tag as ChakraTag } from "@chakra-ui/react";
import { useTagStyles } from "hooks/use-tag-styles";
import { ColorKeys } from "../theme/foundations/colors";

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
    ...useTagStyles(colorScheme),
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
