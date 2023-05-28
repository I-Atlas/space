import { useCallback, useEffect, useState } from "react";
import {
  HStack,
  Icon,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdCloud, MdDesignServices, MdDesktopMac } from "react-icons/md";
import SkillCard from "components/skills/skill-card";
import Section from "components/skills/section";
import Header from "components/layout/header";
import { MotionBox } from "styles/motion";
import { container, PageSlideFade } from "components/ui/page-transitions";
import { skills } from "data/skills";
import PageLayout from "../layouts/page";

interface TechStackProps {
  skills: Skill[];
}

export default function TechStack({ skills }: TechStackProps) {
  const [skillsList, setSkillsList] = useState<Skill[]>([]);

  useEffect(() => {
    setSkillsList(skills);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterSkills = useCallback(
    (tab: string) => {
      if (tab.length) {
        setSkillsList(skills.filter((skill) => skill.type === tab));
      } else {
        setSkillsList(skills);
      }
    },
    [skills]
  );

  return (
    <PageLayout
      title="Skills"
      keywords="node.js, nestjs, express, react-native, react, javascript, typescript"
    >
      <PageSlideFade>
        <VStack spacing={8}>
          <Section>
            <VStack>
              <Header mt={0} mb={1}>
                Tech Stack
              </Header>
              <Text
                fontSize={"xl"}
                color={useColorModeValue("gray.500", "gray.200")}
                maxW="lg"
                textAlign="center"
              >
                A list of my favorite tools and technologies that I use on a
                regular basis.
              </Text>
            </VStack>
          </Section>
          <Section>
            <Tabs
              variant="soft-rounded"
              colorScheme="blue"
              align="center"
              w="100%"
            >
              <TabList display="flex" flexWrap="wrap">
                <Tab
                  bg={useColorModeValue("white", "#030303")}
                  borderColor={useColorModeValue("gray.100", "#0a0a0a")}
                  color={useColorModeValue("gray.600", "gray.500")}
                  _selected={{
                    color: "green.800",
                    bg: "green.100",
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills("")}
                >
                  <HStack spacing={1}>
                    <Icon as={AiFillThunderbolt} />
                    <Text>All</Text>
                  </HStack>
                </Tab>
                <Tab
                  bg={useColorModeValue("white", "#030303")}
                  borderColor={useColorModeValue("gray.100", "#0a0a0a")}
                  color={useColorModeValue("gray.500", "gray.500")}
                  _selected={{
                    color: useColorModeValue("white", "#030303"),
                    bg: useColorModeValue("#000000", "gray.100"),
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills("development")}
                >
                  <HStack spacing={1}>
                    <Icon as={MdDesktopMac} />
                    <Text>Development</Text>
                  </HStack>
                </Tab>
                <Tab
                  bg={useColorModeValue("white", "#030303")}
                  borderColor={useColorModeValue("gray.100", "#0a0a0a")}
                  color={useColorModeValue("gray.600", "gray.500")}
                  _selected={{
                    color: "green.800",
                    bg: "green.100",
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills("design")}
                >
                  <HStack spacing={1}>
                    <Icon as={MdDesignServices} />
                    <Text>Web Design</Text>
                  </HStack>
                </Tab>
                <Tab
                  bg={useColorModeValue("white", "#030303")}
                  borderColor={useColorModeValue("gray.100", "#0a0a0a")}
                  color={useColorModeValue("gray.600", "gray.500")}
                  _selected={{
                    color: "red.800",
                    bg: "red.100",
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills("devops")}
                >
                  <HStack spacing={1}>
                    <Icon as={MdCloud} />
                    <Text>Devops</Text>
                  </HStack>
                </Tab>
              </TabList>
              <MotionBox
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {skillsList.map((tool, index) => (
                    <SkillCard
                      key={index}
                      name={tool.name}
                      description={tool.description}
                      image={tool.image}
                      link={tool.link}
                      lightVibrant={tool.lightVibrant}
                    />
                  ))}
                </SimpleGrid>
              </MotionBox>
            </Tabs>
          </Section>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
}

export function getStaticProps() {
    return {
        props: {
            skills,
        },
    };
}
