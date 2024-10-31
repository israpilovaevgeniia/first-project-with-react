import { useState } from "react"
import "./journal-form.css"
import Button from "../button/button"

function JournalForm () {
    const [inputValue, setInputValue] = useState("")

    const onChangeInput = (e) => {
      setInputValue(e.target.value)
    }

    const clickFormBtn = () => {
        console.log("clicked")
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formValues = Object.fromEntries(formData)
        console.log(formValues)
    }

    return (
        <form onSubmit={onSubmitForm} className="journal-form">
            <input 
            name="title"
            value={inputValue} 
            onChange={onChangeInput} 
            type='text'
            />
            <input 
            name="date"
            type='date'
            />
            <input 
            name="tag"
            type='text'
            />
            <textarea name="post" cols={30} rows={10}></textarea>
             <Button onClick={clickFormBtn} txt={"Отправить"}/>
        </form>
    )

}

export default JournalForm