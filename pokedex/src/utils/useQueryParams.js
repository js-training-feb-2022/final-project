import { useEffect, useState } from "react";
import { DEFAULT_QUERY_PARAMS } from "./constants";
import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1");
  const currentPath = location.pathname;
  DEFAULT_QUERY_PARAMS.offset = (page - 1) * DEFAULT_QUERY_PARAMS.limit;
  const [queryParams, setQueryParams] = useState(DEFAULT_QUERY_PARAMS);

  useEffect(() => {
    setQueryParams((prevState) => ({
      ...prevState,
      offset: (page - 1) * prevState.limit,
    }));
  }, [page]);

  return { queryParams, page, currentPath };
};
