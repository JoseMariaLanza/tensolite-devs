import { useState, useEffect } from "react"

const useDevPositions = (API) => {
  const [positions, setPositions] = useState([])
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setPositions(data))
  }, [])
  return positions
}

export default useDevPositions