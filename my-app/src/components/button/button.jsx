import "./button.css"


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

export default Button