import Event from "./Event";

const CalenderView = (props) => {
    const { speaker, showKey } = props;

    return <Event evt={props.evt} speaker={speaker} showKey={showKey} />
}

export default CalenderView;