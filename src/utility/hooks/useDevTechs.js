import { useState, useEffect } from "react"

const useDevTechs = (API) => {
  const [techs, setTechs] = useState([])
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setTechs(data))
  }, [])
  return techs
}

export default useDevTechs