import React from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import "./style.css";
export default function OurBlog() {
  return (
    <div>
      <div>
        <div className="title">
          <h1 style={{ marginTop: 100 }}>Our Blog</h1>
          <p style={{ color: "#999999", marginTop: 40 }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
      </div>
      <div
        className="row"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: 120,
          marginRight: 120,
        }}
      >
        <div className="col-xs-4" style={{ width: 400 }}>
          <div className="row">
            <img
              src="https://preview.colorlib.com/theme/ronaldo/images/image_1.jpg"
              style={{ height: 300 }}
            />
            <a style={{ fontSize: 20 }}>
              Why Lead Generation is Key for Business Growth
            </a>
            <div
              className="d-flex"
              style={{ color: "blue", fontSize: 16, fontWeight: 600 }}
            >
              <span style={{}}>sept.12, 2019 </span>
              <a style={{ marginLeft: 10 }}>Admin</a>
              <span
                className="icon-chat"
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <BsFillChatLeftTextFill />
              </span>
              3
            </div>
            <p style={{ color: "#999999", marginTop: 20 }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="col-xs-4" style={{ width: 400 }}>
          <div className="row">
            <img
              src="https://preview.colorlib.com/theme/ronaldo/images/image_2.jpg"
              style={{ height: 300, width: "auto" }}
            />
            <a style={{ fontSize: 20 }}>
              Why Lead Generation is Key for Business Growth
            </a>
            <div
              className="d-flex"
              style={{ color: "blue", fontSize: 16, fontWeight: 600 }}
            >
              <span style={{}}>sept.12, 2019 </span>
              <a style={{ marginLeft: 10 }}>Admin</a>
              <span
                className="icon-chat"
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <BsFillChatLeftTextFill />
              </span>
              3
            </div>
            <p style={{ color: "#999999", marginTop: 20 }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="col-xs-4" style={{ width: 400 }}>
          <div className="row">
            <img
              src="https://preview.colorlib.com/theme/ronaldo/images/image_3.jpg"
              style={{ height: 300 }}
            />
            <a style={{ fontSize: 20 }}>
              Why Lead Generation is Key for Business Growth
            </a>
            <div
              className="d-flex"
              style={{ color: "blue", fontSize: 16, fontWeight: 600 }}
            >
              <span style={{}}>sept.12, 2019 </span>
              <a style={{ marginLeft: 10 }}>Admin</a>
              <span
                className="icon-chat"
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <BsFillChatLeftTextFill />
              </span>
              3
            </div>

            <p style={{ color: "#999999", marginTop: 20 }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-xs-12 outblog-content d-flex"
        style={{
          backgroundImage: `url("https://preview.colorlib.com/theme/ronaldo/images/bg_1.jpg")`,
          height: 300,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <div className="" justify-content-center>
          <h1
            className="outBlog-content text-center"
            style={{ color: "white", marginTop: 20 }}
          >
            I'm &nbsp;
            <span style={{ color: "green" }} className="ourBlog-span">
              Available
            </span>{" "}
            for freelancing
          </h1>
          <h5 style={{ color: "white", width: "auto" }} className="text-center">
            A small river named Duden flows by their place and supplies it with
            the <br /> necessary regelialia.
          </h5>
          <div className="text-center ">
            <button className="buttonoutblog" style={{}}>
              HIRE ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
