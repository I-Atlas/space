import { Center } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import Container from "./container";

export default function Section({ children, ...props }: PropsWithChildren<{}>) {
  return (
    <Center as="section" {...props} w="100%">
      <Container>{children}</Container>
    </Center>
  );
}
