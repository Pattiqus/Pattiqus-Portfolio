import './App.css';
import NavLayout from './components/layouts/header/NavLayout.jsx';
import aboutMe from './components/layouts/about/aboutMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavLayout>

          </NavLayout>
      </header>
      <body>
        <aboutMe>
          
        </aboutMe>
      </body>


    </div>
  );
}

export default App;
