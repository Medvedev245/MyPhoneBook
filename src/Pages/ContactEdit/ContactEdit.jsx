import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCurrentContact } from 'components/Redux/selectors';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { PatternFormat } from 'react-number-format';

import { editContact } from 'components/Redux/thunk';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string().required('* Phone number is required'),
});

const ContactEdit = () => {
  const { id } = useParams();
  const currentContact = useSelector(state =>
    selectCurrentContact(state, { id })
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name: currentContact ? currentContact.name : '',
    number: currentContact ? currentContact.number : '',
  };

  const handleSubmit = values => {
    const updatedContact = { name: values.name, number: values.number, id };

    dispatch(editContact(updatedContact));

    navigate(-1);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsSchema}
        onSubmit={handleSubmit}
      >
        <styled autoComplete="off">
          <div>
            <Field
              label="Name"
              name="name"
              multiline
              variant="standard"
              className="fieldName"
            />
          </div>
          <ErrorMessage name="name" component="span" style={{ color: 'red' }} />

          <div>
            <Field
              as={PatternFormat}
              name="number"
              variant="standard"
              format="+38 (0##) ### ## ##"
              allowEmptyFormatting={true}
              mask="_"
            />
          </div>
          <ErrorMessage
            name="number"
            component="span"
            style={{ color: 'red' }}
          />

          <button type="submit">Edit</button>
        </styled>
      </Formik>
    </div>
  );
};

export default ContactEdit;
