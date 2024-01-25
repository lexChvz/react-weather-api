import PropTypes from 'prop-types';

export default function Locations({ key, data, clickHandle }) {
  return (
    <button
      key={key}
      onClick={() => {
        clickHandle(data.Key, data.AdministrativeArea.LocalizedName);
      }}
    >
      {data.AdministrativeArea.LocalizedName}, {data.Country.EnglishName}
    </button>
  );
}

Locations.propTypes = {
  key: PropTypes.number,
  data: PropTypes.object,
  clickHandle: PropTypes.func,
};
