import css from './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { addContact } from 'redux/operations';
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    if (contacts.some(({ name }) => name === form.elements.name.value)) {
      form.reset()
      return  toast('contact alredy added', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    dispatch(addContact({name:form.elements.name.value, phone:form.elements.number.value}))
    form.reset()
      toast('contact added', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  };

  return (
    <>
      <ToastContainer style={{fontSize: 20}}/>
      <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.lable} htmlFor="name">Name</label>
      <input 
        className={css.input}
        type="text"
        name="name"
        required
      />

      <label className={css.lable} htmlFor="number">Number</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        required
      />
      <button type="submit">Add contact</button>
    </form>
    </>
    
  );
}

export default ContactForm;
