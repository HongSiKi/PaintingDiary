import React, { useState } from 'react';

import Logo from '../../../public/images/Logo.jpeg';

function UnLoggedMenu() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex p-3 border-b-2 border-lightGray text-black">
      <div className="aspect-square w-[40px] min-w-[40px] ml-3 mr-5">
        <img src={Logo}></img>
      </div>
      <button onClick={showModal}>로그인</button>
    </div>
  );
}

export default UnLoggedMenu;
