import "./style.css";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
const Home = () => {
  const { text } = useTypewriter({
    words: ["Developer", "Designer", "Photograper"],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <>
      <div className=" text-center">
        <div
          style={{ backgroundColor: "#f8f9fa", height: 500 }}
          className="home-warpper"
        >
          <div className="backdrop"></div>
          <div class="button-center">
            <span className="down">&darr;</span>
          </div>
          <div className="container">
            <div className="branch col-4">
              <div>
                <a
                  className="d-flex"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div
                    style={{
                      height: 40,
                      width: 40,
                      backgroundColor: "blue",
                      borderRadius: 100,
                      textAlign: "center",
                    }}
                  >
                    <span>R</span>
                  </div>
                  onaldo
                </a>
              </div>
            </div>
            {/* <div className="navBar">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Resume</li>
                <li>Services</li>
                <li>Projects</li>
                <li>My Blog</li>
                <li>Contact</li>
              </ul>
            </div> */}
            <div className="col-8">
              <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ">
                      <li class="nav-item">
                        <a class="nav-link" href="#pageHome">
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#pageAbout">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#pageResume">
                          Resume
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#pageService">
                          Services
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#pageOutprojects">
                          Projects
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#pageOurBlog">
                          My Blog
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#pageContact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="text-center col-xs-12">
            <div className="">
              <h5 style={{ color: "blue", fontWeight: 900 }}>HEY I ! I AM</h5>
            </div>
            <div className="text-center">
              <h1>Ronaldo Fredrickson</h1>
            </div>
            <div>
              <h4 style={{ fontWeight: "900" }}>
                I'm a{" "}
                <span className="typingcss">
                  <Typewriter
                    words={["Developer", "Designer", "Photograper"]}
                    loop={false}
                  />
                </span>
                <Cursor />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
