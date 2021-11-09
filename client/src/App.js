import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {

  const [data, setData] = useState(undefined)

  useEffect(() => {

    axios.get('http://localhost:4000/')
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [])

  return (
    <div className="App">
      <Typography>Fetch data from 'localhost:4000'</Typography>
      {
        data ? data.map((item) => {
          return <div>
            <Typography>{item.id}-{item.name}-{item.city}</Typography>
          </div>
        }) : null
      }
    </div>
  );
}

export default App;
