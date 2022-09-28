import { useState } from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLinkColor } from "components/ui/theme";
import TagItem from "components/ui/tag/tag-item";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  blurHash: string;
  link: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  logo,
  blurHash,
  link,
  technologies,
}: ProjectCardProps) {
  const linkColor = useLinkColor();
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <HStack
        p={4}
        bg={useColorModeValue("white", "#030303")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "#0a0a0a")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "lg" }}
      >
        <Image
          src={logo}
          width={33}
          height={33}
          rounded="md"
          alt="project-card"
        />
        <VStack align="start" justify="flex-start">
          <VStack spacing={0} align="start">
            <motion.div layout>
              <HStack>
                <Text
                  as={Link}
                  href={link}
                  fontWeight="bold"
                  fontSize="md"
                  noOfLines={1}
                  onClick={(e) => e.stopPropagation()}
                  color={linkColor}
                  isExternal
                >
                  {title}
                </Text>
                <HStack spacing="1">
                  {technologies.map((tech, index) => (
                    <TagItem
                      display={["none", "inline-flex", "inline-flex"]}
                      key={index}
                      name={tech}
                      mt="1px"
                      interactive={false}
                      mr="auto"
                    />
                  ))}
                </HStack>
              </HStack>
            </motion.div>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                {!isOpen && (
                  <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {isOpen && (
                  <Text fontSize="sm" color={textColor}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
}
