import React from "react";
import { LaunchesInfoQuery } from "./../../generated/graphql";

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: LaunchesInfoQuery;
}

const LaunchesInfoList: React.FC<Props> = ({ data, handleIdChange }) => {
  console.log("Launches", data);

  return (
    <div>
      <h1>ADta</h1>
      <button onClick={() => handleIdChange(25)}>Click</button>
    </div>
  );
};

export default LaunchesInfoList;
