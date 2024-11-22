import "./journal-item.css"

function JournalItem(props) {
    
    // eslint-disable-next-line react/prop-types
    const {data} = props;
    // eslint-disable-next-line react/prop-types
    const formattedDate =  new Intl.DateTimeFormat("ru-Ru").format(data.date);
    

    return (
        <>
            <h2 className="journal-item__title">{ data.title }</h2>
            <div className="journal-item__body">
                <p className="journal-item__date">{ formattedDate }</p>
                <p className="journal-item__text">{ data.post }</p>
            </div>

        </>
    )
}

export default JournalItem;