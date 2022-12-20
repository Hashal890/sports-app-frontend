import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      top={0}
      position={"sticky"}
      zIndex={5000000}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link to={"/"}>Sports App</Link>
        <HStack gap={3}>
          <Link to={"/"}>Home</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/list"}>Events List</Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
