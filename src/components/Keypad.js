// Code Keypad Component Here
import React from "react";

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }
  return (
    <div>
      <input placeholder="ENTER PASSWORD" type="password" name="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
