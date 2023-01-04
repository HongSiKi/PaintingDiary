import React from 'react';

function Portfolio({ portfolioSrc }: { portfolioSrc: string }) {
  return (
    <div className="h-[100%]">
      <iframe src={portfolioSrc} title="portfolio" className="w-[100%] h-[100%]">
        포트폴리오가 없습니다.
      </iframe>
    </div>
  );
}

export default Portfolio;
