import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
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
          <i className="fas fa-envelope" />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check" />
        </span>
      </p>
      {info && <small>{info}</small>}
      {error && <p className="help is-danger">{error}</p>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
