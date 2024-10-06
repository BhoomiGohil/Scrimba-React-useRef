
# Scrimba-React-useRef

This project demonstrates the usage of the `useRef` hook in React to manage direct DOM manipulations and component behavior in response to user interactions. The `useRef` hook is particularly useful when you need to directly access and manipulate DOM elements without triggering a re-render of the component.

## Features

- **useRef Hook**: The core of this project is the `useRef` hook, which stores references to DOM elements and maintains them across renders.
- **Image Hover Effect**: The project showcases a hover effect on an image that changes the content of an adjacent text element when hovered.
- **Button Click Event**: A button click updates the same text element with new content, demonstrating how `useRef` can control DOM elements.
- **Conditional Rendering**: The referenced text element (`h1`) is updated dynamically on both hover and button click events.

## Code Overview

The key component of the project is the `MainContent` function:

- `imgRef` is created using `useRef` to reference the `h1` element.
- `handleClick`: Changes the content of the `h1` element to "Button was clicked" and ensures it is displayed.
- `handleOnMouseOver`: Updates the `h1` content to "I am Hovered" when the image is hovered over.
- The `useRef` hook helps manipulate the DOM directly without causing a component re-render.

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/BhoomiGohil/Scrimba-React-useRef.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Scrimba-React-useRef
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Learn More

To learn more about the `useRef` hook and its use cases, you can refer to the official [React documentation on useRef](https://reactjs.org/docs/hooks-reference.html#useref).
