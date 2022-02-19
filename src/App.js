import React from "react";
import Header from "./Header";
import data from "./data";
import Tour from "./Tour";

export default function App() {
  const tours = data.map((tour) => {
    return <Tour key={tour.id} tour={tour} />;
  });
  return (
    <div className="App">
      <Header />
      {tours}
    </div>
  );
}
