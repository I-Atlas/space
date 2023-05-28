import { useState } from "react";
import {
  HStack,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { RiSignalTowerLine, RiWifiOffLine } from "react-icons/ri";
import useSound from "use-sound";
import Header from "components/layout/header";
import OfflineData from "components/open-source/offline-data";
import LiveData from "components/open-source/live-data";
import PageLayout from "layouts/page";
import { PageSlideFade } from "components/ui/page-transitions";
import { repositories } from "data/repositories";
import { TURQUOISE } from "config/constants";

const iconProps = {
  variant: "ghost",
  size: "md",
  isRound: true,
};

interface RepositoriesListProps {
  repositories: Repository[];
}

export default function RepositoriesList({
  repositories,
}: RepositoriesListProps) {
  const [activeTab, setActiveTab] = useState("live");

  const [play] = useSound("/assets/audios/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = (tab: string) => {
    activeTab === "live" ? play({ id: "on" }) : play({ id: "off" });
    setActiveTab(tab);
  };

  return (
    <PageLayout title="Open-source" keywords="A list of open source projects">
      <PageSlideFade>
        <VStack align="start" spacing={3}>
          <HStack justifyContent="space-between" width="100%">
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Open Source
            </Header>
            <HStack>
              <Tooltip hasArrow label="Live github repos" placement="top">
                <IconButton
                  aria-label="live"
                  colorScheme="linkedin"
                  icon={<RiSignalTowerLine />}
                  isActive={activeTab === "live"}
                  onClick={() => handleClick("live")}
                  {...iconProps}
                />
              </Tooltip>
              <Tooltip hasArrow label="Local github repos" placement="top">
                <IconButton
                  aria-label="live"
                  colorScheme="linkedin"
                  icon={<RiWifiOffLine />}
                  isActive={activeTab === "offline"}
                  onClick={() => handleClick("offline")}
                  {...iconProps}
                />
              </Tooltip>
            </HStack>
          </HStack>
          <Text
            color={useColorModeValue("gray.500", "gray.200")}
            textAlign="left"
          >
            This page lists some of the open source repositories I have
            published or contributed to.
          </Text>
        </VStack>
        {activeTab === "live" ? (
          <LiveData />
        ) : (
          <OfflineData repositories={repositories} />
        )}
      </PageSlideFade>
    </PageLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      repositories,
    },
  };
}
