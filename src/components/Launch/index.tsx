import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import LaunchInfoList from "./LaunchInfoList";
import { useParams } from "react-router-dom";

const Launch = () => {
  const { id } = useParams();
  const { data, error, loading, refetch } = useLaunchInfoQuery({
    variables: { id },
  });

  React.useEffect(() => {
    refetch();
  }, [id]);

  if (loading) return <h2 className="text-center mt-4">Loading</h2>;

  if (error || !data) return <h1 className="text-center mt-4">Error</h1>;

  return (
    <div className="container text-center mt-4">
      <LaunchInfoList data={data} id={id} />
    </div>
  );
};

export default Launch;
