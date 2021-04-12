import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues =  {
    name: '',
    email: '',
    channel: ''
}
const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
}

const validationSchema = yup.object({
    name: yup.string().required('Required'),
    email: yup.string().email('Invalid email format').required('Required'),
    channel: yup.string().required('Required'),
});

function YoutubeForm(){
    return(
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                <Field 
                    type="text" 
                    id="text" 
                    name="name" 
                />
                <ErrorMessage name="name" />
                </div>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field 
                    type="email" 
                    id="email" 
                    name="email" 
                />
                <ErrorMessage name="email" />
                </div>
                <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <Field 
                    type="text" 
                    id="text" 
                    name="channel" 
                />
                <ErrorMessage name="channel" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;