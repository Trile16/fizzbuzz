// FizzBuzz!!!
// Using React, write a component that has a button that increments up by one, starting at 0.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

import React, { useState } from "react";

function App(props) {
  return (
    <>
      <button>Increment</button>
      <div>{"This is where your number will be displayed"}</div>
    </>
  );
}

export default App;
