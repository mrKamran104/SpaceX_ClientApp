import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import LaunchInfoList from "./LaunchInfoList";

const Launch = ({ id }: { id: string }) => {
  const { data, error, loading, refetch } = useLaunchInfoQuery({
    variables: { id },
  });

  React.useEffect(() => {
    refetch();
  }, [id]);

  if (loading) return <h2>Loading</h2>;

  if (error || !data) return <h1>Error</h1>;

  return <LaunchInfoList data={data} />;
};

export default Launch;
