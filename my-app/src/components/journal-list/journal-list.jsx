import { useContext, useMemo } from "react"
import CardButton from "../card-button/card-button"
import JournalItem from "../journal-item/journal-item"
import "./journal-list.css"
import { UserContext } from "../../context/user-context"

// eslint-disable-next-line react/prop-types
function JournalList ({ data, onDelete, setSelectedItem }) {

  const { userId } = useContext(UserContext)

  const filteredData = useMemo(() => {
    // eslint-disable-next-line react/prop-types
    return data?.filter(item => item.userId === userId)
  }, [data, userId])
    // eslint-disable-next-line react/prop-types
    if(!filteredData.length) return <span>Not found data</span>
    return (
     <>
    {
        // eslint-disable-next-line react/prop-types
        filteredData?.map((i) => (
            // eslint-disable-next-line react/jsx-key
            <CardButton onClick={() => setSelectedItem(i)}  key={i.id}>
              <JournalItem data={i} onDelete={onDelete}/>
            </CardButton>
        ))}
     </>
    )
}

export default JournalList