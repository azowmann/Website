import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Works from "./components/Works/works";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Works/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
