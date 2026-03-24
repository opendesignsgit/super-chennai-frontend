import { useEffect, useState } from "react"
import { getCategories } from "../api/neighbourhoodApi"

export function useCategories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(res =>
      setCategories(res.data.docs)
    )
  }, [])

  return categories
}