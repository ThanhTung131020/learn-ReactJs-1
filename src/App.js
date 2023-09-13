
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/about'
import NavHoziontal from './components/NavHoziontal/NavHoziontal';
import Services from './components/Services/Services'
import OurProjects from './components/OurProjects/OurProjects';
import OurBlog from './components/OurBlog/OurBlog';
import Contact from './components/Contact/Contact'
import Footer from './components/footer/footer'
function App() {

  return (
    <div className='d-block'>
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div style={{marginTop:100}}>
        <NavHoziontal />
      </div>

      <div>
        <Services />
      </div>
      <div>
        <OurProjects />
      </div>
      <div>
        <OurBlog />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
