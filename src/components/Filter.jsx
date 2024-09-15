import { useDispatch } from 'react-redux';
import { filterChange } from '../reducers/filterReducer';

const style = {
  marginBottom: 10,
};

export function Filter() {
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(filterChange(event.target.value));
  }

  return (
    <div style={style}>
      <label htmlFor='filter'>filter </label>
      <input id='filter' onChange={handleChange} />
    </div>
  );
}
