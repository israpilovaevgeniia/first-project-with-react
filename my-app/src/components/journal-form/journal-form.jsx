import { useContext, useEffect, useReducer, useRef } from "react"
import styles from  "./journal-form.module.css"
import Button from "../button/button"
import Input from "../input/input"
import cn from "classnames"
import { FORM_INITIAL_STATE, formReducer } from "./journal-form-state"
import { UserContext } from "../../context/user-context"

// eslint-disable-next-line react/prop-types
function JournalForm ({ onSubmit, selectedItem }) {

    const[state, dispatch] = useReducer(formReducer, FORM_INITIAL_STATE)

    const { isValid, isFormReadyToSubmit, values } = state

    const titleRef = useRef(null)
    const tagRef = useRef(null)
    const dateRef = useRef(null)
    const postRef = useRef(null)
    const { userId } = useContext(UserContext)

    const focusError = () => {
        switch(true) {
            case !isValid.title:
                titleRef.current.focus()
                break;
            case !isValid.date:
                dateRef.current.focus()
                break;
            case !isValid.tag:
                tagRef.current.focus()
                break;
            case !isValid.post:
                postRef.current.focus()
                break;
                default:
                break;
                   
        }
    }

    useEffect(() => {
        dispatch({type: "SET_VALUE", payload: {...selectedItem}})
    }, [selectedItem])

    useEffect(() => {
        let timerId
        // eslint-disable-next-line no-unused-vars
        timerId = setTimeout(() => {
            focusError(isValid)
            dispatch({type: "RESET_VALID"})
        }, 2000)
        return() => {
            clearTimeout(timerId )
        }
    }, [isValid])

    useEffect(() => {
        if(isFormReadyToSubmit) {
            onSubmit(state.values)
            dispatch({type: "RESET_VALUES"})
        }
    }, [isFormReadyToSubmit, state.values, onSubmit])


    const handleChange = (e) => {
        const value = e.target.value;
        const key = e.target.name;
        dispatch({type: "SET_VALUE", payload: {[key]: value}})
    };

    const onSubmitForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formValues = Object.fromEntries(formData)
        dispatch({type: "SUBMIT", payload: {
            ...formValues,
             userId,
             // eslint-disable-next-line react/prop-types
             id: selectedItem.id || null
            }})
    }

    return (
                    <form onSubmit={onSubmitForm} className={cn(styles.journalForm)}>
                    <Input 
                    variant={"inputStyleTitle"}
                    ref={titleRef}
                    name="title"
                    value={values.title}
                    type='text'
                    placeholder="Title"
                    onChange={handleChange} 
                    isValid={isValid.title}
                    />
                    <Input
                    variant={"inputStyleDate"}
                    ref={dateRef}
                    name="date" 
                    value={values.date ? new Date(values.date).toISOString().slice(0,10) : values.date}
                    type='date'
                    onChange={handleChange}
                    isValid={isValid.date}
                    />
                    <Input 
                    variant={"inputStyleTag"}
                    ref={tagRef}
                    name="tag"
                    value={values.tag} 
                    type='text'
                    placeholder="Метка"
                    onChange={handleChange}
                    isValid={isValid.tag}
                    />
                    <textarea 
                    ref={postRef} 
                    name="post" 
                    value={values.post}
                    cols={30} 
                    rows={10}
                    onChange={handleChange}
                    className={cn(styles.input, styles.inputStyleTextarea)}
                    ></textarea>
                     <Button className={cn(styles.btnFormSent)} txt={"Сохранить"}/>
                </form>
    )

}

export default JournalForm