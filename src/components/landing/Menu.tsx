import React, { useState } from 'react';

import Logo from '../../../public/images/Logo.jpeg';
import Modal from './Modal';

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
      {!login && modalOpen && <Modal setModalOpen={setModalOpen} setLogin={setLogin} />}

      {login && (
        <button type="button" className="mr-5">
          새 캐릭터 생성하기
        </button>
      )}
      {login && <button type="button">마이룸 꾸미기</button>}
    </div>
  );
}

export default Menu;
