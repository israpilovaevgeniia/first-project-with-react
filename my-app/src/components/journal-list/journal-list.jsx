import { useContext, useMemo } from "react"
import CardButton from "../card-button/card-button"
import JournalItem from "../journal-item/journal-item"
import "./journal-list.css"
import { UserContext } from "../../context/user-context"

// eslint-disable-next-line react/prop-types
function JournalList ({ data, isView }) {
  const { userId } = useContext(UserContext)
  const filteredData = useMemo(() => {
    // eslint-disable-next-line react/prop-types
    return data?.filter(item => item.userId === userId)
  }, [data, userId])
    // eslint-disable-next-line react/prop-types
    if(!data.length) return <span>Not found data</span>
    return (
     <>
     {isView ? "hello" : "bye"}
    {
        // eslint-disable-next-line react/prop-types
        filteredData?.map((i) => {
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