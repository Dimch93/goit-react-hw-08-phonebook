import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContacts } from '../../redux/contacts/operations';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
