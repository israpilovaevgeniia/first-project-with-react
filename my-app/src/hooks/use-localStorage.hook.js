import { useEffect, useState } from "react";

export function useLocalStorage(key) {
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      const items = localStorage.getItem(key);
      if(items) {
        const parsedItems = JSON.parse(items);
        setData(
          parsedItems.map((item) => ({
            ...item,
            date: new Date(item.date),
          }))
        );
      }
    } catch(error) {
      console.log("Failed to parse localStorage date", error);
    }
  }, [key])

  const saveData = (newData) => {
    if(newData.id) {
      const updatedDate = [...data, newData]
      setData(updatedDate)
      localStorage.setItem(key, JSON.stringify(updatedDate))
    }
  }

  return[data, saveData]
}