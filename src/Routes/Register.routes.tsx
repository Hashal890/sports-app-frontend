import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { RegisterInitState } from "../Assets/data";
import { useDispatch } from "react-redux";
import { postUser } from "../Store/auth/auth.actions";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [details, setDetails] = useState(RegisterInitState);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e: any) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  const onSubmit = async (e: any) => {
    if (
      details.fName === "" ||
      details.username === "" ||
      details.password === ""
    ) {
      toast({
        title: "Details missing.",
        description:
          "Please fill all required data. Mandatory data is first name, username and password.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "left-accent",
      });
    } else {
      try {
        await dispatch<any>(postUser(details));
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
          variant: "left-accent",
          position: "bottom-right",
        });
        setDetails(RegisterInitState);
        navigate("/");
      } catch (error: any) {
        toast({
          title: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
          variant: "left-accent",
        });
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <Flex
      // minH={"100vh"}
      // align={"center"}
      // justify={"center"}
      mt={8}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} pt={0}>
        <Heading fontSize={"4xl"} textAlign={"center"} color={"green.700"}>
          Register
        </Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    onChange={onChange}
                    value={details.fName}
                    type="text"
                    name="fName"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    onChange={onChange}
                    value={details.lName}
                    type="text"
                    name="lName"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={onChange}
                value={details.username}
                type="username"
                name="username"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={onChange}
                  value={details.password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to={"/login"} color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
