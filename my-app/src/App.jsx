import './App.css'
import Body from './layout/body/body'
import JournalAddButton from './components/journal-add-button/journal-add-button'
import JournalList from './components/journal-list/journal-list'
import JournalForm from './components/journal-form/journal-form'
import LeftPanel from './layout/left-panel/left-panel'
import { useLocalStorage } from './hooks/use-localStorage.hook'

function App() {
  
  const [data, setData] = useLocalStorage("journalItem ")

  const addNewJournalItem = (data) => {
    setData(prev => [{
      ...data,
      date: new Date(data.date),
      id: prev.length + 1
    },
    ...prev
  ]) 
}
 
  return (
    <>
    <div className="app">
      <LeftPanel>
        <JournalAddButton variant={"primary"}/>
        <JournalList data={ data }/>
       </LeftPanel>
      <Body>
        <JournalForm onSubmit={addNewJournalItem}/>
      </Body>

    </div>
    </>
  )
}

export default App
