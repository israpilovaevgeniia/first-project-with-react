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
      const isExistData = !!data.find((data) => data.id === newData.id)
      const updatedData = isExistData
      ? data.map((item) => (item.id === newData.id ? newData : item))
      : [...data, {...newData, id: data.length + 1}]
      setData(updatedData)
      localStorage.setItem(key, JSON.stringify(updatedData))
    }
  }

  const deleteData = (id) => {
    const updatedDate = data.filter(item => item.id !== id)
    setData(updatedDate);
    localStorage.setItem(key, JSON.stringify(updatedDate))
  }

  return[data, saveData, deleteData]
}