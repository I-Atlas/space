import { FiPackage, FiEdit2 } from "react-icons/fi";
import { VStack, Heading, Box } from "@chakra-ui/react";
import TimelineItem from "./timeline-item";
import { PageSlideFade } from "components/ui/page-transitions";
import Header from "components/layout/header";
import InternalLink from "./internal-link";
import { useLinkColor } from "components/ui/theme";

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
            <TimelineItem icon={FiPackage}>
              Published or contributed to{" "}
              <InternalLink
                color={linkColor}
                url="/open-source"
                text={"9 open-source repositories"}
              />
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Wrote 5 blog posts</TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
}
