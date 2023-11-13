import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  EntryField,
  FormikContainer,
  Button,
  FormLabel,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'components/Redux/contactsSlice';
import { selectContacts } from 'components/Redux/selectors';

const nameSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g
    )
    .required('Required'),
});

export const ContactForm = () => {
  // const value = useSelector(getContacts);
  // function getContacts(state) {
  //   console.log(state);
  //   return state.contacts.contacts;
  // }

  const value = useSelector(state => {
    return state.contacts.contacts;
  });
  // function getContacts(state) {
  //   console.log(state);
  //   return state.contacts.contacts;
  // }
  const dispatch = useDispatch();

  return (
    <FormikContainer>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={nameSchema}
        onSubmit={(values, actions) => {
          const existingContact = value.some(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          );
          if (existingContact) {
            Notify.failure('Contact already exists');
          } else {
            Notify.success('Contact ADD');
            dispatch(addContacts(values));
            actions.resetForm();
          }
        }}
      >
        <Form>
          <EntryField>
            <FormLabel htmlFor="name">First Name</FormLabel>
            <Field id="name" name="name" placeholder="Name" />
          </EntryField>

          <EntryField>
            <FormLabel htmlFor="number">Telephone</FormLabel>
            <Field
              id="number"
              // type="number"
              name="number"
              placeholder="xxx-xx-xx"
            />
          </EntryField>

          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </FormikContainer>
  );
};

ContactForm.propTypes = {
  addContacts: PropTypes.func,
  state: PropTypes.object,
};
