// Import necessary React hooks
import { React, useRef } from "react";

export default function MainContent() {
  const imgRef = useRef(null); // Create a reference to access the h1 element

  // Handle button click event
  function handleClick() {
    imgRef.current.style.display = "block"; // Show the h1 element
    imgRef.current.innerHTML = "Button was clicked"; // Update the content of h1
  }

  // Handle mouse over event on the image
  function handleOnMouseOver() {
    imgRef.current.style.display = "block"; // Show the h1 element
    imgRef.current.innerHTML = "I am Hovered"; // Update the content of h1
  }

  return (
    <div className="container">
      <div className="img-container">
        {/* Image element with mouse over event */}
        <img
          onMouseOver={handleOnMouseOver}
          src="https://picsum.photos/640/360"
        />
        {/* h1 element that will change on interaction */}
        <h1 ref={imgRef}>Hello</h1>
      </div>

      {/* Button that triggers the click event */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
