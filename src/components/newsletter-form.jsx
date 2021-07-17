import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const resetForm = () => {
    const form = document.getElementById('NewsletterForm')
    setTimeout(() => {
      form.querySelectorAll('input').forEach(element => element.value = '')
    }, 500)
    console.log('resetForm')
}

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('invalid email')
        .required('Required'),
})

const NewsletterForm = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        await sleep(500);
        console.log(JSON.stringify(values, null, 2));
        fetch('https://koleeum-admin.herokuapp.com/newsletters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: values.email,

            }),
        })
        .then(response => response.json())
        .then(data => console.log(data));

        resetForm()
      }}
    >
      {({ errors,
          touched,
          isSubmitting,
      }) => (
        <Form id="NewsletterForm">
            <div>
              <Field name="email" placeholder="Mon adresse email *" type="email" />
              {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
            </div>
            <button className="btn" type="submit" disabled={isSubmitting ? 'disabled' : ''}>
                Submit
            </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default NewsletterForm