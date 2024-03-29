import {
  Box,
  Flex,
  HStack,
  Icon,
  Tag,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MotionBox } from "styles/motion";
import { getTagColor, useLinkColor } from "styles/theme";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

interface RepositoryCardProps {
  title: string;
  description: string;
  url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export default function RepositoryCard({
  title,
  description,
  language,
  url,
  stargazers_count,
  forks_count,
}: RepositoryCardProps) {
  const linkColor = useLinkColor();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    link: string
  ) => {
    window.open(link);
    e.stopPropagation();
  };

  return (
    <MotionBox whileHover={{ y: -5 }}>
      <Box
        width="100%"
        py={2}
        px={[2, 4]}
        mt={2}
        rounded="xl"
        borderWidth="1px"
        bg={useColorModeValue("white", "black.800")}
        borderColor={useColorModeValue("gray.100", "#0a0a0a")}
        _hover={{
          shadow: "lg",
          textDecoration: "none",
        }}
      >
        <VStack overflow="hidden" align="start" spacing={1}>
          <VStack spacing={1} align="start" w="100%">
            <Flex
              justifyContent="space-between"
              width="100%"
              onClick={(e) => handleLinkClick(e, url)}
            >
              <Tooltip hasArrow label="Github link" placement="top">
                <HStack cursor="pointer">
                  <Icon as={FiGithub} boxSize="0.9em" mt="1px" />
                  <Text
                    fontSize="sm"
                    noOfLines={1}
                    fontWeight="600"
                    align="left"
                    color={linkColor}
                  >
                    {title}
                  </Text>
                </HStack>
              </Tooltip>
              <HStack cursor="pointer" onClick={(e) => handleLinkClick(e, url)}>
                {forks_count && (
                  <Box _hover={{ color: "accent.300" }}>
                    <Icon as={BiGitRepoForked} boxSize="0.9em" mt="1px" />
                    <Box as="span" ml="1" fontSize="sm">
                      {forks_count}
                    </Box>
                  </Box>
                )}
                <Box _hover={{ color: "accent.300" }}>
                  <Icon as={BiStar} boxSize="0.9em" mt="1px" />
                  <Box as="span" ml="1" fontSize="sm">
                    {stargazers_count}
                  </Box>
                </Box>
              </HStack>
            </Flex>
            {language && (
              <Flex justifyContent="space-between" width="100%">
                <Box>
                  <HStack spacing="1">
                    <Tag size="sm" colorScheme={getTagColor(language)}>
                      <Text fontSize={["0.55rem", "inherit", "inherit"]}>
                        {language}
                      </Text>
                    </Tag>
                  </HStack>
                </Box>
              </Flex>
            )}
          </VStack>
          <Box>
            <Text color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
              {description}
            </Text>
          </Box>
        </VStack>
      </Box>
    </MotionBox>
  );
}
