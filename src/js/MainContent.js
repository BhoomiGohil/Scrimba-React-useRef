import { React, useRef } from "react";

export default function MainContent() {
  const imgRef = useRef(null);

  function handleClick() {
    imgRef.current.style.display = "block";
    imgRef.current.innerHTML = "Button was clicked";
  }

  function handleOnMouseOver() {
    imgRef.current.style.display = "block";
    imgRef.current.innerHTML = "I am Hovered";
  }
  return (
    <div className="container">
      <div className="img-container">
        <img
          onMouseOver={handleOnMouseOver}
          src="https://picsum.photos/640/360"
        />
        <h1 ref={imgRef}>Hello</h1>
      </div>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
