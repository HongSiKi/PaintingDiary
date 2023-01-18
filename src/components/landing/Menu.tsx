import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import Logo from '../../../public/images/column-logo/favicon-96x96.png';
import LoginModal from './LoginModal';
import { useAppSelector } from '../../redux/hook';

function Menu() {
  const { isLogin, user } = useAppSelector((state) => state.user);
  if (user === null) {
    return <div>error!</div>;
  }

  return (
    <div className="flex p-3 border-b-2 border-deepGray text-deepBlack items-center gap-x-2">
      <NavLink to="/">
        <div className="aspect-square w-[40px] min-w-[40px] ml-3 mr-5">
          <img src={Logo} alt="메인 로고" />
        </div>
      </NavLink>

      {isLogin ? (
        <LoggedMenu nickname={user.nickname} hasCharacter={user.hasCharacter} />
      ) : (
        <NonLoggedMenu />
      )}
    </div>
  );
}

function LoggedMenu({
  nickname,
  hasCharacter,
}: {
  nickname: string | undefined;
  hasCharacter: boolean;
}) {
  return (
    <>
      <NavLink to="/decorate-character">
        {hasCharacter ? '캐릭터 편집하기' : '새 캐릭터 생성하기'}
      </NavLink>
      <NavLink to="/decorate-my-room">마이룸 꾸미기</NavLink>

      <div className="flex-1" />
      <div className="text-lightBlack">{nickname}</div>
    </>
  );
}

function NonLoggedMenu() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => setModalOpen(true);

  return (
    <>
      <button type="button" onClick={showModal}>
        로그인
      </button>
      {modalOpen && (
        <LoginModal
          setModalOpen={setModalOpen}
          handleLogin={(id: string, password: string) => {
            console.log(id, password);
          }}
        />
      )}
    </>
  );
}

export default Menu;
