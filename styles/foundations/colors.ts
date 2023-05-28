import { ThemeOverride, useColorModeValue, theme as defaultTheme } from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'

export const linkColors = {
  light: 'accent.500',
  dark: 'accent.400',
  visitedLight: 'accent.300',
  visitedDark: 'accent.600'
}

export function useLinkColor() {
  return useColorModeValue(linkColors.light, linkColors.dark)
}

export function useVisitedLinkColor() {
  return useColorModeValue(linkColors.visitedLight, linkColors.visitedDark)
}

export function getTagBackgroundDark(
  accentKey: ColorKeys,
  theme: ThemeOverride
) {
  return accentKey && transparentize((theme.colors as any)[accentKey][200], 0.1)(theme)
}

export const colors = {
  ...defaultTheme.colors,
  gray: {
    ...defaultTheme.colors.gray,
    1000: '#121721'
  },
  accent: {
    // See src/components/Accent.tsx for CSS variable definition
    50: 'var(--colors-accent-50)',
    100: 'var(--colors-accent-100)',
    200: 'var(--colors-accent-200)',
    300: 'var(--colors-accent-300)',
    400: 'var(--colors-accent-400)',
    500: 'var(--colors-accent-500)',
    600: 'var(--colors-accent-600)',
    700: 'var(--colors-accent-700)',
    800: 'var(--colors-accent-800)',
    900: 'var(--colors-accent-900)'
  }
}

export type ColorKeys = keyof typeof colors

export const accentKeys: ColorKeys[] = [
  'green',
  'cyan',
  'orange',
  'blue',
  'pink',
  'teal',
  'purple',
  'red'
]
