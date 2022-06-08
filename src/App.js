import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";


function App() {
  return (
    <div>
      
      <Navbar/>
      <div className='scroll-smooth snap-mandatory snap-y'>
        <Home className='snap-start'/>
        <About className='snap-start'/>
        <Skills className='snap-start'/>
        <Experience className='snap-start'/>
        <Contact className='snap-start'/>
      </div>
    </div>
  );
}

export default App;
