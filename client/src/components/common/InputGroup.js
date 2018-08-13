import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  icon,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="field">
      <div className="control has-icons-left has-icons-right">
        <input
          className={classnames('input', {
            'is-danger': error
          })}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        <span className="icon is-small is-left">
          <i className={icon} />
        </span>
      </div>
      {error && <p className="help is-danger">{error}</p>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
