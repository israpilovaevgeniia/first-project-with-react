import "./card-button.css"

// eslint-disable-next-line react/prop-types
function CardButton({ children, className, variant }) {
    const cls = `card-button ${variant || "" } ${className || ""}`

    return (
        <button className={cls}>{ children }</button>

    )
}

export default CardButton
