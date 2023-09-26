import './App.css';
import {NavBar} from './components/NavBar'
import { Home } from './Home/Home';
import { About } from './about/About';
import { Skills } from './Skill/Skill';



function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
