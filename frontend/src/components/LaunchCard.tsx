import { InfoOutlineIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  StackProps,
} from "@chakra-ui/react";
import { isAfter, parseISO } from "date-fns";
import { Launch } from "../types";
import { formatDate } from "../utils";

export const LaunchCard = ({
  launch: { name, details, date, success, image_url, flight_number },
  ...props
}: StackProps & { launch: Launch }) => {
  const parsedDate = parseISO(date);

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
          {name} #{flight_number}
        </Heading>
        <Text fontSize="sm">{details}</Text>

        <HStack color="gray.500" fontSize="sm">
          {success != null && isAfter(new Date(), parsedDate) && (
            <>
              <InfoOutlineIcon />
              <Text>{success ? "Launched" : "Failed"}</Text>
            </>
          )}
        </HStack>

        <HStack color="gray.500" fontSize="sm">
          <TimeIcon />
          <Text>{formatDate(parsedDate)}</Text>
        </HStack>
      </VStack>

      {image_url && <Image src={image_url} boxSize="75px" alignSelf="center" />}
    </HStack>
  );
};
