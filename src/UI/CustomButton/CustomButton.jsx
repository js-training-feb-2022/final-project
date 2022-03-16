import React from 'react';
import './customButtonStyle.scss';
const style = {
  Release: 'button_active',
  Catch: 'button_default',
};
export function CustomButton({ onClick, type, title }) {
  return (
    <button className={'button ' + style[type]} onClick={onClick}>
      {title}
    </button>
  );
}
