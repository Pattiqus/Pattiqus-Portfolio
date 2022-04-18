import logo from './logo.svg';
import './App.css';
import NavLayout from './layouts/NavLayout';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavLayout>

          </NavLayout>
        </BrowserRouter>
      </header>



    </div>
  );
}

export default App;
