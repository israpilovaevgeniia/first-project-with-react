import SelectUser from "../select-user/select-user"
import Button from "../button/button"
import { useCallback, useState } from "react"

// eslint-disable-next-line react/prop-types
function Header () {

    const [txt, setTxt] = useState({
        tagType: null,
        tag: null
    })

    const onChangeHeaderTxt = useCallback(() => {
        if(txt.tagType === "h2") {
            setTxt({
                tagType: "p",
                tag: <p>Запасной текст</p>
            })
            return;
        }
        setTxt({
            tagType: "h2",
            tag: <h2>Основной текст</h2>
        })
    }, [])

    return (
        <div className="header">
            { txt.tag || <p>Header</p> }
            <SelectUser/>
            <Button txt="Сменить текст" onClick={onChangeHeaderTxt}/>
        </div>
    )
}

export default Header