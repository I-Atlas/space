import NextLink from "next/link";
import {
  Box,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MotionBox } from "styles/motion";
import { item } from "../ui/page-transitions";
import { useLinkColor } from "styles/theme";

interface SkillCardProps {
  name: string;
  image: string;
  link: string;
  description: string;
  lightVibrant: string;
}

export default function SkillCard({
  name,
  image,
  link,
  description,
  lightVibrant,
}: SkillCardProps) {
  const linkColor = useLinkColor();
  // Removed usePalette beacause perfomance drops
  // const { data, loading } = usePalette(image);

  return (
    <MotionBox variants={item}>
      <MotionBox whileHover={{ y: -5 }}>
        <NextLink href={link} passHref>
          <Link isExternal>
            <HStack
              p={4}
              bg={useColorModeValue("white", "#030303")}
              borderColor={useColorModeValue("gray.100", "#0a0a0a")}
              rounded="xl"
              borderWidth="1px"
              w="100%"
              textAlign="left"
              align="start"
              spacing={4}
              _hover={{ shadow: "md" }}
            >
              <Box
                rounded="lg"
                p={2}
                position="relative"
                overflow="hidden"
                lineHeight={0}
                boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
              >
                <Box
                  bg={lightVibrant}
                  position="absolute"
                  top={0}
                  bottom={0}
                  left={0}
                  right={0}
                  opacity={0.25}
                ></Box>
                <Image
                  src={image}
                  height={26}
                  width={26}
                  rounded="md"
                  alt="skill"
                />
              </Box>
              <VStack
                align="start"
                justify="flex-start"
                spacing={1}
                maxW="lg"
                h="100%"
              >
                <VStack spacing={0} align="start" flexGrow={1}>
                  <Text
                    fontWeight="bold"
                    fontSize="md"
                    noOfLines={2}
                    color={linkColor}
                  >
                    {name}
                  </Text>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.500", "gray.200")}
                  >
                    {description}
                  </Text>
                </VStack>
              </VStack>
            </HStack>
          </Link>
        </NextLink>
      </MotionBox>
    </MotionBox>
  );
}
