import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import ModelViewer from './pages/ModelViewer';

const container = document.getElementById('root');

if (container !== null) {
  const root = createRoot(container);
  root.render(<ModelViewer />);
} else {
  alert('root DOM이 없습니다.');
}
