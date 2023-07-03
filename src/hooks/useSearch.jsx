import { useMemo, useState } from "react";

export const useSearch = (data) => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (data)
      return data.filter((item) => {
        const name = item?.name || "";
        return name.toLowerCase().includes(search.toLowerCase());
      });
    else return [];
  }, [search, data]);

  return [setSearch, filteredData];
};
