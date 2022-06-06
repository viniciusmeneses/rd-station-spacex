import { Heading, HStack } from "@chakra-ui/react";

export const RecentLaunch = () => (
  <HStack>
    <Heading
      fontSize="md"
      color="blue.500"
      sx={{
        textOrientation: "upright",
        writingMode: "vertical-rl",
      }}
    >
      LAST
    </Heading>
    {/* <LaunchCard/> */}
  </HStack>
);
