import React, {useState, useEffect, useRef} from 'react'

    function HistoricalEvent({item, loading, fetched, scrollHeight}) {
        const x = item.event_date_utc;
        const date = x.split('T', 1)
        const refMoment = useRef(null)
        const innerHeight = window.innerHeight;
        const [appear, setAppear] = useState(false)

        useEffect(() => {
            if(fetched && !loading) {
                const val = refMoment.current.getBoundingClientRect().top;
                if(val + 150 < innerHeight) {
                    setAppear(true)
                } 
            } 
        }, [loading, scrollHeight])

        return (
            <div className={`history__moment ${appear ? "history__moment--appear" : null}`}
                 ref={refMoment}>
                <div className="history__title">
                    {item.title}
                </div>
                <div className="history__date">
                    {date}
                </div>
                <p className="history__details">
                    {item.details}
                </p>
                <a href={item.links.article}
                    className="history__link">
                    More
                </a>
            </div>
        )
    }

export default HistoricalEvent