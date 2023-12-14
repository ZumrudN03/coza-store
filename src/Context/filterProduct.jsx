import React, { createContext, useEffect, useState } from "react";

export const FilterProductContext = createContext();

function FilterProductProvider({ children }) {
  const [fetchData, setFetchData] = useState([]);
  const [filterData, setFilterData] = useState("All");

  useEffect(() => {
    getFetch();
  }, []);

  async function getFetch() {
    const data = await fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    );
    const res = await data.json();
    setFetchData(res);
  }

  function filterProduct(category) {
    setFilterData(category);
  }

  const dataProduct =
    filterData === "All"
      ? fetchData
      : fetchData.filter((item) => item.category === filterData);

     

  return(
    <FilterProductContext.Provider value={{filterProduct,dataProduct}}>
        {children}
    </FilterProductContext.Provider>
  )
  
}

export default FilterProductProvider;
