import Home from "./home/Home";
import "./style.css";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const isPlaying = useContext(Context);
  console.log(isPlaying);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
