// DogFact Component

import PropTypes from "prop-types";
export const DogFact = ({ newfacts }) => {
  console.log("DogComponent", newfacts);
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop

  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return (
    <div>
      <p>{newfacts.body}</p>
    </div>
  );
};

DogFact.propTypes = {
  newfacts: PropTypes.object,
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />