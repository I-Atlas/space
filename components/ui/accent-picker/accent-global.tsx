import { useMemo } from "react";
import { css, Global } from "@emotion/react";
import { useLocalSetting } from "hooks/use-local-setting";
import { theme, ColorKeys } from "components/ui/theme";
import { getTagBackgroundDark } from "components/ui/theme/foundations/colors";

export default function AccentGlobal() {
  const [accentKey] = useLocalSetting<ColorKeys>("accent", "red");
  const accent = theme.colors[accentKey];
  const styles = useMemo(
    () => css`
      :root {
        --colors-accent-50: ${accent[50]};
        --colors-accent-100: ${accent[100]};
        --colors-accent-200: ${accent[200]};
        --colors-accent-300: ${accent[300]};
        --colors-accent-400: ${accent[400]};
        --colors-accent-500: ${accent[500]};
        --colors-accent-600: ${accent[600]};
        --colors-accent-700: ${accent[700]};
        --colors-accent-800: ${accent[800]};
        --colors-accent-900: ${accent[900]};
        --colors-accent-tag-bg-dark: ${getTagBackgroundDark(accentKey, theme)};
      }
    `,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [accentKey],
  );
  return <Global styles={styles} />;
}
