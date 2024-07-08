// client/src/App.js
import React, { useEffect, useState } from 'react';
import { forecastMaterial, getData, uploadFile } from './predict-files';

const App = () => {
  const [file, setFile] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (file) {
      const result = await uploadFile(file);
      console.log(result);
    }
  };

  const ForeCast = async () => {
    try {
      const forecastResult = await forecastMaterial();
      setForecast(forecastResult.forecast);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Material Forecasting</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload File</button>
      </div>
      <div>
        <button onClick={ForeCast}>ForeCast File</button>
      </div>
      {(
        <div>
          <h2>Forecast: {forecast}</h2>
        </div>
      )}
      <div>
        <h2>Stored Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
