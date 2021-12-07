import type { VFC } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  Collapse,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsCheckCircle, BsBook } from "react-icons/bs";
import { useLinkColor } from "components/ui/theme";
import ColorModeSwitcher from "components/ui/color-mode-switcher";
import AccentPicker from "components/ui/accent-picker/accent-picker";

const webLinks = [{ name: "About", path: "/about" }];

const mobileLinks = [
  { name: "About", path: "/about" },
  { name: "Open Source", path: "/open-source" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Achievements", path: "/achievements" },
];

const dropdownLinks = [
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Open Source", path: "/open-source" },
  { name: "Achievements", path: "/achievements" },
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink: VFC<NavLinkProps> = ({ name, path, onClose }) => {
  const router = useRouter();
  const link = {
    bg: useColorModeValue("gray.200", "#000000"),
    color: useColorModeValue("accent.500", "accent.400"),
  };

  return (
    <NextLink href={path} passHref>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: link.bg,
        }}
        bg={router.pathname === path ? link.bg : "transparent"}
        color={router.pathname === path ? link.color : "inherit"}
        onClick={() => onClose()}
      >
        {name}
      </Link>
    </NextLink>
  );
};

interface MenuLinkProps {
  name: string;
  path: string;
  color: string;
  bg: string;
  rPath: string;
  onClose: () => void;
}

interface IconsObjProps {
  [key: string]: JSX.Element;
}

const MenuLink: VFC<MenuLinkProps> = ({
  name,
  path,
  color,
  bg,
  rPath,
  onClose,
}) => {
  const iconsObj: IconsObjProps = {
    "/tech-stack": <Icon as={AiTwotoneThunderbolt} size={18} color={color} />,
    "/open-source": <Icon as={BsBook} size={18} color={color} />,
    "/achievements": <Icon as={BsCheckCircle} size={18} color={color} />,
  };

  return (
    <NextLink href={path} passHref>
      <Link onClick={() => onClose()}>
        <MenuItem
          color={rPath === path ? color : undefined}
          bg={rPath === path ? bg : undefined}
        >
          <HStack>
            {iconsObj[path]}
            <Text>{name}</Text>
          </HStack>
        </MenuItem>
      </Link>
    </NextLink>
  );
};

export default function Nav() {
  const linkColor = useLinkColor();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue("gray.200", "#000000"),
    color: useColorModeValue("accent.500", "accent.400"),
  };

  return (
    <>
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
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <NextLink href="/" passHref>
                <Avatar
                  as={Link}
                  size="sm"
                  // border={router.pathname !== "/" ? "1px solid red" : undefined}
                  src="https://avatars.githubusercontent.com/u/54947380?v=4"
                />
              </NextLink>
            </Box>
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {webLinks.map((link, index) => (
                <NavLink
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

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
        >
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={900}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as="nav" spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  key={index}
                  index={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}
