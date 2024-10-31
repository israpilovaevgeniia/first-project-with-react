import CardButton from "../card-button/card-button"
import "./journal-add-button.css"

// eslint-disable-next-line react/prop-types
function JournalAddButton ({ variant }) {

    return (
        <CardButton variant={variant} className="journal-add-button">
            + Новое воспоминание
        </CardButton>
    )
}

export default JournalAddButton