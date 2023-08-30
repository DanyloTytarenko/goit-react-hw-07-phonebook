import React from "react";
import css from './Filter.module.css'
import { useDispatch} from "react-redux";
import { filterContact } from "redux/contactsSlice";

const Filter = () => {
  const dispatch = useDispatch()
  const hendleFilter = (e) => {
    dispatch(filterContact(e.currentTarget.value))
  }

  
  return (  
    <div className={css.filter}>  
      <label className={css.lable} htmlFor="filter">find contacts by name</label>
      <input
        name="filter"
        type="text"
        onChange={hendleFilter}
      />
    </div>
  );
};

export default Filter;

