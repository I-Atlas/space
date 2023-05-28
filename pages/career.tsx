import { Flex, Heading, useColorMode, VStack } from "@chakra-ui/react";
import { PageSlideFade, StaggerChildren } from "components/ui/page-transitions";
import { MotionBox } from "styles/motion";
import { companies } from "data/companies";
import { institutes } from "data/institutes";
import Header from "components/layout/header";
import PageLayout from "layouts/page";
import Card from "components/layout/card";
import { TURQUOISE } from "config/constants";
import AboutImage from "public/assets/images/screenshots/about.png";

interface AboutProps {
  companies: Company[];
  institutes: Institute[];
}

export default function Career({ companies, institutes }: AboutProps) {
  const { colorMode } = useColorMode();

  return (
    <PageLayout
      image={AboutImage.src}
      title="Career"
      description="My educational and professional journey so far"
    >
      <PageSlideFade>
        <StaggerChildren>
          <MotionBox>
            <Heading>
              <Flex alignItems="center">
                <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                  Career
                </Header>
              </Flex>
            </Heading>
          </MotionBox>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {companies.map((company, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  period={company.period}
                  logo={company.logo}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
          <Heading>
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Education
              </Header>
            </Flex>
          </Heading>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {institutes.map((institute, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  logo={institute.logo}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      companies,
      institutes,
    },
  };
}
