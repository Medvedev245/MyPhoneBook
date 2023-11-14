import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCurrentContact } from 'components/Redux/selectors';
import {
  StyledForm,
  Wrapper,
  Button,
  InputWrapper,
} from './ContactEdit.styled';
import { ErrorMessage, Field, Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as Yup from 'yup';
import { PatternFormat } from 'react-number-format';
import { TextField } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
// import toast from 'react-hot-toast';
import { editContact } from 'components/Redux/thunk';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string().required('* Phone number is required'),
});

const ContactEdit = () => {
  const { id } = useParams();
  const contacts = useSelector(state => state.contacts.items);
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

    const existingContact = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (existingContact) {
      Notify.failure('Contact already exists');
    } else {
      Notify.success('Contact ADD');
      dispatch(editContact(updatedContact));
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <InputWrapper>
            <PersonOutlineIcon />
            <Field
              as={TextField}
              label="Name"
              name="name"
              multiline
              variant="standard"
              className="fieldName"
            />
          </InputWrapper>
          <ErrorMessage name="name" component="span" style={{ color: 'red' }} />

          <InputWrapper>
            <PhoneEnabledIcon />
            <Field
              as={PatternFormat}
              customInput={TextField}
              name="number"
              variant="standard"
              format="+38 (0##) ### ## ##"
              allowEmptyFormatting={true}
              mask="_"
            />
          </InputWrapper>
          <ErrorMessage
            name="number"
            component="span"
            style={{ color: 'red' }}
          />

          <Button type="submit">Edit</Button>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};

export default ContactEdit;
