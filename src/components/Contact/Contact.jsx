import { deleteContact } from 'redux/operations';
import css from '../ContactList/ContactList.module.css'
import { useDispatch } from 'react-redux';
const Contact = ({ contact }) => {
const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteContact(contact.id))
  return (
    <>
      <p className={css.text}> {contact.name}:
        <span>{contact.phone}</span>
      </p>
      <button onClick={handleDelete}>delete</button>
    </>
  )
}
export default Contact