import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {  
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error(res.statusText)
      }

      const data = await res.json()

      setIsLoading(false)
      setData(data)
      setError(null)
    } catch (err) {

      setIsLoading(false)
      setError('Could not fetch the data')
      console.log(err.message, error)
    }

    
    }

    fetchData()
  }, [url])

  return { data, isLoading, error}
}
