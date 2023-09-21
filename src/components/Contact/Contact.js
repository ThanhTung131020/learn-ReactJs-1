import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { AiOutlineFire } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
export default function Contact() {
  return (
    <div>
      <div>
        <div className="title">
          <h1 style={{ marginTop: 100 }}>Contact me </h1>
          <p style={{ color: "#999999", marginTop: 40, fontSize: 20 }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div
          className="row col-md-12"
          style={{
            paddingLeft: 100,
            paddingRight: 100,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div className="contact-card col-md-3 ">
            <div
              className="center"
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                background: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <AiOutlineFire
                style={{ color: "white", height: 50, width: 50 }}
              />
            </div>
            <h3 style={{ marginTop: 20 }}>address</h3>
            <p style={{ color: "#999999", marginTop: 20 }}>
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
          </div>
          <div className="contact-card col-md-3 ">
            <div
              className="center"
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                background: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <AiOutlineFire
                style={{ color: "white", height: 50, width: 50 }}
              />
            </div>
            <h3 style={{ marginTop: 20 }}>address</h3>
            <p style={{ color: "#999999", marginTop: 20 }}>
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
          </div>
          <div className="contact-card col-md-3 ">
            <div
              className="center"
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                background: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <AiOutlineFire
                style={{ color: "white", height: 50, width: 50 }}
              />
            </div>
            <h3 style={{ marginTop: 20 }}>address</h3>
            <p style={{ color: "#999999", marginTop: 20 }}>
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
          </div>
          <div className="contact-card col-md-3 ">
            <div
              className="center"
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                background: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <AiOutlineFire
                style={{ color: "white", height: 50, width: 50 }}
              />
            </div>
            <h3 style={{ marginTop: 20 }}>address</h3>
            <p style={{ color: "#999999", marginTop: 20 }}>
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 text-center ">
          <img
            className="img-contact"
            src="https://preview.colorlib.com/theme/ronaldo/images/about.jpg"
          />
        </div>

        <form className="col-md-6 form-contact text-center">
          <input
            type="text"
            style={{
              height: 50,
              borderRadius: 5,
              width: "70%",
              border: "0.2px solid ",
            }}
            placeholder="Your name"
          />
          <input
            type="text"
            style={{
              height: 50,
              borderRadius: 5,
              width: "70%",
              border: "0.2px solid ",
              marginTop: 20,
            }}
            placeholder="Your email"
          />
          <input
            type="text"
            style={{
              height: 50,
              borderRadius: 5,
              width: "70%",
              border: "0.2px solid ",
              marginTop: 20,
            }}
            placeholder="Subject"
          />
          <textarea
            style={{
              width: "70%",
              height: 200,
              marginTop: 20,
              borderRadius: 5,
            }}
            placeholder="Message"
          />
          <div style={{ width: "70%", marginTop: 20 }} className="text-center">
            <input
              type="submit"
              style={{
                height: 50,
                width: "auto",
                backgroundColor: "blue",
                borderRadius: 20,
                color: "white",
                border: "none",
                fontSize: 12,

                fontWeight: "bold",
              }}
              value="SEND MESSAGE"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
