import React, { useState, useCallback } from "react";
import "./App.css";
import LaunchInfoList from "./components/Launch";
import LaunchesInfoList from "./components/Launches";

function App() {
  const [id, setId] = useState(null);

  const handleIdChange = useCallback((newId) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchesInfoList handleIdChange={handleIdChange} />
      {id && <LaunchInfoList id={String(id)} />}
    </div>
  );
}

export default App;
