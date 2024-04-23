import { gql } from "@apollo/client";

export const GET_SCO_PROJECTS = gql`
  query scoProjects($isSco: Boolean) {
    dwarkaProjectDetails(isSco: $isSco) {
      _id
      name
      slug
      starting_price
      location {
        address
        city {
          name
        }
        micro_location {
          name
        }
      }
      images {
        name
        alt
        image {
          s3_link
        }
      }
      project_type
      ratings
    }
  }
`;
