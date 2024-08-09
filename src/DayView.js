import Event from "./Event";
import { Grid } from '@mui/material';

const SingleView = (props) => {
    const { speaker, showKey } = props;

    return <>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Event evt={props.evt} speaker={speaker} showKey={showKey} />
        </Grid>
    </>
}

export default SingleView;