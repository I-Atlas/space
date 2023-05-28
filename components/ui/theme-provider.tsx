import {
  ChakraProvider,
  type ThemeConfig,
  useColorMode as useChakraColorMode,
} from "@chakra-ui/react";
import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme,
} from "next-themes";
import { PropsWithChildren, useEffect, useMemo } from "react";
import { makeTheme } from "styles/theme";

export type UseThemeProps = {
  resolvedTheme?: "light" | "dark";
};

/**
 * Syncs next-themes dark mode provider with Chakra UI theme provider.
 *
 * @see https://github.com/pacocoursey/next-themes/issues/59
 */
export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <NextThemeProvider>
      <ChakraSyncedThemeProvider>{children}</ChakraSyncedThemeProvider>
    </NextThemeProvider>
  );
};

export const ChakraSyncedThemeProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const { resolvedTheme } = useNextTheme() as UseThemeProps;
  const colorModeConfig = useMemo<ThemeConfig>(
    () => ({
      initialColorMode: resolvedTheme,
      useSystemColorMode: true,
    }),
    [resolvedTheme]
  );

  return (
    <ChakraProvider theme={makeTheme(colorModeConfig)}>
      <ChakraColorModeSync />

      {children}
    </ChakraProvider>
  );
};

export const ChakraColorModeSync = () => {
  const { resolvedTheme } = useNextTheme() as UseThemeProps;
  const { setColorMode } = useChakraColorMode();

  useEffect(() => {
    if (resolvedTheme) {
      setColorMode(resolvedTheme);
    }
  }, [resolvedTheme, setColorMode]);

  return null;
};
