import "./button.css"

// eslint-disable-next-line react/prop-types
const Button = ({ txt, onClick }) => {

    return (
        <button 
        onClick={ onClick } 
        className="button primary">
            { txt }
        </button>
    )
}

export default Button