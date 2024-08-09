import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from 'formik';
import { useState } from "react";
import { Grid } from '@mui/material';

const Checkin = () => {
    const [person, setPerson] = useState({});
    const navigate = useNavigate();

    return <div className="case checkin">
        <Grid container spacing={1}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    id: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    setPerson(values, null, 2);
                    return navigate("/eventview");
                }}
            >
                <Form>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" name="firstName" placeholder="James" />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>                    <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Bond" />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                        <label htmlFor="id">ID</label>
                        <Field
                            id="id"
                            name="id"
                            placeholder="pega123"
                        />
                    </Grid>
                    <button type="submit">Submit</button>
                    <Link className="backButton" role="button" to="/eventview">Back to events</Link>
                </Form>
            </Formik>
        </Grid>
    </div>
}

export default Checkin;