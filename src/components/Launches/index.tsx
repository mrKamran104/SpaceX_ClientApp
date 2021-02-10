import React from "react";
import { useLaunchesInfoQuery } from "../../generated/graphql";
import LaunchesInfoList from "./LaunchesInfoList";
import { OwnProps } from "./LaunchesInfoList";

enum Order {
  asc = "asc",
  desc = "desc",
}

const LaunchesList = (props: OwnProps) => {
  const { data, error, loading } = useLaunchesInfoQuery({
    variables: { limit: 10, sort: "flight_number", order: Order.desc },
  });

  if (loading) return <h2>Loading</h2>;

  if (error || !data) return <h1>Error</h1>;

  return <LaunchesInfoList data={data} {...props} />;
};

export default LaunchesList;
