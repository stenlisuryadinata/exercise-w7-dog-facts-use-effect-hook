// Import required  hooks
import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [fact, setFact] = useState([]);

  useEffect(() => {
    fetch("https://dogapi.dog/api/v2/facts")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setFact(data.data[0].attributes);
        }, 2000);
      });
  }, []);
  // Hint: Define the API endpoint
  // Hint: Create a function to fetch the dog fact
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

  return (
    <div className="App">
      <h1>Fun Dog Facts</h1>
      <div className="text_box">
        {fact.length !== 0 ? <DogFact newfacts={fact} /> : <p className="loading">Loading</p>}
      </div>
    </div>
  );
};