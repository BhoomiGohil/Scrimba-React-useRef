import React from "react";

export default function MainContent() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function handleOnMouseOver() {
    console.log("I was hovered!");
  }
  return (
    <div className="container">
      <img
        onMouseOver={handleOnMouseOver}
        src="https://picsum.photos/640/360"
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
