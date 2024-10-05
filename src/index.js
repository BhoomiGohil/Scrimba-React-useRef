import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
const rootElement = document.querySelector("#root"); // Select the root element from the HTML

if (!rootElement) throw new Error("Failed to find the root h1"); // Ensure the root element exists

const root = createRoot(rootElement); // Create a root to manage rendering in React

root.render(<MainContent />); // Render the MainContent component to the DOM
