import React, { createContext, useState } from 'react'

export const FilterSearchContext = createContext("")

function FilterSearchProvider({ children }) {
    const [filterOpen, setFilterOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    function isFilterOpen() {
        setFilterOpen(!filterOpen)
        setSearchOpen(false)
    }

    function isSearchOpen() {
        setSearchOpen(!searchOpen)
        setFilterOpen(false)
    }

    const data = { filterOpen, searchOpen, isFilterOpen, isSearchOpen }
    return (
        <FilterSearchContext.Provider value={data}>
            {children}
        </FilterSearchContext.Provider>

    )
}

export default FilterSearchProvider