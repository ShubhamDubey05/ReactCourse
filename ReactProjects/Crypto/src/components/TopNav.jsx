import {
  Box,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box
      px="4"
      bg="white"
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow="sm"
    >
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        {/* Sidebar toggle icon for mobile */}
        <Icon
          as={FaBars}
          onClick={onOpen}
          fontSize="20px"
          cursor="pointer"
          display={{
            base: "block",
            lg: "none",
          }}
        />

        {/* Page Title */}
        <Heading fontWeight="semibold" fontSize="22px" color="gray.700">
          {title}
        </Heading>

        {/* User Menu */}
        <Menu>
          <MenuButton>
            <HStack spacing="2">
              <Avatar size="sm" name="User" bg="blue.500" color="white" />
              <Text
                display={{ base: "none", md: "block" }}
                fontSize="14px"
                fontWeight="medium"
                color="gray.600"
              >
                SHUBHAM DUBEY
              </Text>
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem _hover={{ bg: "gray.100" }}>Profile</MenuItem>
            <MenuItem _hover={{ bg: "gray.100" }}>Support</MenuItem>
            <MenuItem _hover={{ bg: "gray.100", color: "red.500" }}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
