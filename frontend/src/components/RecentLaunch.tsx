import {
  CircularProgress,
  Flex,
  Heading,
  HStack,
  StackProps,
} from "@chakra-ui/react";
import { LaunchCard } from ".";
import { Launch } from "../types";

type RecentLaunchProps = StackProps & {
  label: string;
  launch?: Launch;
  isLoading: boolean;
};

export const RecentLaunch = ({
  label,
  launch,
  isLoading,
  ...props
}: RecentLaunchProps) => {
  if (isLoading)
    return (
      <Flex w="full" justifyContent="center" alignItems="center" h="100px">
        <CircularProgress isIndeterminate />
      </Flex>
    );

  if (!launch) return null;

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
