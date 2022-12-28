import React, { useEffect, useRef } from 'react';

import KakaoLogin from '../../../public/images/KakaoLogin.png';
import NaverLogin from '../../../public/images/NaverLogin.png';

function Modal({ setModalOpen, setLogin }: any) {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setModalOpen(false);
  };
  // 로그인이 항상 성공된 상태라고 가정
  const isLogin = () => {
    setLogin(true);
  };

  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, []);

  return (
    <div
      ref={modalRef}
      className="w-[20%] max-h-[45%] z-999 absolute inset-0 m-auto border-2 border-deepGray rounded-[10px] text-deepBlack"
    >
      <button onClick={closeModal} className="absolute right-[10px] top-[10px]">
        X
      </button>

      <form className="flex flex-col h-[80%] items-center">
        <h1 className="mt-[10%] text-[35px]">로그인</h1>
        <div className="flex flex-col mt-[7%] w-[55%] h-[50%]">
          <input
            placeholder="아이디"
            type="id"
            className="h-[25%] mb-[10px] p-[5px] border-2 border-deepGray rounded-[3px]"
          />
          <input
            placeholder="비밀번호"
            type="password"
            className="h-[25%] mb-[25px] p-[5px] border-2 border-deepGray rounded-[3px]"
          />
          <button onClick={isLogin} className="h-[28%] bg-yellow rounded-[3px]">
            로그인
          </button>
        </div>
      </form>

      <div className="flex w-[100%] mt-[-10px] items-center justify-center text-[14px] text-center">
        ----- 간편 로그인 -----
      </div>
      <div className="flex w-[100%] mt-[10px] items-center justify-center">
        <a className="max-w-[30%] mr-[10px]">
          <img src={KakaoLogin} alt="카카오 로그인 버튼" />
        </a>
        <a className="max-w-[30%]">
          <img src={NaverLogin} alt="네이버 로그인 버튼" />
        </a>
      </div>
    </div>
  );
}

export default Modal;
