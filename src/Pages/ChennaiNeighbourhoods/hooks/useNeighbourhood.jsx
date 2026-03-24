import { useEffect, useState } from "react"
import { getNeighbourhood } from "../api/neighbourhoodApi"

export function useNeighbourhood(filters) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [filters])

  const fetchData = async () => {
    setLoading(true)

    try {
      const res = await getNeighbourhood(filters)
      setData(res.data.docs)
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  return { data, loading }
}