import Event from "./Event";

const CalenderView = (props) => {
    const { time, event, eventType, presenter, title } = props.evt;
    const { speaker, showKey } = props;

    return <Event evt={props.evt} speaker={speaker} showKey={showKey} />
}

export default CalenderView;