import React from "react";
import { Order, useLaunchesInfoQuery } from "../../generated/graphql";
import LaunchesInfoList from "./LaunchesInfoList";

interface Props {
  limit: number;
  sort: string;
  order: Order;
}

const LaunchesList = ({ limit, sort, order }: Props) => {
  const { data, error, loading, fetchMore } = useLaunchesInfoQuery({
    variables: { limit, sort, order },
  });

  if (loading) return <h2 className="text-center mt-4">Loading</h2>;

  if (error || !data) return <h1 className="text-center mt-4">Error</h1>;

  return (
    <div className="container text-center mt-4">
      <LaunchesInfoList
        data={data}
        fetchMore={fetchMore}
        limit={limit}
        sort={sort}
        order={order}
      />
    </div>
  );
};

export default LaunchesList;
