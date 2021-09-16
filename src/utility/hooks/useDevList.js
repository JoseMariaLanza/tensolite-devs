import { useState, useEffect } from "react"

const useDevList = (API) => {
  const [devs, setDevs] = useState([])
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setDevs(data))
  }, [])
  return devs
}

export default useDevList