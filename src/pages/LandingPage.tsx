import React from 'react';

import Carousel from '../components/landing/Carousel';
import CharacterDescription from '../components/landing/CharacterDescription';

function LandingPage() {
  const imgSrcList = [
    {
      id: 1,
      src: 'https://www.10wallpaper.com/wallpaper/1366x768/1411/puppy_retriever_rest-Animal_Photo_Wallpaper_1366x768.jpg',
      text: '리트리버',
    },
    {
      id: 2,
      src: 'https://www.10wallpaper.com/wallpaper/1920x1440/1409/Cute_Little_Puppy-photography_HD_wallpaper_1920x1440.jpg',
      text: '웰시코기',
    },
    {
      id: 3,
      src: 'https://post-phinf.pstatic.net/MjAxNzA4MjVfMTY3/MDAxNTAzNjM0Njg4OTg4.bn6J8-JuqtMRhvPYSt8psWGHFxDTdd5oP6WrS_IL-C4g.52DnCYHKYntko0agq04Fq4cJyVaJsg4k3QrQDrjzbK4g.JPEG/%EA%B0%95%EC%95%84%EC%A7%80026.jpg?type=w1200',
    },
    {
      id: 4,
      src: 'https://img.danawa.com/images/descFiles/5/279/4278439_1591530897943.jpeg',
      text: '시고르자브종',
    },
    {
      id: 5,
      src: 'https://i.pinimg.com/474x/19/97/75/199775b7651168880acdbf52f2c7c72a.jpg',
    },
    {
      id: 6,
      src: 'https://file.thisisgame.com/upload/tboard/user/2016/05/29/20160529004354_7091.jpeg',
      text: '고양이와 강아지',
    },
  ];

  return (
    <div className="overflow-hidden">
      <Carousel
        elements={imgSrcList.map((el, index) => (
          <div
            key={index}
            className="inline-block align-top w-[50vw] sm:w-[50vw] md:w-[30vw] lg:w-[17vw] m-[5px] mb-[10px] border-[1px] border-deepGray shadow"
          >
            {el.text ? (
              <img alt={el.id.toString()} src={el.src} className="aspect-square" />
            ) : (
              <img alt={el.id.toString()} src={el.src} className="aspect-square w-[100%]" />
            )}
            <div className="text-center font-semibold">{el.text}</div>
          </div>
        ))}
      />
      <CharacterDescription />
    </div>
  );
}

export default LandingPage;
