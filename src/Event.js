import { Link } from "react-router-dom";
const Event = (props) => {
    const { time, event, eventType, presenter, title, travelLink, eventPrompt, segment } = props.evt;
    const { speaker, showKey } = props;

    return <div className={eventType ? eventType : null}>
        <div className={showKey && eventPrompt ? `${eventPrompt} segment` : "segment"}>
            <div className={speaker === presenter ? "active evtCase" : "evtCase"}>
                {eventType === "nav" ? <p className={eventType}>{time} <Link to={"/" + travelLink}>{event}</Link></p> : <p>{time} {event}</p>}
                {presenter ? <span>{presenter}:</span> : null} {title ? <span>{title}</span> : null}
            </div>
        </div>
    </div>
}

export default Event; 