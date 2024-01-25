import PropTypes from 'prop-types';
import styles from './styles/Components.module.css';

export default function Result({ key, currentLocation, data }) {
  return (
    <div key={key}>
      <h2>
        Current condition of <span className={styles.currlocation}>{currentLocation}</span>
      </h2>
      <div>
        <p>
          {data.temp.c} / {data.temp.f}
        </p>
        <img src={data.icon} />
        <p>{data.forecast}</p>
        <a href={data.link}>Click this link for more details.</a>
        <p>{data.date}</p>
      </div>
    </div>
  );
}

Result.propTypes = {
  key: PropTypes.number,
  currentLocation: PropTypes.string,
  data: PropTypes.object,
};
