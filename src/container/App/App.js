// libraries
import React, { useState, useEffect } from 'react';
// self
import './App.css';

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/playlist')
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log('error'));
  }, []);

  return (
    <div className="divTable" data-testid="App">
      {data &&
        data.map((element, rowIndex) => (
          <div className="headRow" key={`row-${rowIndex}`}>
            <div className="divCell" align="center">
              {element.song_id}
            </div>
            <div className="divCell divCellName">{element.title}</div>
            <div className="divCell divCellName">{element.artist}</div>
            <div className="divCell" align="center">
              {element.genre}
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
