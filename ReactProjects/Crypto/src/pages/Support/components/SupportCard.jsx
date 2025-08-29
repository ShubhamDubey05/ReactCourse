// SupportCard.jsx
import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={8}
      justify="space-between"
      align="flex-start"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      {/* Left Section (Icon + Title + Text) */}
      <Stack maxW="22rem" spacing={3}>
        <Icon as={icon} boxSize={8} color="purple.500" />
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {text}
        </Text>
      </Stack>

      {/* Right Section (Form / Info Card) */}
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
