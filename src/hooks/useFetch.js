import { useState, useEffect, useRef } from "react"

export const useFetch = (url, _userDetails) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // use useRef to wrap an {}/[] arg that is a useEffect dependency
  const userDetails = useRef(_userDetails).current

  useEffect(() => {
    console.log(_userDetails)
    const controller = new AbortController()

    const fetchData = async () => {
      setIsLoading(true)

      try {  
      const res = await fetch(url, {signal: controller.signal})
      if (!res.ok) {
        throw new Error(res.statusText)
      }

      const data = await res.json()

      setIsLoading(false)
      setData(data)
      setError(null)
    } catch (err) {
      if (err.name === "AbortError") {
        console.log('The Fetch was Aborted')
      } else {
        setIsLoading(false)
        setError('Could not fetch the data')
        console.log(err.message, error)
      }
    }

    
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [userDetails, url])

  return { data, isLoading, error}
}
