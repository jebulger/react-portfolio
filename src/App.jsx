import Header from "../src/components/Header";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";
import Resume from "../src/components/Resume";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
