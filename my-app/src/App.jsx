import './App.css'
import Body from './layout/body/body'
import CardButton from './components/card-button/card-button'
import JournalAddButton from './components/journal-add-button/journal-add-button'
import JournalItem from './components/journal-item/journal-item'
import JournalList from './components/journal-list/journal-list'
import JournalForm from './components/journal-form/journal-form'
import LeftPanel from './layout/left-panel/left-panel'


function App() {
  const data = [
    {
      title: "Тему вооспомигнания я не придумал",
      date: new Date("10.29.2024"),
      content: "тут должен быть текст"
    },
    {
      title: "подготовка к обновлению курсов",
      date: new Date("10.24.2023"),
      content: "думал много времени потраченно зря "
    },
    {
      title: "первая заметка",
      date: new Date("10.21.2022"),
      content: "даже не знаю что написать "
    }
  ]

  return (
    <>
    <div className="app">
      <LeftPanel>
        <JournalAddButton variant={"primary"}/>
        <JournalList>
          {
            data?.map((i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <CardButton key={i.title}>
                  <JournalItem data={i}/>
                </CardButton>
              )
            })
          }
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm/>
      </Body>

    </div>
    </>
  )
}

export default App
