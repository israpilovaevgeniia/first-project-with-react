import "./journal-item.css"

// eslint-disable-next-line react/prop-types
function JournalItem({ data, onDelete }) {
    
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/prop-types
    const formattedDate =  new Intl.DateTimeFormat("ru-Ru").format(data.date);

    const handleDelete = () => {
        // eslint-disable-next-line no-undef, react/prop-types
        onDelete(data.id); 
    };
    

    return (
        <>
            <h2 className="journal-item__title">{ data.title }</h2>
            <div className="journal-item__body">
                <p className="journal-item__date">{ formattedDate }</p>
                <p className="journal-item__text">{ data.post }</p>
            </div>
            <div onClick={handleDelete}>
                <img src="/delete.svg" alt="Delete"/>
            </div>
        </>
    )
}

export default JournalItem;