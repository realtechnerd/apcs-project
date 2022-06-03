import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import CasePage from "./views/CasePage";
import Home from "./views/Home";
import Navigator from "./components/Navigator";
import About from "./views/About";

export default function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location.pathname);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation) setTransitionStage("fadeOut");
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Navigator />
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location.pathname);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<Home key={Date.now()} />} />
          <Route path="/country/:id" element={<CasePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
