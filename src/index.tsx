import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(<h1>Hello React!</h1>);
} else {
  alert("root DOM이 없습니다.");
}
