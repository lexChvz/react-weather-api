import PropTypes from 'prop-types';
import styles from '../components/styles/Components.module.css';

export default function LocationForm({ searchValue, inputStateOnChange, btnOnClick }) {
  return (
    <div className={styles.locationForm}>
      <input
        type='text'
        value={searchValue}
        onChange={(e) => {
          inputStateOnChange(e.target.value);
        }}
        placeholder='Please enter a location'
        required
      />
      <button className={styles.searchBtn} onClick={btnOnClick}>
        Search
      </button>
    </div>
  );
}

LocationForm.propTypes = {
  searchValue: PropTypes.string,
  inputStateOnChange: PropTypes.func,
  btnOnClick: PropTypes.func,
};
