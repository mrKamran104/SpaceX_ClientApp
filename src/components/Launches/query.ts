import gql from "graphql-tag";

export const LaunchesInfo = gql`
  query LaunchesInfo($limit: Int!, $sort: String!, $order: String!) {
    launches(limit: $limit, sort: $sort, order: $order) {
      id
      launch_year
      links {
        flickr_images
      }
      launch_success
      upcoming
      mission_name
    }
  }
`;
