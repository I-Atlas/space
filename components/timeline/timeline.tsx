import { VStack, Heading, Box } from "@chakra-ui/react";
import { FiCheck, FiStar, FiAward } from "react-icons/fi";
import { PageSlideFade } from "components/ui/page-transitions";
import { useLinkColor } from "components/ui/theme";
import Header from "components/layout/header";
import TimelineItem from "./timeline-item";
import InternalLink from "./internal-link";

export default function Timeline() {
  const linkColor = useLinkColor();

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FiStar}>
              With the Fitboard project passed the qualifiers and entered the
              top 100 projects of the HSE Fest
            </TimelineItem>
          </Box>
          <Box>
            <TimelineItem icon={FiAward} skipTrail>
              With my team Ødy won first place in Hackathon KTiIB
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiCheck}>
              Passed CCNA Certification
            </TimelineItem>
          </Box>
          <Box>
            <TimelineItem icon={FiStar} skipTrail>
              With the Minecord project entered the top 100 bots of{" "}
              <InternalLink
                color={linkColor}
                url="https://top.gg/"
                text={"top.gg"}
                target="_blank"
              />
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2019
          </Heading>
          <Box>
            <TimelineItem icon={FiCheck}>
              Passed Bioinformatics Institute Python Certification
            </TimelineItem>
          </Box>
          <Box>
            <TimelineItem icon={FiStar}>
              With the Discordtip project entered the trend bots of{" "}
              <InternalLink
                color={linkColor}
                url="https://top.gg/"
                text={"top.gg"}
                target="_blank"
              />{" "}
              several times and received a lot of positive feedback
            </TimelineItem>
          </Box>
          <Box>
            <TimelineItem icon={FiCheck}>
              Passed Cisco LPI Linux Essentials Professional Development (PDC)
              Certification
            </TimelineItem>
          </Box>
          <Box>
            <TimelineItem icon={FiAward} skipTrail>
              Won second place in RSUE 62nd Scientific Student Conference
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
}
