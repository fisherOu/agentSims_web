import React from "react";
import ReactDOMClient from "react-dom/client";
import { Heros } from "./screens/Heros";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Heros />);
