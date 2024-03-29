import {
  Avatar,
  Badge,
  Box,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "components/layout/header";
import Projects from "components/projects/projects";
import { MotionBox, MotionFlex } from "styles/motion";
import { useLinkColor } from "styles/theme";
import { ANIMATION_DURATION, ORANGE } from "config/constants";
import NextLink from "next/link";

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  const linkColor = useLinkColor();

  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size="2xl"
            src="https://avatars.githubusercontent.com/u/54947380?v=4"
          />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0}>
            Hey!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{" "}
            <Box as="strong" fontWeight="600">
              Iliya
            </Box>{" "}
            and I&apos;m a{" "}
            <Box as="span" whiteSpace="nowrap">
              Software Engineer
            </Box>{" "}
            from{" "}
            <Box as="span" whiteSpace="nowrap">
              Russia 🇷🇺
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            This is my digital garden, where I write about the things I&apos;m
            working on and share what I&apos;ve learned. 😊
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor="#F3D448"
            color="whatsapp"
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#0a0a0a")}
            rounded="sm"
            fontSize="md"
          >
            <Text
              textAlign="center"
              color={useColorModeValue("yellow.800", "#F3D448")}
              fontWeight="bold"
            >
              Highlights
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
              <ListItem>
                <NextLink href="/achievements" passHref>
                  <Text color={linkColor}>
                    Achievements
                    <Badge ml="1" colorScheme="yellow">
                      New
                    </Badge>
                  </Text>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/open-source" passHref>
                  <Text color={linkColor}>Live/Local Github Repos</Text>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Projects projects={projects} />
        </Box>
      </MotionBox>
    </Flex>
  );
}
