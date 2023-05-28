import { useRouter } from "next/router";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { IconLink } from "./icon-link";

const mobileLinks = [
  { name: "Home", path: "/" },
  { name: "Career", path: "/career" },
  { name: "Open Source", path: "/open-source" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Achievements", path: "/achievements" },
];

export default function BottomNavigation() {
  const router = useRouter();

  const menuProps = {
    bg: useColorModeValue("gray.200", "#000000"),
    color: useColorModeValue("accent.500", "accent.400"),
  };

  return (
    <Box
      bg={useColorModeValue("white", "#030303")}
      px={4}
      position="fixed"
      bottom={0}
      display={["block", "block", "none"]}
      width="100%"
      zIndex="55"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        w="95%"
        maxW={900}
        mx="auto"
      >
        {mobileLinks.map((link, index) => (
          <IconLink
            key={index}
            path={link.path}
            name={link.name}
            color={menuProps.color}
            rPath={router.pathname}
          />
        ))}
      </Flex>
    </Box>
  );
}
