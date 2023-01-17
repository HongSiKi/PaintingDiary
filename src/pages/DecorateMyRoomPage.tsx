import React from 'react';

import Assets from '../components/decorateMyRoom/Assets';
import MyRoom from '../components/decorateMyRoom/MyRoom';
import Room from '../components/decorateMyRoom/Room';

function DecorateMyRoomPage() {
  return (
    <div className="flex mx-[10%] my-[8%] h-screen">
      <MyRoom model={<Room />} />
      <Assets />
    </div>
  );
}

export default DecorateMyRoomPage;
