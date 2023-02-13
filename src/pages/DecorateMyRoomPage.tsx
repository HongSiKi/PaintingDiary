import React from 'react';

import Assets from '../components/decorateMyRoom/Assets';
import MyRoomEditor from '../components/decorateMyRoom/MyRoomEditor';

function DecorateMyRoomPage() {
  return (
    <div className="flex h-screen">
      <MyRoomEditor />
      <Assets />
    </div>
  );
}

export default DecorateMyRoomPage;
