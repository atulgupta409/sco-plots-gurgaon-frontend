import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_MICROLOCATIONS } from "../service/getMicrolocationService";

const useGetMicroLocations = () => {
  const [microlocations, setMicrolocations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { loading, data } = useQuery(GET_MICROLOCATIONS, {
    variables: {
      city: "Gurugram",
    },
  });

  useEffect(() => {
    if (!loading && data) {
      setMicrolocations(data.microlocations);
      setIsLoading(false);
    }
  }, [data, loading]);

  return [microlocations, isLoading];
};

export default useGetMicroLocations;
