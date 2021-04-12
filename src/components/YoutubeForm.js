import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import TextError from './TextError';

const initialValues =  {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: ''
}
const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
}

const validationSchema = yup.object({
    name: yup.string().required('Required'),
    email: yup.string().email('Invalid email format').required('Required'),
    channel: yup.string().required('Required'),
    comments: yup.string().required('Required'),
    address: yup.string().required('Required'),
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
                <ErrorMessage name="name" component={TextError}/>
                </div>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field 
                    type="email" 
                    id="email" 
                    name="email" 
                />
                <ErrorMessage name="email" component={TextError}/>
                </div>
                <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <Field 
                    type="text" 
                    id="text" 
                    name="channel" 
                />
                </div>
                <ErrorMessage name="channel" component={TextError}/>
                <div className="form-control">
                <label htmlFor="comments">Comments</label>
                <Field 
                    as="textarea"
                    id="text" 
                    name="comments" 
                />
                <ErrorMessage name="comments" component={TextError}/>
                </div>
                <div className="form-control">
                <label htmlFor="address">Address</label>
                <Field name="address">
                { props => {
                    const { field, form, meta } = props
                    return (
                        <div>
                            <input type='text' id='address' { ...field } />
                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                        </div>
                    )
                }}
                </Field>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;