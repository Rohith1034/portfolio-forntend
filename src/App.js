import './App.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header';
import About from './components/About.jsx';
import Cards from './components/Cards.jsx';
import RecentProjects from './components/RecentProjects.jsx';
import Myskills from './components/Myskills.jsx';
import Footer from './components/Footer.jsx';
import Experience from './components/Experience.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header /> 
      <About />
      <Cards />
      
      <RecentProjects />
      <Experience />
      <Myskills />
      <Footer />
    </div>
  );
}

export default App;
