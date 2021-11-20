import { Box } from "@chakra-ui/react";

export default function Container({ ...props }) {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      w={["90%", "85%", "80%"]}
      maxW={800}
      mx="auto"
      {...props}
    />
  );
}
