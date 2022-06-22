import React, { useState } from "react";

export const Page1 = () => <h1>page 1</h1>;
export const Page2 = () => <h1>page 2</h1>;
export const Page3 = () => <h1>page 3</h1>;

export default function Demo() {
  const [pageNumber, setPageNumber] = useState("1");

  return (
    <div className="App">
      <h1>Demo</h1>
      <p>This is the demo page.</p>
      <RenderPage pageNumber={pageNumber} />
      <button onClick={() => setPageNumber("1")}>1</button>
      <button onClick={() => setPageNumber("2")}>2</button>
      <button onClick={() => setPageNumber("3")}>3</button>
    </div>
  );
}

export const RenderPage = ({ pageNumber }) => {
  switch (pageNumber) {
    case "1":
      return <Page1 />;
    case "2":
      return <Page2 />;
    case "3":
      return <Page3 />;
    default:
      return <p>no page</p>;
  }
};