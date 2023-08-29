import { filterContacts } from 'components/redux/phoneBookSlice';
import { useDispatch, useSelector } from 'react-redux';

import { InputFilter, LabelFilter } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.phoneBook.filter);

  const dispatch = useDispatch();

  const filteredContacts = ({ target: { value } }) =>
    dispatch(filterContacts(value));
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={filteredContacts}
      />
    </LabelFilter>
  );
};

export default Filter;
