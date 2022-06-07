import {
  Box,
  CircularProgress,
  Container,
  Flex,
  Heading,
  HStack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { LaunchPeriod, useLaunches, useRecentLaunch } from "./api";

import { LaunchCard, RecentLaunch, SearchButton } from "./components";
import { useOptimizeExperiment } from "./lib/google-optimize";

enum PageVariant {
  Default = "0",
  Experiment = "1",
}

const usePageExperiment = () =>
  useOptimizeExperiment<PageVariant>(
    process.env.REACT_APP_OPTIMIZE_EXPERIMENT_ID ?? ""
  ) ?? PageVariant.Default;

export const App = () => {
  const [search, setSearch] = useState<LaunchPeriod>(LaunchPeriod.Previous);

  const { data: lastLaunch, isLoading: isLoadingLastLaunch } = useRecentLaunch(
    LaunchPeriod.Previous
  );

  const { data: nextLaunch, isLoading: isLoadingNextLaunch } = useRecentLaunch(
    LaunchPeriod.Upcoming
  );

  const { data: launches, isLoading: isLoadingLaunches } = useLaunches(search);

  const experiment = usePageExperiment();

  return (
    <Box
      minH="100vh"
      bgColor={experiment === PageVariant.Experiment ? "blue.100" : "gray.50"}
    >
      <Container>
        <VStack pt={5} spacing={5} divider={<StackDivider />}>
          <Heading fontSize="3xl">SpaceX Launches</Heading>

          {experiment === PageVariant.Default && (
            <VStack spacing={5} w="full">
              <RecentLaunch
                label="LAST"
                launch={lastLaunch}
                isLoading={isLoadingLastLaunch}
              />

              <RecentLaunch
                label="NEXT"
                launch={nextLaunch}
                isLoading={isLoadingNextLaunch}
              />
            </VStack>
          )}

          <VStack spacing={5} w="full">
            <HStack spacing={3}>
              <SearchButton
                onClick={() => setSearch(LaunchPeriod.Previous)}
                variant={search === LaunchPeriod.Previous ? "solid" : "outline"}
                disabled={isLoadingLaunches}
              >
                Previous
              </SearchButton>

              <SearchButton
                onClick={() => setSearch(LaunchPeriod.Upcoming)}
                variant={search === LaunchPeriod.Upcoming ? "solid" : "outline"}
                disabled={isLoadingLaunches}
              >
                Upcoming
              </SearchButton>
            </HStack>

            {isLoadingLaunches || launches?.length === 0 ? (
              <Flex
                w="full"
                justifyContent="center"
                alignItems="center"
                h="100px"
              >
                <CircularProgress isIndeterminate />
              </Flex>
            ) : (
              <VStack spacing={5} w="full" pb={5}>
                {launches?.map((launch) => (
                  <LaunchCard key={launch.id} launch={launch} />
                ))}
              </VStack>
            )}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
