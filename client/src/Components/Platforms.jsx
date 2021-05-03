import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_PLATFORMS, LOAD_USERS } from "../GraphQL/Queries";

export default () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    if (data && data.platform) {
      setPlatforms(data.platform);
      console.log(data.platform);
    }
  }, [data]);

  return (
    <div>
      {platforms &&
        platforms.map((plat) => {
          return <h3>{plat.name}</h3>;
        })}
    </div>
  );
};
