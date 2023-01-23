import axios from 'axios'
import { useState, useEffect } from 'react'

export function useFetch<T = unknown>(
  url: string,
  variable?: string | null,
  timeToDie: number = 2000,
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [isTimeout, setIsTimeout] = useState(false)

  useEffect(() => {
    setIsTimeout(false)
    if (variable !== null) {
      const source = axios.CancelToken.source()
      const timeout = setTimeout(() => {
        setIsTimeout(true)
        source.cancel('Timeout, o tempo de conexão com o servidor esgotou')
      }, timeToDie)

      setLoading(true)
      axios
        .get(url, { cancelToken: source.token })
        .then((response) => {
          setLoading(false)
          setData(response.data)
          clearTimeout(timeout)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setData(null)
    }
  }, [url, variable, timeToDie])

  return { data, loading, isTimeout }
}
