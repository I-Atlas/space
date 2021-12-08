import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Link,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { useLinkColor } from "components/ui/theme";
import ColorModeSwitcher from "components/ui/color-mode-switcher";
import AccentPicker from "components/ui/accent-picker/accent-picker";
import { NavigationLink } from "./navigation-link";
import { MenuLink } from "./menu-link";

const webLinks = [{ name: "About", path: "/about" }];

const dropdownLinks = [
  { name: "Tech Stack", path: "/tech-stack" },
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
        <HStack spacing={8} alignItems="center">
          <Box>
            <NextLink href="/" passHref>
              <Avatar
                as={Link}
                size="sm"
                src="https://avatars.githubusercontent.com/u/54947380?v=4"
              />
            </NextLink>
          </Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {webLinks.map((link, index) => (
              <NavigationLink
                key={index}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
            <Menu autoSelect={false} isLazy>
              {({ onClose }) => (
                <>
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    size="sm"
                    px={2}
                    py={1.5}
                    fontSize="1em"
                    rounded="md"
                    height="auto"
                    _hover={menuProps}
                    _expanded={menuProps}
                    _focus={{ boxShadow: "none" }}
                    rightIcon={<BiChevronDown size={18} />}
                  >
                    Links
                  </MenuButton>
                  <MenuList bg={menuProps.bg} zIndex={5}>
                    {dropdownLinks.map((link, index) => (
                      <MenuLink
                        key={index}
                        path={link.path}
                        name={link.name}
                        onClose={onClose}
                        color={menuProps.color}
                        bg={menuProps.bg}
                        rPath={router.pathname}
                      />
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
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
