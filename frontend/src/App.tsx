import {
  Box,
  Container,
  Heading,
  HeadingProps,
  HStack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { LaunchPeriod, useLaunches, useRecentLaunch } from "./api";

import { LaunchCard, SearchButton } from "./components";

const VerticalHeading = (props: HeadingProps) => (
  <Heading
    fontSize="md"
    color="blue.500"
    sx={{
      textOrientation: "upright",
      writingMode: "vertical-rl",
    }}
    {...props}
  />
);

export const App = () => {
  const [search, setSearch] = useState<LaunchPeriod>(LaunchPeriod.Previous);

  const { data: lastLaunch } = useRecentLaunch(LaunchPeriod.Previous);
  const { data: nextLaunch } = useRecentLaunch(LaunchPeriod.Upcoming);

  const { data: launches } = useLaunches(search);

  return (
    <Box minH="100vh" bgColor="gray.50">
      <Container>
        <VStack pt={5} spacing={5} divider={<StackDivider />}>
          <Heading fontSize="3xl">SpaceX Launches</Heading>

          <VStack spacing={5} w="full">
            <HStack w="full">
              <VerticalHeading>LAST</VerticalHeading>
              {lastLaunch && <LaunchCard launch={lastLaunch} />}
            </HStack>

            <HStack w="full">
              <VerticalHeading>NEXT</VerticalHeading>
              {nextLaunch && <LaunchCard launch={nextLaunch} />}
            </HStack>
          </VStack>

          <VStack spacing={5} w="full">
            <HStack spacing={3}>
              <SearchButton
                onClick={() => setSearch(LaunchPeriod.Previous)}
                variant={search === LaunchPeriod.Previous ? "solid" : "outline"}
              >
                Previous
              </SearchButton>

              <SearchButton
                onClick={() => setSearch(LaunchPeriod.Upcoming)}
                variant={search === LaunchPeriod.Upcoming ? "solid" : "outline"}
              >
                Upcoming
              </SearchButton>
            </HStack>

            <VStack spacing={5} w="full" pb={5}>
              {launches?.map((launch) => (
                <LaunchCard key={launch.id} launch={launch} />
              ))}
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
