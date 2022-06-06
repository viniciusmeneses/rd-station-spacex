import {
  Box,
  Container,
  Heading,
  HStack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { RecentLaunch } from "./components";
import { SearchButton } from "./components/SearchButton";

enum Search {
  OnlyPrevious,
  OnlyUpcoming,
}

export const App = () => {
  const [search, setSearch] = useState(Search.OnlyPrevious);

  return (
    <Box minH="100vh" bgColor="gray.50">
      <Container>
        <VStack pt={5} spacing={5} divider={<StackDivider />}>
          <Heading fontSize="3xl">SpaceX Launches</Heading>

          <VStack spacing={5}>
            <RecentLaunch />
            <RecentLaunch />
          </VStack>

          <HStack spacing={3}>
            <SearchButton
              onClick={() => setSearch(Search.OnlyPrevious)}
              variant={search === Search.OnlyPrevious ? "solid" : "outline"}
            >
              Previous
            </SearchButton>

            <SearchButton
              onClick={() => setSearch(Search.OnlyUpcoming)}
              variant={search === Search.OnlyUpcoming ? "solid" : "outline"}
            >
              Upcoming
            </SearchButton>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
