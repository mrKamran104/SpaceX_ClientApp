// import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";

interface Props {
  data: LaunchInfoQuery;
}

const LaunchInfoList = ({ data }: Props) => {
  console.log(data);

  return (
    <div>
      <h1>LaunchInfoList</h1>
    </div>
  );
};

export default LaunchInfoList;
