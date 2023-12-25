import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors';
import { Loader } from '../components/Loader/Loader';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <PhonebookForm />
      <Filter />
      <div>{isLoading && <Loader />}</div> <ContactsList />
    </>
  );
}
