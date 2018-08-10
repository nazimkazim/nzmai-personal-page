import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  iconplaceright,
  iconright,
  iconplaceleft,
  iconleft
}) => {
  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <textarea
          className={classnames('input', {
            'is-danger': error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
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

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
