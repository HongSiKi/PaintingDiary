import React from 'react';

import Assets from '../components/decorateMyRoom/Assets';
import MyRoom from '../components/decorateMyRoom/MyRoom';
import Room from '../components/decorateMyRoom/Room';

function DecorateMyRoomPage() {
  return (
    <div className="flex h-screen mx-[10%]">
      <MyRoom model={<Room />} />
      <Assets />
    </div>
  );
}

export default DecorateMyRoomPage;
