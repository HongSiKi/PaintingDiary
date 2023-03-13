import React from 'react';

import Carousel from '../components/landing/Carousel';
import CharacterDescription from '../components/landing/CharacterDescription';

function LandingPage() {
  const imgSrcList = [
    'https://www.10wallpaper.com/wallpaper/1366x768/1411/puppy_retriever_rest-Animal_Photo_Wallpaper_1366x768.jpg',
    'https://www.10wallpaper.com/wallpaper/1920x1440/1409/Cute_Little_Puppy-photography_HD_wallpaper_1920x1440.jpg',
    'https://post-phinf.pstatic.net/MjAxNzA4MjVfMTY3/MDAxNTAzNjM0Njg4OTg4.bn6J8-JuqtMRhvPYSt8psWGHFxDTdd5oP6WrS_IL-C4g.52DnCYHKYntko0agq04Fq4cJyVaJsg4k3QrQDrjzbK4g.JPEG/%EA%B0%95%EC%95%84%EC%A7%80026.jpg?type=w1200',
    'https://img.danawa.com/images/descFiles/5/279/4278439_1591530897943.jpeg',
    'https://i.pinimg.com/474x/19/97/75/199775b7651168880acdbf52f2c7c72a.jpg',
    'https://file.thisisgame.com/upload/tboard/user/2016/05/29/20160529004354_7091.jpeg',
  ];

  return (
    <div>
      <Carousel
        elements={imgSrcList.map((el, index) => (
          <img
            key={index}
            alt={el}
            src={el}
            // 기본값 50, sm, md, lg에 따라 사진 비율 변경
            className="aspect-square px-[1%] w-[50%] sm:w-[38%] md:w-[30%] lg:w-[18%]"
          />
        ))}
      />
      <CharacterDescription />
    </div>
  );
}

export default LandingPage;
