import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_PLATFORMS, LOAD_USERS } from "../GraphQL/Queries";

export default () => {
  const { error, loading, data } = useQuery(LOAD_USERS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div></div>;
};
