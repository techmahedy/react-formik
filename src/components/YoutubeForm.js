import React from 'react';
import { useFormik } from 'formik';

const initialValues =  {
    name: '',
    email: '',
    channel: ''
}
const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
}
const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.channel) {
        errors.channel = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

function YoutubeForm(){

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return(
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="text" 
                    name="name" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.name} 
                />
                { formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.email} 
                />
                { formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>
                <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <input 
                    type="text" 
                    id="text" 
                    name="channel" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.channel} 
                />
                { formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
                </div>
                <button type="submit">Submit</button>
            </form>
    );
};

export default YoutubeForm;