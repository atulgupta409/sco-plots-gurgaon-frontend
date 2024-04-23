import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_SCO_PROJECTS } from "../service/getProjectsByTypeService";

const useGetProjectsByType = (isSeo) => {
  const [scoProjectsData, setScoProjectsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { loading, data } = useQuery(GET_SCO_PROJECTS, {
    variables: {
      isSeo: isSeo,
    },
  });

  useEffect(() => {
    if (!loading && data) {
      setScoProjectsData(data?.dwarkaProjectDetails);
      setIsLoading(false);
    }
  }, [data, loading, isSeo]);

  return [scoProjectsData, isLoading];
};

export default useGetProjectsByType;
