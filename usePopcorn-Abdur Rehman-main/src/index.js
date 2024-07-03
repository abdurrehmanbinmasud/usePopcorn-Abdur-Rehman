import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="green" max={10} onMovieRating={setMovieRating} />
//       <p>This movie was rated {movieRating} Stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating
      max={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={23} color="red" className="test" defaultRating="1" /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
