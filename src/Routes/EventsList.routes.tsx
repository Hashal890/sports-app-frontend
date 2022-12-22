import React, { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../Store/event/event.actions";
import EventCard from "../Components/EventCard";
import Pagination from "../Components/Pagination";

const EventsList = () => {
  const { loading, error, data, totalPages } = useSelector(
    (store: any) => store.event
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    dispatch<any>(getEvents(page, limit));
  }, [page, limit]);

  return (
    <Box mt={6} textAlign={"center"}>
      <Heading mb={6}>Events List</Heading>
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
      <SimpleGrid columns={[1, 1, 2, 2]}>
        {data && data.map((el: any) => <EventCard key={el._id} {...el} />)}
      </SimpleGrid>
      {data.length > 0 && (
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      )}
    </Box>
  );
};

export default EventsList;
