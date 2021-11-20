import {
  TagProps as ChakraTagProps,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import {
  ColorKeys,
  getTagBackgroundDark,
} from "components/ui/theme/foundations/colors";

export interface TagProps extends ChakraTagProps {
  name: string;
  interactive?: boolean;
  colorScheme?: ColorKeys;
}

export function useTagStyles(colorScheme: ColorKeys = "accent") {
  const theme = useTheme();
  return {
    bg: useColorModeValue(
      `${colorScheme}.100`,
      colorScheme === "accent"
        ? "var(--colors-accent-tag-bg-dark)"
        : getTagBackgroundDark(colorScheme, theme),
    ),
    color: useColorModeValue(`${colorScheme}.800`, `${colorScheme}.200`),
  };
}