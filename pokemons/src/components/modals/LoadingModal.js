import React from 'react';
import Modal from '@mui/material/Modal';
import pokeball from '../../assets/svg/pokeball.svg'

export default function LoadingModal(props) {
  return (
    <Modal
    open={props.open}
    disableEnforceFocus
    >
      <img src={ pokeball } className="logo-rotate" alt="pokeball"/>
    </Modal>
  );
}
