import { useEffect, useState } from "react"

export function useLocalStorage (key) {
    const [data, setData] = useState([])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem(key))
        if(items) {
          setData(items.map((i) => ({
            ...i,
            date: new Date(i.date)
          })))
        }
      }, [key])

      const saveData = (newData) => {
        if(newData.length) {
          localStorage.setItem(key, JSON.stringify(newData))
          setData(prev => [...prev, ...newData] )
        }
      }

    return [data, saveData]
}