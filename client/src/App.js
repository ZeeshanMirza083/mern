import './App.css';
import { Header } from "./components/Header";

function App() {

  // useEffect(() => {

  //   axios.get('http://localhost:4000/')
  //     .then(function (response) {
  //       setData(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  // }, [])

  return (
    <div className="App">
      <Header></Header>

    </div>
  );
}

export default App;
