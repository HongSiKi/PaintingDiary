import React from 'react';

import CharacterDescription from '../components/landing/CharacterDescription';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

function LandingPage() {
  const imageList = [
    'https://m.media-amazon.com/images/M/MV5BMjE4MTcwMTM1Nl5BMl5BanBnXkFtZTcwMTIwMzMzMw@@._V1_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjsoq1MMDRoOUAwQc0lMvixIvvJdH2lbW0A&usqp=CAU',
    'https://www.pinkvilla.com/imageresize/ironmansocial.jpg?width=752&t=pvorg',
    'https://img.gta5-mods.com/q95/images/ironman-jarvis-voice/dc786b-iron-man-suit.jpg',
    'https://shop1.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop1.daumcdn.net%2Fshophow%2Fp%2FY14611916284.jpg%3Fut%3D20210901070905',
    'https://www.evpass.co.kr/shop/data//shop_logo/7J6Q64u01.jpg',
    'https://contents.lotteon.com/itemimage/_v072725/LM/88/01/06/26/32/13/8_/00/1/LM8801062632138_001_1.jpg/dims/optimize/dims/resizemc/400x400',
    'https://t1.daumcdn.net/cfile/tistory/9994CF3B5C90E60A08',
    'https://blog.kakaocdn.net/dn/cR3VJ1/btrDXoJyI2V/9g1c5li0hW6ExW1WFwmp6K/img.png',
  ];

  return (
    <div>
      <Carousel
        elements={imageList.map((src, i) => (
          <Card key={i} imgSrc={src} text={src} />
        ))}
      />
      <CharacterDescription />
    </div>
  );
}

export default LandingPage;
