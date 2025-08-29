// ContactCard.jsx
import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card p="8" borderRadius="xl" boxShadow="md">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm" color="gray.600">
          You will receive a response within 24 hours of submission.
        </Text>

        {/* Name & Surname */}
        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
          spacing={4}
        >
          <FormControl>
            <FormLabel fontSize="sm">Name</FormLabel>
            <Input placeholder="Enter your name" focusBorderColor="purple.400" />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="sm">Surname</FormLabel>
            <Input placeholder="Enter your surname" focusBorderColor="purple.400" />
          </FormControl>
        </HStack>

        {/* Email */}
        <FormControl>
          <FormLabel fontSize="sm">Email</FormLabel>
          <Input type="email" placeholder="Enter your email" focusBorderColor="purple.400" />
        </FormControl>

        {/* Message */}
        <FormControl>
          <FormLabel fontSize="sm">Message</FormLabel>
          <Textarea placeholder="Enter your message..." focusBorderColor="purple.400" />
        </FormControl>

        {/* Checkbox */}
        <Checkbox defaultChecked colorScheme="purple">
          <Text fontSize="xs" color="gray.600">
            I agree with
            <Box as="span" color="purple.500" fontWeight="semibold">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>

        {/* Buttons */}
        <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
          <Button colorScheme="purple" fontSize="sm" flex="1">
            Send Message
          </Button>
          <Button variant="outline" fontSize="sm" flex="1">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
