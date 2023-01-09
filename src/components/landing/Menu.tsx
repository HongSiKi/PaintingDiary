import React, { useState } from 'react';

import Logo from '../../../public/images/column-logo/favicon-96x96.png';
import LoginModal from './LoginModal';
import LoggedMenu from './LoggedMenu';

function Menu() {
  const [modalOpen, setModalOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex p-3 border-b-2 border-deepGray text-deepBlack">
      <div className="aspect-square w-[40px] min-w-[40px] ml-3 mr-5">
        <img src={Logo} alt="메인 로고" />
      </div>
      {!login && (
        <button type="button" onClick={showModal}>
          로그인
        </button>
      )}
      {!login && modalOpen && <LoginModal setModalOpen={setModalOpen} setLogin={setLogin} />}

      {login && <LoggedMenu />}
    </div>
  );
}

export default Menu;
