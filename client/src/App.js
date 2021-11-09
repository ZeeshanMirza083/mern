import { Typography } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {

  useEffect(() => {

    axios.get('http://localhost:4000/')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [])

  return (
    <div className="App">
      <Typography>Hello World!!!!</Typography>
    </div>
  );
}

export default App;
