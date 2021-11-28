import { FiPackage, FiEdit2 } from "react-icons/fi";
import {
  VStack,
  Heading,
  Box,
  Avatar,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import TimelineItem from "./timeline-item";
import { PageSlideFade } from "components/ui/page-transitions";
import Header from "components/layout/header";
import InternalLink from "./internal-link";
import { useLinkColor } from "components/ui/theme";
import { useFetch } from "use-http";
import { useMemo, useState } from "react";
import GithubItem from "./github-item";

interface GithubData {
  avatar_url: string;
  id: number;
  login: string;
  node_id: string;
  html_url: string;
}

export default function GithubFollowers() {
  const [followersPagination, setFollowersPagination] = useState(1);
  const [followingPagination, setFollowingPagination] = useState(1);
  const [isShowData, setShowData] = useState(false);

  const { data: followers } = useFetch<GithubData[]>(
    `https://api.github.com/users/I-Atlas/followers?per_page=100&page=${followersPagination}`,
    {
      onNewData: (currTodos, newTodos) => [...currTodos, ...newTodos],
      data: [],
    },
    [followersPagination],
  );

  const { data: following } = useFetch<GithubData[]>(
    `https://api.github.com/users/I-Atlas/following?per_page=100&page=${followingPagination}`,
    {
      onNewData: (currTodos, newTodos) => [...currTodos, ...newTodos],
      data: [],
    },
    [followingPagination],
  );

  const isSameUser = (a: GithubData, b: GithubData) =>
    a.id == b.id && a.login == b.login;

  const onlyInLeft = (
    compareFunction: typeof isSameUser,
    left?: GithubData[],
    right?: GithubData[],
  ) =>
    left?.filter(
      (leftValue) =>
        !right?.some((rightValue) => compareFunction(leftValue, rightValue)),
    );

  const memoisedData = useMemo(() => {
    const difference = onlyInLeft(isSameUser, following, followers);
    return difference;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followers, following]);

  console.log(memoisedData?.length);

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Github Followers and Followings
        </Header>
      </Box>
      <Box>
        <Button
          onClick={() => setFollowersPagination(followersPagination + 1)}
          disabled={followersPagination === 3}
        >
          Followers Next Page ({followersPagination})
        </Button>
        <Button
          onClick={() => setFollowingPagination(followingPagination + 1)}
          disabled={followingPagination === 6}
        >
          Following Next Page ({followingPagination})
        </Button>
        <Button onClick={() => setShowData(!isShowData)}>
          {!isShowData ? "Show Data" : "Hide Data"}
        </Button>
      </Box>
      <Table variant="simple">
        <TableCaption>Users that I follow but do not follow me</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Checked</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isShowData &&
            memoisedData?.map((follower) => {
              return (
                <GithubItem key={follower.id} link={follower.html_url}>
                  {follower.login}
                </GithubItem>
              );
            })}
        </Tbody>
      </Table>
    </PageSlideFade>
  );
}
