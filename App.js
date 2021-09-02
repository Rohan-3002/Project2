// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
// import About from './components/About.js';

function App() {
  return (
  <>  
    
    <Navbar title="Botania" text="About Us"/>
    <div className="container">
      <TextForm heading="Enter text for analysis below" />
      {/* <About /> */}
    </div>
  </>
  );
}

export default App;
