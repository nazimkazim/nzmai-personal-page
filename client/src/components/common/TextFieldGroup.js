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
  disabled,
  iconplaceright,
  iconright,
  iconplaceleft,
  iconleft
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
          iconplaceleft={iconplaceleft}
          iconplaceright={iconplaceright}
          iconleft={iconleft}
          iconright={iconright}
        />
        <span className={iconplaceleft}>
          <i className={iconleft} />
        </span>
        <span className={iconplaceright}>
          <i className={iconright} />
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
  disabled: PropTypes.string,
  iconplaceright: PropTypes.string,
  iconright: PropTypes.string,
  iconplaceleft: PropTypes.string,
  iconleft: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
