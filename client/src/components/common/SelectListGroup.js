import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="field">
      <div className="control">
        <div
          className={classnames('select is-fullwidth is-primary', {
            'is-danger': error
          })}
        >
          <select value={value} name={name} onChange={onChange}>
            {selectOptions}
          </select>
        </div>
      </div>
      {info && <small>{info}</small>}
      {error && <p className="help is-danger">{error}</p>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
