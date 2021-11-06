// import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects id='projects' />
    </>
  );
}

export default App;
