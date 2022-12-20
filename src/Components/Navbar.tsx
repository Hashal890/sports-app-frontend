import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../Assets/data";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack gap={3} display={{ base: "none", md: "flex" }}>
          {NavbarLinks.map((el) => (
            <Link to={el.link} key={el.id}>
              {el.name}
            </Link>
          ))}
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {NavbarLinks.map((el) => (
              <Link to={el.link} key={el.id}>
                {el.name}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
