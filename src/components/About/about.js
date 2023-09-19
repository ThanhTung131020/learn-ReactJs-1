import "./style.css";
const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 image d-none d-md-block">
          <img src="https://preview.colorlib.com/theme/ronaldo/images/about.jpg" />
        </div>

        <div className="col-12 col-md-6 col-xs-12 about">
          <h1>About me</h1>
          <p className="text-wrap">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <div className="d-flex">
            <div className="about-name">Name:</div>
            <div className="">Ronaldo</div>
          </div>
          <div className="d-flex">
            <div className="about-name">Date of birth:</div>
            <div className="">November 28, 1989</div>
          </div>
          <div className="d-flex">
            <div className="about-name">Address:</div>
            <div className="">San Francisco CA 97987 USA</div>
          </div>
          <div className="d-flex">
            <div className="about-name">Zip code:</div>
            <div className="">1000</div>
          </div>
          <div className="d-flex">
            <div className="about-name">Email:</div>
            <div className="">ronaldo@gmail.com</div>
          </div>
          <div className="d-flex">
            <div className="about-name">Phone:</div>
            <div className="">+1-2234-5678-9-0</div>
          </div>
          <div style={{ marginTop: 35, width: "100%" }} className="d-flex">
            <div className="" style={{ display: "flex", fontSize: 25 }}>
              <span
                style={{ fontWeight: "900", color: "blue", marginRight: 10 }}
              >
                120
              </span>
              projects
            </div>
          </div>

          <button className=" dowloadCV">Dowload CV</button>
        </div>
      </div>
      <div
        className="row"
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        <div className="col-sm d-flex justify-content-center align-item-center">
          <img
            className="img-fluid"
            style={{ width: 200, height: "80%" }}
            src="https://preview.colorlib.com/theme/ronaldo/images/partner-1.png"
          />
        </div>
        <div className="col-sm d-flex justify-content-center align-item-center">
          <img
            className="img-fluid"
            style={{ width: 200, height: "80%" }}
            src="https://preview.colorlib.com/theme/ronaldo/images/partner-2.png"
          />
        </div>
        <div className="col-sm d-flex justify-content-center align-item-center">
          <img
            className="img-fluid"
            style={{ width: 200, height: "80%" }}
            src="https://preview.colorlib.com/theme/ronaldo/images/partner-3.png"
          />
        </div>
        <div className="col-sm d-flex justify-content-center align-item-center">
          <img
            className="img-fluid"
            style={{ width: 200, height: "80%" }}
            src="https://preview.colorlib.com/theme/ronaldo/images/partner-4.png"
          />
        </div>
        <div className="col-sm d-flex justify-content-center align-item-center">
          <img
            className="img-fluid"
            style={{ width: 200, height: "80%" }}
            src="https://preview.colorlib.com/theme/ronaldo/images/partner-5.png"
          />
        </div>
      </div>
    </>
  );
};
export default About;
