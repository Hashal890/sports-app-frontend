import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { PaginationInput } from "../Interfaces/EventList.interfaces";

const Pagination = ({ page, totalPages, setPage }: PaginationInput) => {
  return (
    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        colorScheme={"pink"}
      >
        Prev
      </Button>
      <Text>{page}</Text>
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        colorScheme={"teal"}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
