// import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import Projects from './pages/Projects';
import About from './pages/About';



function App() {
  return (
    <>
      <Navbar />
      <Home id="/"/>
      <Projects id="projects"/>
      <About id="about"/>
    </>
  );
}

export default App;
