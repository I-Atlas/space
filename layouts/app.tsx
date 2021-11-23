import { PropsWithChildren, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Nav from "components/layout/nav";
import Footer from "components/layout/footer";

export default function AppLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Nav />
      <Box
        textAlign="center"
        fontSize="xl"
        w={["90%", "85%", "80%"]}
        maxW={800}
        mx="auto"
      >
        <Box pt={"7rem"} pb={10}>
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
