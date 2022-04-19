import './App.css';
import PortfolioContainer from './components/containers/PortfolioContainer';
import FooterLayout from './components/layouts/footer/footerLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        <PortfolioContainer>

        </PortfolioContainer>
      </body>
      <footer>
        <FooterLayout/>
      </footer>

    </div>
  );
}

export default App;
