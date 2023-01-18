import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

import { KAKAO_LOGIN_URL, NAVER_LOGIN_URL } from '../../constants/url';
import KakaoLogin from '../../../public/images/KakaoLogin.png';
import NaverLogin from '../../../public/images/NaverLogin.png';

function LoginModal({ setModalOpen, handleLogin }: any) {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current != null && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(idInput, pwInput);
  };

  return (
    <div
      ref={modalRef}
      className="bg-lightGray min-w-[500px]	w-[25%] max-h-[55%] z-[999] absolute inset-0 m-auto border-2 border-deepGray rounded-[10px] text-deepBlack"
    >
      <button type="button" onClick={closeModal} className="absolute right-[10px] top-[10px]">
        X
      </button>

      <form className="flex flex-col h-[65%] items-center" onSubmit={onSubmit}>
        <h1 className="mt-[10%] text-[35px]">로그인</h1>
        <div className="flex flex-col mt-[7%] w-[55%] h-[50%]">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => setIdInput(e.target.value)}
            placeholder="아이디"
            type="id"
            className="h-[25%] mb-[10px] p-[5px] border-2 border-deepGray rounded-[3px]"
          />
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPwInput(e.target.value)}
            placeholder="비밀번호"
            type="password"
            className="h-[25%] mb-[25px] p-[5px] border-2 border-deepGray rounded-[3px]"
          />
          <button type="submit" className="h-[28%] bg-yellow rounded-[3px]">
            로그인
          </button>
        </div>
      </form>

      <div className="flex w-[100%] my-2 items-center justify-center text-[14px] text-center">
        --- 간편 로그인 ---
      </div>
      <div className="flex flex-col w-[100%] h-[28%] justify-between items-center">
        <a href={KAKAO_LOGIN_URL} className="max-w-[73%]">
          <img src={KakaoLogin} alt="카카오 로그인 버튼" />
        </a>
        <a href={NAVER_LOGIN_URL} className="max-w-[73%]">
          <img src={NaverLogin} alt="네이버 로그인 버튼" className="h-[55%]" />
        </a>
      </div>
    </div>
  );
}

export default LoginModal;
