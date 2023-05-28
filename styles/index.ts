import {extendTheme, ThemeOverride} from "@chakra-ui/react";
import {colors} from "./foundations/colors";
import {mergeWith} from "@chakra-ui/utils";
import {mode} from "@chakra-ui/theme-tools";
// Re-exports
export { useLinkColor, accentKeys } from "./foundations/colors";
export type { ColorKeys } from "./foundations/colors";

export function makeTheme(overrides: ThemeOverride = {}) {
  const theme = extendTheme({
    ...extendedTheme,
    colors,
  });
  return mergeWith(theme, overrides);
}

export const extendedTheme = extendTheme({
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode("#0a0a0a", "whiteAlpha.900")(props),
        bg: mode("gray.50", "#000000")(props),
        fontSize: "1.2em",
        ".deleted": {
          color: "#ff8383 !important",
          fontStyle: "normal !important",
        },
        ".inserted": {
          color: "#b5f4a5 !important",
          fontStyle: "normal !important",
        },
        WebkitTapHighlightColor: "transparent",
      },
      a: {
        transition: "color 0.15s",
        transitionTimingFunction: "ease-out",
        fontWeight: "500",
        _hover: {
          color: mode("accent.600", "accent.300")(props),
        },
      },
    }),
  },
  components: {
    Popover: {
      parts: ["popper"],
      baseStyle: (props: any) => ({
        popper: {
          zIndex: 10,
          maxW: "xs",
          // maxW: props.width ? props.width : 'xs',
          w: props.width,
        },
      }),
    },
    Button: {
      baseStyle: {
        fontWeight: "500",
        rounded: "xl",
      },
    },
    Tag: {
      baseStyle: {
        rounded: "lg",
      },
    },
    textarea: {
      baseStyle: {
        background: "green.300",
      },
    },
    Link: {
      baseStyle: {
        fontWeight: "inherit",
        _hover: {
          textDecoration: "none",
        },
        _focus: {
          boxShadow: "none",
        },
      },
      variants: {
        text: {
          color: "accent.400",
          transition: "color 0.15s",
          transitionTimingFunction: "ease-out",
          fontWeight: "500",
          _hover: {
            color: "accent.300",
          },
        },
        gradient: {
          bgGradient: "linear(to-br, accent.400,accent.300)",
          bgClip: "text",
          fontWeight: "500",
          _hover: {
            bgGradient: "linear(to-br, accent.500,accent.300)",
            bgClip: "text",
          },
        },
      },
    },
  },
  mdx: {
    h1: {
      mt: "2rem",
      mb: ".25rem",
      lineHeight: 1.2,
      fontWeight: "bold",
      fontSize: "1.875rem",
      letterSpacing: "-.025em",
    },
    h2: {
      mt: "4rem",
      mb: "0.5rem",
      lineHeight: 1.3,
      fontWeight: "semibold",
      fontSize: "1.5rem",
      "& + h3": {
        mt: "1.5rem",
      },
    },
    h3: {
      mt: "3rem",
      // mb: "0.5rem",
      lineHeight: 1.25,
      fontWeight: "semibold",
      fontSize: "1.25rem",
    },
    h4: {
      mt: "3rem",
      lineHeight: 1.375,
      fontWeight: "semibold",
      fontSize: "1.125rem",
    },
    p: {
      mt: "1.25rem",
      lineHeight: 1.7,
      "blockquote &": {
        mt: 0,
      },
    },
    hr: {
      my: "4rem",
    },
    blockquote: {
      bg: "orange.100",
      borderWidth: "1px",
      borderColor: "orange.200",
      rounded: "lg",
      px: "1.25rem",
      py: "1rem",
      my: "1.5rem",
    },
    ul: {
      mt: "1.5rem",
      ml: "1.25rem",
      "blockquote &": { mt: 0 },
      "& > * + *": {
        mt: "0.25rem",
      },
    },
    code: {
      rounded: "sm",
      px: "1",
      fontSize: "0.875em",
      py: "2px",
      whiteSpace: "nowrap",
      lineHeight: "normal",
    },
  },
});

export const getTagColor = (type: string) => {
  type = type.toLowerCase();
  if (type === "react" || type === "react-native" || type === "python") {
    return "cyan";
  } else if (type === "javascript") {
    return "yellow";
  } else if (type === "typescript") {
    return "blue";
  } else if (type === "next.js") {
    return "gray";
  } else if (type === "node.js") {
    return "green";
  } else {
    return "accent";
  }
};

export const theme = makeTheme();
