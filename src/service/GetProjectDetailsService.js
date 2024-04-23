import { gql } from "@apollo/client";

export const GET_PROJECT_DETAILS = gql`
  query projectsDetails($slug: String) {
    dwarkaProjectDetails(slug: $slug) {
      name
      builder {
        name
      }
      plans_type {
        name
      }
      starting_price
      banner_bullets
      brochure {
        s3_link
      }
      location_map {
        s3_link
      }
      highlights
      location {
        address
        latitude
        longitude
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
      advantages
      configuration
      ratings
      project_size
      description
      project_status
      master_plan {
        s3_link
      }
      short_descrip
      highlights
      for_sale
      for_rent
      allAmenities {
        commercial {
          name
          icon
        }
        residential {
          name
          icon
        }
      }
      plans {
        category {
          name
        }
        size
        size_sq
        floor_plans {
          name
          sale_price
          rent_price
          area
          image {
            s3_link
          }
        }
      }
      seo {
        title
        description
        robots
        keywords
        twitter {
          title
          description
        }
        open_graph {
          title
          description
        }
      }
    }
  }
`;
