import { Tag as ChakraTag, TagProps as ChakraTagProps } from "@chakra-ui/react";
import { ColorKeys } from "../theme/foundations/colors";
import { useTagStyles } from "hooks/use-tag-styles";

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
