import { useContext } from "react"
import CardButton from "../card-button/card-button"
import JournalItem from "../journal-item/journal-item"
import "./journal-list.css"
import { UserContext } from "../../context/user-context"

// eslint-disable-next-line react/prop-types
function JournalList ({ data }) {
  const { userId } = useContext(UserContext)
    // eslint-disable-next-line react/prop-types
    if(!data.length) return <span>Not found data</span>
    return (
     <>
    {
        // eslint-disable-next-line react/prop-types
        data?.filter(item => item.userId === userId).map((i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <CardButton  key={i.id}>
              <JournalItem data={i}/>
            </CardButton>
          )
        })
    }
     </>
    )
}

export default JournalList