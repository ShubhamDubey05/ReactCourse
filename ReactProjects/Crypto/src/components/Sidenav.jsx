import { Box, HStack, Heading, Icon, Stack, Text, Divider } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  const isActiveLink = (link) => location.pathname === link;

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
      p="4"
    >
      {/* Brand / Logo */}
      <Box textAlign="center" py="6">
        <Heading fontSize="lg" fontWeight="bold" color="#064375">
          🔐 Cryptography
        </Heading>
        <Text fontSize="xs" color="gray.500">
          Secure Dashboard
        </Text>
      </Box>

      <Divider my="2" />

      {/* Navigation */}
      <Box flex="1">
        {navLinks.map((nav) => (
          <Link to={nav.link} key={nav.text}>
            <HStack
              bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
              color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
              borderRadius="10px"
              py="3"
              px="4"
              mb="2"
              
              transition="all 0.2s"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
                transform: "translateX(4px)",
              }}
            >
              <Icon as={nav.icon} boxSize="18px" />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          </Link>
        ))}
      </Box>

      <Divider my="2" />

      {/* Support */}
      <Box>
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            transition="all 0.2s"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
              transform: "translateX(4px)",
            }}
          >
            <Icon as={MdOutlineSupportAgent} boxSize="18px" />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
