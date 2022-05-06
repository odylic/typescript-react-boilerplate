import React from "react";
import "../App.scss";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(async () => {
    const response1 = await fetch("/api");
    const response2 = await response1.json();
    const data = await response2;
    console.log(data.message);
    setData(data.message);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        This is from the React component
      </header>
    </div>
  );
}

export default App;
