import Hello from "./hello.png"
import "./style.css"

function App() {
  return (
    <div className="header">
      <div className="left">
        <h1>
          Hello Folks!
        </h1>
        <p>
          Lets learn React together
        </p>

      </div>
      <div className="right">
        <img src={Hello} alt="Hello Img" />
      </div>
      
    </div>
  );
}

export default App;
