import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MyEventsInitialState } from "../Assets/data";

const MyEvents = () => {
  const [details, setDetails] = useState(MyEventsInitialState);
  const toast = useToast();

  const onChange = (e: any) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    try {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
        variant: "left-accent",
        position: "bottom-right",
      });
      setDetails(MyEventsInitialState);
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
  };

  return (
    <Box textAlign={"center"} mt={6}>
      <Heading as={"h4"}>Add new event</Heading>
      <form
        style={{
          maxWidth: "400px",
          margin: "auto",
          marginTop: "30px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          borderRadius: "20px"
        }}
        onSubmit={onSubmit}
      >
        <FormControl isRequired mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            onChange={onChange}
            value={details.title}
            required
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="desc"
            onChange={onChange}
            value={details.desc}
            required
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Date</FormLabel>
          <Input
            type={"date"}
            name="date"
            onChange={onChange}
            value={details.date}
            required
          />
        </FormControl>
        <FormControl isRequired mb={6}>
          <FormLabel>Limit</FormLabel>
          <Input
            name="limit"
            type={"number"}
            onChange={onChange}
            value={details.limit}
            required
          />
        </FormControl>
        <Input type={"submit"} cursor={"pointer"} bg={"green.500"} />
      </form>
    </Box>
  );
};

export default MyEvents;
