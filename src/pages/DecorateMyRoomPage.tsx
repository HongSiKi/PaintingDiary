import React from 'react';

import Assets from '../components/decorateMyRoom/Assets';
import MyRoom from '../components/decorateMyRoom/MyRoom';

function DecorateMyRoomPage() {
  return (
    <div className="flex mx-[10%] my-[8%] h-screen">
      <MyRoom />
      <Assets />
    </div>
  );
}

export default DecorateMyRoomPage;
