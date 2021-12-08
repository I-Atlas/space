import type { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import Footer from "components/layout/footer";
import TopNavigation from "components/layout/navigation/top-navigation";
import BottomNavigation from "components/layout/navigation/bottom-navigation";

export default function AppLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <TopNavigation />
      <Box
        textAlign="center"
        fontSize="xl"
        w={["90%", "85%", "80%"]}
        maxW={900}
        mx="auto"
      >
        <Box pt="7rem" pb={10}>
          {children}
        </Box>
      </Box>
      <BottomNavigation />
      <Footer />
    </>
  );
}
