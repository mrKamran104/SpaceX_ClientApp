import React, { useState, useEffect } from "react";
import { LaunchesInfoQuery } from "./../../generated/graphql";
import { Link } from "react-router-dom";
import { Order } from "../../generated/graphql";

interface Props {
  data: LaunchesInfoQuery;
  fetchMore: any;
  limit: number;
  sort: string;
  order: Order;
}

const LaunchesInfoList: React.FC<Props> = ({
  data,
  fetchMore,
  limit,
  sort,
  order,
}) => {
  // console.log("Launches", data);
  const [state, setState] = useState(data);
  const [limits, setLimits] = useState(limit);

  useEffect(() => {
    (async () => {
      const more = await fetchMore({
        variables: {
          limit: limits,
          sort: sort,
          order: order,
        },
        // updateQuery() {},
      });
      if (!(more.loading || more.error || !more.data)) setState(more.data);
      // console.log(more.data);
    })();
  }, [limits]);

  return (
    <div>
      <div className="mt-4">
        <div className="row " style={{ justifyContent: "center" }}>
          {!!state.launches &&
            state.launches.map(
              (launch, i) =>
                !!launch && (
                  <Link
                    to={`/launch/${launch.flight_number}`}
                    key={i}
                    className="mr-4 mb-4 p-3"
                    style={{ boxShadow: "rgb(0 0 0 / 39%) 1px 1px 12px" }}
                  >
                    <img
                      src={
                        "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
                      }
                      width="220"
                      height="130"
                      alt={String(launch.mission_name)}
                    />
                    <p className="mb-1 mt-2">
                      Mission Name: {launch.mission_name}
                    </p>
                    <div
                      className="d-flex justify-content-between mb-1 mt-2"
                      style={{}}
                    >
                      <p className="mr-2">
                        {launch.launch_success
                          ? "Success: true"
                          : launch.launch_success === null
                          ? "Upcoming: true"
                          : "Success: false"}
                      </p>
                      <p>Year: {launch.launch_year}</p>
                    </div>
                  </Link>
                )
            )}
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary mb-4"
        onClick={() => {
          setLimits((prev) => prev + limit);
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default LaunchesInfoList;
