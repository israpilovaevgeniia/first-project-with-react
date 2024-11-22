import "./card-button.css"

// eslint-disable-next-line react/prop-types
function CardButton({ children, className, variant, onClick }) {
    const cls = `card-button ${variant || "" } ${className || ""}`

    return (
        <button onClick={onClick} className={cls}>{ children }</button>

    )
}

export default CardButton
