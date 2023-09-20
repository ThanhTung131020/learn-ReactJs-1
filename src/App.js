import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/about";
import NavHoziontal from "./components/NavHoziontal/NavHoziontal";
import Services from "./components/Services/Services";
import OurProjects from "./components/OurProjects/OurProjects";
import OurBlog from "./components/OurBlog/OurBlog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="d-block">
      <div id="pageHome">
        <Home />
      </div>
      <div id="pageAbout">
        <About />
      </div>
      <div style={{ marginTop: 100 }} id="pageResume">
        <NavHoziontal />
      </div>

      <div id="pageService">
        <Services />
      </div>
      <div id="pageOutprojects">
        <OurProjects />
      </div>
      <div id="pageOurBlog">
        <OurBlog />
      </div>
      <div id="pageContact">
        <Contact />
      </div>
      <div id="pageFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
