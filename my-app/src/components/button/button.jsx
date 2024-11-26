import "./button.css"
import { memo } from "react"


// eslint-disable-next-line react/prop-types
const Button = ({ className, txt, onClick }) => {

    return (
        <button 
        className={className}
        onClick={ onClick } 
        // className="button primary"
        >
            { txt }
        </button>
    )
}

export default memo(Button)