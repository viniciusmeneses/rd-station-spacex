import { Button, ButtonProps } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchButton = (props: ButtonProps) => (
  <Button
    leftIcon={<SearchIcon />}
    colorScheme="blue"
    size="md"
    minW="120px"
    {...props}
  />
);
