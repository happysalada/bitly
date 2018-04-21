import React, { Component } from 'react';
import cx from 'classnames';
import uncheckImage from '../../images/checkbox-1.svg';
import checkImage from '../../images/checkbox-2.svg';

class Checkbox extends Component {

  render() {
    let {
      input,
      label,
      type,
      meta: { touched, error, warning },
      disabled
    } = this.props;

    return (
      <label className={cx("checkbox", {
        checked: input.checked,
        disabled: disabled
      })}>
        <span className="icons">
          <img className="first-icon" src={uncheckImage} width={17} />
          <img className="second-icon" src={checkImage} width={17} />
        </span>
        <input {...input} type="checkbox" data-toggle="checkbox" disabled={disabled} />
        {label}
      </label>
    );
  }
}

export default Checkbox;