import { InfoOutlineIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  StackProps,
} from "@chakra-ui/react";
import { Launch } from "../types";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);

export const LaunchCard = ({
  launch: { name, details, date, success, imageUrl, flightNumber },
  ...props
}: StackProps & { launch: Launch }) => {
  const parsedDate = new Date(date);

  return (
    <HStack
      p={5}
      spacing={4}
      alignItems="start"
      bgColor="white"
      shadow="sm"
      borderRadius="lg"
      borderWidth="1px"
      w="full"
      {...props}
    >
      <VStack spacing={1} alignItems="start" flex={1}>
        <Heading fontSize="lg">
          {name} #{flightNumber}
        </Heading>
        <Text fontSize="sm">{details}</Text>

        <HStack color="gray.500" fontSize="sm">
          <InfoOutlineIcon />
          <Text>{success ? "Launched" : "Failed"}</Text>
        </HStack>

        <HStack color="gray.500" fontSize="sm">
          <TimeIcon />
          <Text>{formatDate(parsedDate)}</Text>
        </HStack>
      </VStack>

      {imageUrl && <Image src={imageUrl} boxSize="100px" alignSelf="center" />}
    </HStack>
  );
};
