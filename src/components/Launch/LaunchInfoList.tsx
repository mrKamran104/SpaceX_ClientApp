import { LaunchInfoQuery } from "../../generated/graphql";

interface Props {
  data: LaunchInfoQuery;
  id: string;
}

const LaunchInfoList = ({ data, id }: Props) => {
  // console.log("Data", data);

  if (!data.launch) {
    return (
      <div>
        <h2>Mission: Not Found</h2>
        <p>or no data is available at this time</p>
      </div>
    );
  }

  return (
    <div>
      <h5>Mission Name: {data.launch.mission_name}</h5>
      <h5>Flight Number: {id}</h5>
      <p className="mr-2">
        {data.launch.launch_success
          ? "Success: true"
          : data.launch.launch_success === null
          ? "Upcoming: true"
          : "Success: false"}
      </p>
      <div>
        <h4>Mission Details</h4>
        <p className="text-wrap text-justify">{data.launch.details}</p>
      </div>
      {/* <img src={data.launch.links.flickr_images} alt={data.launch.mission_name} /> */}
    </div>
  );
};

export default LaunchInfoList;
