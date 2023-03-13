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
    <div>
      <Carousel
        elements={imgSrcList.map((el, index) => (
          <div
            key={index}
            className="flex flex-col aspect-square m-[1%] w-[50%] sm:w-[38%] md:w-[30%] lg:w-[18%] border-[1px] border-deepGray shadow"
          >
            {el.text ? (
              <img
                alt={el.id.toString()}
                src={el.src}
                className="h-[90%] sm:h-[85%] md:h-[83%] lg:h-[90%]"
              />
            ) : (
              <img alt={el.id.toString()} src={el.src} className="h-[100%]" />
            )}
            <div className="flex min-h-[10%] justify-center items-center font-semibold">
              {el.text}
            </div>
          </div>
        ))}
      />
      <CharacterDescription />
    </div>
  );
}

export default LandingPage;
