import React, { useState } from 'react';

import Logo from '../../../public/images/Logo.jpeg';
import Modal from './Modal';

function UnLoggedMenu() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex p-3 border-b-2 border-deepGray text-deepBlack">
      <div className="aspect-square w-[40px] min-w-[40px] ml-3 mr-5">
        <img src={Logo}></img>
      </div>
      <button onClick={showModal}>로그인</button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default UnLoggedMenu;
