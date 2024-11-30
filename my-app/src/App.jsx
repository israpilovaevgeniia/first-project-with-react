import './App.css'
import Body from './layout/body/body'
import JournalAddButton from './components/journal-add-button/journal-add-button'
import JournalList from './components/journal-list/journal-list'
import JournalForm from './components/journal-form/journal-form'
import LeftPanel from './layout/left-panel/left-panel'
import { useLocalStorage } from './hooks/use-localStorage.hook'
import Header from './components/header/header'
import { UserContextProvider } from './context/user-context'
import { useState } from 'react'
 
function App() {
  
  const [data, setData, deleteData] = useLocalStorage("journalItem")
  const [selectedItem, setSelectedItem] = useState({})

  const addNewJournalItem = (formData) => {
    const newId = data.length + 1;
    const existItem = data.find((item) => item.id ===formData.id)
    if(existItem) {
      setData({
        ...formData,
        date: new Date(formData.date),
      })
    } else {
      const newItem = {
        ...formData,
        date: new Date(formData.date),
        id: newId
      };
      setData(newItem) 
    }
}
 
  return (
    <>
    <div className="app">
      <UserContextProvider>
       <LeftPanel>
         <Header/>
         <JournalAddButton variant={"primary"}/>
         <JournalList setSelectedItem={setSelectedItem} data={ data } onDelete={ deleteData }/>
        </LeftPanel>
       <Body>
         <JournalForm selectedItem={selectedItem} onSubmit={addNewJournalItem}/>
       </Body>
      </UserContextProvider>
    </div>
    </>
  )
}

export default App
