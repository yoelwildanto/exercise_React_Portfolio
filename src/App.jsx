// import './App.css';
// import './main.css';
import { Home } from './Home/Home';
import { About } from './about/About';
import { Skills } from './Skill/Skill';
import { NavBar2 } from './components/CobaNavbar';



function App() {
  return (
    <div>
      <NavBar2/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
