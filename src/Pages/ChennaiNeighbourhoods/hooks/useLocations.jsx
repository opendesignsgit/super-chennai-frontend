import { useEffect, useState } from "react"
import { getLocations } from "../api/neighbourhoodApi"

export function useLocations() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    getLocations().then(res =>
      setLocations(res.data.docs)
    )
  }, [])

  return locations
}