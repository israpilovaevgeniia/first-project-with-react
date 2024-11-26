import './App.css'
import Body from './layout/body/body'
import JournalAddButton from './components/journal-add-button/journal-add-button'
import JournalList from './components/journal-list/journal-list'
import JournalForm from './components/journal-form/journal-form'
import LeftPanel from './layout/left-panel/left-panel'
import { useLocalStorage } from './hooks/use-localStorage.hook'
import Header from './components/header/header'
import { UserContextProvider } from './context/user-context'
 
function App() {
  
  const [data, setData] = useLocalStorage("journalItem ")

  const addNewJournalItem = (formData) => {
    const newId = data.length + 1;
    setData({
      ...formData,
      date: new Date(formData.date),
      id: newId
    },
  ) 
}
 
  return (
    <>
    <div className="app">
      <UserContextProvider>
       <LeftPanel>
         <Header/>
         <JournalAddButton variant={"primary"}/>
         <JournalList data={ data }/>
        </LeftPanel>
       <Body>
         <JournalForm onSubmit={addNewJournalItem}/>
       </Body>
      </UserContextProvider>
    </div>
    </>
  )
}

export default App
