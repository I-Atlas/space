import {
  Box,
  BoxProps,
  Circle,
  Flex,
  useColorModeValue,
  Avatar,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import NextLink from "next/link";
import { useState } from "react";

interface TimelineItemProps extends BoxProps {
  link: string;
  boxProps?: BoxProps;
  skipTrail?: boolean;
}

export default function GithubItem({
  link,
  boxProps = {},
  skipTrail = false,
  children,
  ...props
}: TimelineItemProps) {
  const [emoji, setEmoji] = useState("NO");
  return (
      <Tr>
        <Td>
          <a
            onClick={() => setEmoji("YES")}
            style={{ cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
            href={link}
          >
            {children}
          </a>
        </Td>
        <Td>{emoji}</Td>
      </Tr>
  );
}
