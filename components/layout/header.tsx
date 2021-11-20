import { Box, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import UnderlinedText from "components/ui/underlined-text";

interface Props extends BoxProps {
  underlineColor?: string;
  emoji?: string;
}

export default function Header({
  children,
  underlineColor,
  emoji,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Box
      as="h1"
      mt={10}
      mb={6}
      fontSize="3xl"
      lineHeight="shorter"
      fontWeight="bold"
      textAlign="left"
      {...props}
    >
      <UnderlinedText color={underlineColor ?? "#ff9400"}>
        {children}
      </UnderlinedText>
      {emoji ? " " + emoji : ""}
    </Box>
  );
}
