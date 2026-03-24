import { useState } from "react"

export function useSearch() {
  const [filters, setFilters] = useState({})

  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return {
    filters,
    updateFilter
  }
}