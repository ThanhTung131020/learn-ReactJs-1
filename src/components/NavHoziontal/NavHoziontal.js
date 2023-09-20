import React, { useRef, useState, useEffect, useMemo } from "react";
import "./style.css";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skill from "./Skills/Skill";
import Awards from "./Awards/Awards";

export default function NavHoziontal() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);
  const isInViewport3 = useIsInViewport(ref3);
  const isInViewport4 = useIsInViewport(ref4);

  return (
    <div className="d-xs-block">
      <div style={{}} className="row">
        <div className="col-md-2">
          <ul className="navHozi  ">
            <li>
              <a href="#page1" className={`${isInViewport1 ? "current" : ""}`}>
                {" "}
                Education
              </a>
            </li>
            <li>
              <a href="#page2" className={`${isInViewport2 ? "current" : ""}`}>
                {" "}
                Experience
              </a>
            </li>
            <li>
              <a href="#page3" className={`${isInViewport3 ? "current" : ""}`}>
                {" "}
                Skills
              </a>{" "}
            </li>
            <li>
              <a href="#page4" className={`${isInViewport4 ? "current" : ""}`}>
                {" "}
                Awards
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <div ref={ref1}>
            <Education />
          </div>
          <div ref={ref2}>
            <Experience />
          </div>
          <div ref={ref3}>
            <Skill />
          </div>

          <div ref={ref4}>
            <Awards />
          </div>
        </div>
      </div>
    </div>
  );
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
