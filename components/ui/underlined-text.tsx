import { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  color: string;
  h?: string;
  zIndex?: number;
}
export default function UnderlinedText({
  children,
  h,
}: PropsWithChildren<Props>) {
  return (
    <Box as="span" display="inline-block" position="relative">
      {children}
      <Box
        as="span"
        display="block"
        position="absolute"
        bg={"gray.200"}
        w={"100%"}
        h={h || "1px"}
        bottom={-2}
      />
    </Box>
  );
}
