import { useRouter } from "next/router";
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useLinkColor } from "styles/index";
import ColorModeSwitcher from "components/ui/color-mode-switcher";
import AccentPicker from "components/ui/accent-picker/accent-picker";
import { NavigationLink } from "./navigation-link";

const webLinks = [
  { name: "Home", path: "/" },
  { name: "Career", path: "/career" },
  { name: "Skills", path: "/tech-stack" },
  { name: "Open Source", path: "/open-source" },
  { name: "Achievements", path: "/achievements" },
];

export default function TopNavigation() {
  const linkColor = useLinkColor();
  const router = useRouter();
  const { onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue("gray.200", "#000000"),
    color: useColorModeValue("accent.500", "accent.400"),
  };

  return (
    <Box
      bg={useColorModeValue("white", "#030303")}
      px={4}
      position="fixed"
      width="100%"
      zIndex="55"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        w={["90%", "85%", "80%"]}
        maxW={900}
        mx="auto"
      >
        <Box></Box>
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {webLinks.map((link, index) => (
            <NavigationLink
              key={index}
              name={link.name}
              path={link.path}
              onClose={onClose}
            />
          ))}
        </HStack>
        <Flex alignItems="center">
          <AccentPicker
            aria-label="Accent Color Picker"
            variant="ghost"
            zIndex={1}
            color={linkColor}
            mr={0}
          />
          <ColorModeSwitcher ml={0} justifySelf="flex-end" />
        </Flex>
      </Flex>
    </Box>
  );
}
