import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginInitState } from "../Assets/data";
import { loginUser } from "../Store/auth/auth.actions";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [details, setDetails] = useState(LoginInitState);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuth, data }: any = useSelector(
    (store: any) => store.auth
  );

  const onChange = (e: any) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  const onSubmit = async (e: any) => {
    if (details.username === "" || details.password === "") {
      toast({
        title: "Details missing.",
        description:
          "Please fill all required data. Mandatory data is username and password.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "left-accent",
      });
    } else {
      try {
        await dispatch<any>(
          loginUser({ ...details, password: Number(details.password) })
        );
        toast({
          title: "Login successful.",
          description: "You are logged in to your account.",
          status: "success",
          duration: 5000,
          isClosable: true,
          variant: "left-accent",
          position: "bottom-right",
        });
        setDetails(LoginInitState);
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
    if (isAuth) {
      // navigate("/");
      // const {username, password} = await Ver
      // dispatch(loginUser(id));
    }
  }, []);

  return (
    <>
      {loading && (
        <Heading mb={6} color={"green.500"}>
          Loading...
        </Heading>
      )}
      {error && (
        <Heading mb={6} color={"red.500"}>
          Something went wrong...
        </Heading>
      )}
      <Flex justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack spacing={8} w={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color={"green.700"}>
              Log In
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="username"
                  onChange={onChange}
                  value={details.username}
                />
              </FormControl>
              <br />
              <FormControl id="password" isRequired>
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
              <br />
              <br />
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onSubmit}
              >
                Log in
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
