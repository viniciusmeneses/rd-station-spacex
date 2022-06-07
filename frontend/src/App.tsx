import {
  Box,
  CircularProgress,
  Container,
  Flex,
  Heading,
  HStack,
  StackDivider,
  StackProps,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { LaunchPeriod, useLaunches, useRecentLaunch } from "./api";

import { LaunchCard, SearchButton } from "./components";
import { Launch } from "./types";

type RecentLaunchProps = StackProps & {
  label: string;
  launch?: Launch;
  isLoading: boolean;
};

const RecentLaunch = ({
  label,
  launch,
  isLoading,
  ...props
}: RecentLaunchProps) => {
  if (isLoading || !launch) {
    return (
      <Flex w="full" justifyContent="center" alignItems="center" h="100px">
        <CircularProgress isIndeterminate />
      </Flex>
    );
  }

  return (
    <HStack w="full" {...props}>
      <Heading
        fontSize="md"
        color="blue.500"
        sx={{
          textOrientation: "upright",
          writingMode: "vertical-rl",
        }}
      >
        {label}
      </Heading>
      <LaunchCard launch={launch} />
    </HStack>
  );
};

export const App = () => {
  const [search, setSearch] = useState<LaunchPeriod>(LaunchPeriod.Previous);

  const { data: lastLaunch, isLoading: isLoadingLastLaunch } = useRecentLaunch(
    LaunchPeriod.Previous
  );

  const { data: nextLaunch, isLoading: isLoadingNextLaunch } = useRecentLaunch(
    LaunchPeriod.Upcoming
  );

  const { data: launches, isLoading: isLoadingLaunches } = useLaunches(search);

  return (
    <Box minH="100vh" bgColor="gray.50">
      <Container>
        <VStack pt={5} spacing={5} divider={<StackDivider />}>
          <Heading fontSize="3xl">SpaceX Launches</Heading>

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
