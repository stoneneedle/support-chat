import React, { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/api/")
    .then((resp) => resp.json())
    .then(
      data => {
        setBackendData(data);
      }
    );
  }, []);

  return (
    <div className="App">

    {(typeof backendData.users === 'undefined') ? (
      <p>Loading...</p>
    ): (
      backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
    )}

    </div>
  );
}

export default App;
