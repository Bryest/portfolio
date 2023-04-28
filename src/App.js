import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    document.body.style.background = darkMode ? 'var(--background-dark-color)' : "";
  })

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "var(--background-dark-color)" : "",
        color: darkMode ? "var(--background-light-color)" : "",
      }}
    >
      <Navbar />
      <Hero />
      <Skills />
      {/*<Work />*/}
      {/*<Works />*/}
      {/*<Portfolio />*/}
      {/*<Testimonial />*/}
      {/*<Contact />*/}
      {/*<Footer />*/}
    </div>
  );
}

export default App;
