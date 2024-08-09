import { format } from 'date-fns'
import event from "./data/data.json";
import { useState } from 'react';
import { Grid } from '@mui/material';
import WeekView from './WeekView';
import DayView from "./DayView";

const EventView = (props) => {

    const { conference } = event;
    const { days } = conference;
    const { wednesdaysplit } = conference;

    const [result, setResult] = useState(days);
    const [speaker, setSpeaker] = useState("person");
    const [showKey, setshowKey] = useState(false);
    const [showWeek, setshowWeek] = useState(false);
    const dayOfTheWeek = () => format(new Date(), "eeee");
    const showDay = (day) => {
        console.log('day', day)
        if (day === "Wednesday Stream 1" || day === "Wednesday Stream 2") {
            setResult(wednesdaysplit)
        } else {
            setResult(days.filter((current) => current.day === day));
        }
    }
    const showAll = () => setResult(days);
    const showSpeaker = (person) => speaker === person ? setSpeaker(null) : setSpeaker(person);

    const Key = () => <Grid container spacing={1}>
        <Grid className="keycode" item xs={12} sm={12} md={12} lg={12}>
            <div className="registration">Registration</div>
            <div className="pegaworld">PegaWORLD</div>
            <div className="customer-centricty">Customer centricity</div>
            <div className="user-centred">User centred design</div>
            <div className="mobile">Mobile</div>
        </Grid>
    </Grid>

    return (
        <div className="case">
            <div className="btnContainer">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                        <button role="button" onClick={() => showAll()}>Show week</button>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <button role="button" onClick={() => showSpeaker("Crystal J1")}>Crystal J1</button>
                        <button role="button" onClick={() => showSpeaker("Crystal K")}>Crystal K</button>
                        <button role="button" onClick={() => showSpeaker("Crystal L")}>Crystal L</button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <button role="button" onClick={() => setshowKey(!showKey)}>{showKey ? "Hide key" : "Show Key"}</button>
                        {showKey ? <Key /> : null}
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={1}>
                {
                    result.map((item, i) => {
                        const { events } = item;
                        return <Grid key={i} item xs={12} sm={12} md={10} lg={2}>
                            <div key={i} className={dayOfTheWeek() === item.day ? "current tab" : "tab"}>
                                <h3 role="heading" onClick={() => showDay(item.day)}>{item.day}</h3>
                                {events.map((evt, x) => {
                                    return result.length > 1 ? <WeekView key={x} showKey={showKey} evt={evt} speaker={speaker} /> : <DayView key={x} evt={evt} speaker={speaker} showKey={showKey} />
                                })}
                            </div>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}

export default EventView;
