import "./App.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";

function App() {
  return (
    <>
    <div className="card">

      <Image />
      <Name />
      <Description />
      <Price />
    </div>
    </>
  );
}

export default App;
