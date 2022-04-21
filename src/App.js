import './App.css';
import PortfolioContainer from './containers/PortfolioContainer';
import FooterLayout from './layouts/footer/footerLayout'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        <PortfolioContainer/>
      </body>
      <footer>
        <FooterLayout/>
      </footer>

    </div>
  );
}

export default App;
