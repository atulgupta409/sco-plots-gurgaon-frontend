import { GET_PROJECT_DETAILS } from "../service/GetProjectDetailsService";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

export const useGetProjectDetails = (slug) => {
  const [projectsData, setProjectsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { loading, data } = useQuery(GET_PROJECT_DETAILS, {
    variables: {
      slug: slug,
    },
  });

  useEffect(() => {
    if (!loading && data) {
      setProjectsData(data?.dwarkaProjectDetails[0]);
      setIsLoading(false);
    }
  }, [data, loading, slug]);

  return [projectsData, isLoading];
};
