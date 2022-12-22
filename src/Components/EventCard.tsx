import React, { useState, useEffect } from "react";
import { Box, Button, Code, Flex, Text } from "@chakra-ui/react";
import axios from "axios";

const EventCard = ({
  title,
  desc,
  date,
  acceptedUsers,
  limit,
  createdBy,
}: any) => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    axios
      .get(`https://sports-app-backend.onrender.com/user/${createdBy}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Code colorScheme={"messenger"}>{title}</Code>
      <Text my={6}>Details: {desc}</Text>
      <Text>Date:- {date}</Text>
      {new Date("2022-12-25T07:00:51.000Z") >= new Date(Date.now()) ? (
        <Button colorScheme={"green"} my={6}>
          Register
        </Button>
      ) : (
        ""
      )}
      {new Date("2022-12-25T07:00:51.000Z") < new Date(Date.now()) ? (
        <Text color={"red.700"} my={6}>
          Event Expired
        </Text>
      ) : (
        ""
      )}
      <Code colorScheme={"whatsapp"}>Limit:- {limit}</Code>
      <Text my={6}>
        Created By: {user.fName + (user.lName ? user.lName : "")}
      </Text>
      {acceptedUsers && (
        <Flex gap={2}>
          {acceptedUsers.map((el: any, ind: any) => (
            <Text key={ind + 1}>{el} , </Text>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default EventCard;
